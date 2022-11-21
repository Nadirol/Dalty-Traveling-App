import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { CategoryTagCard, DiscoverResultCard } from "../components/cards";
import { categoriesList } from "../data"
import { LeftButton, RightButton } from "../components/buttons";

let offset = 0;
let pageLength = 24;
let lon;
let lat;
let filters;
const defaultLat = 34.0083;
const defaultLon = -118.4988;

const Discover = () => {
    const { filter } = useParams();

    const pbApiKey = "31488120-64bdfca9e4ad103bf79d2f9f6";
    const otmApiKey = "5ae2e3f221c38a28845f05b6cdf805e810c7cdbb7f23f88fd8740ad9";
    const apiGet = (method, query) => {
        return axios.get(
        "https://api.opentripmap.com/0.1/en/places/" +
            method +
            "?apikey=" +
            otmApiKey +
            (query ? "&" + query : '')
        );
    };
    const apiGetImage = () => {
        setIsLoadingImg(true);
        return axios.get(`https://pixabay.com/api/?key=${pbApiKey}&category=travel&page=${getRandomInt(10)}&per_page=24`)
        .then(async res => {
            setImageData(await res.data.hits)
        })
        .finally(() => setIsLoadingImg(false));
    }

    const [activeFilters, setActiveFilters] = useState([categoriesList[0].toLowerCase().replaceAll(' ','_')]);

    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingImg, setIsLoadingImg] = useState(true);
    const [discoverData, setDiscoverData] = useState('');
    const [imageData, setImageData] = useState('');

    useEffect(() => {
        if ( filter ) {
            if (categoriesList.includes(filter)) {
                const foundIdx = categoriesList.findIndex(el => el === filter)
                categoriesList.splice(foundIdx, 1)
                categoriesList.unshift(filter)
            } else { 
                categoriesList.unshift(filter)
            };
            setActiveFilters([filter.toLowerCase().replaceAll(' ','_')]);
            filters = [filter.toLowerCase().replaceAll(' ','_')]
        } else { 
            setActiveFilters([categoriesList[0].toLowerCase().replaceAll(' ','_')])
            filters = [categoriesList[0].toLowerCase().replaceAll(' ','_')]
        }
        apiGetImage();
        apiGet(
            "radius",
            `radius=10000&limit=${pageLength}&offset=${offset}&lon=${defaultLon}&lat=${defaultLat}&kinds=${filters.toString()}&rate=2&format=json`
        ).then(async res => setDiscoverData(await res.data))
        .finally(() => setIsLoading(false));
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    const toggleFilter = (category) => {
        setDiscoverData('');
        setIsLoading(true)
        if (activeFilters.includes(category.toLowerCase().replaceAll(' ','_'))) {
            setActiveFilters(
                prevFilters => prevFilters.filter(el => el !== category.toLowerCase().replaceAll(' ','_'))
            );
            filters = filters.filter(el => el !== category.toLowerCase().replaceAll(' ','_'));
        } else {
            setActiveFilters(prevFilters => prevFilters.concat(category.toLowerCase().replaceAll(' ','_')));
            filters = filters.concat(category.toLowerCase().replaceAll(' ','_'));
        }
        apiGet(
            "radius",
            `radius=10000&limit=${pageLength}&offset=${offset}&lon=${lon ? lon : defaultLon}&lat=${lat ? lat :defaultLat}&kinds=${filters.toString()}&rate=2&format=json`
        ).then(async res => {
            setDiscoverData(await res.data)
        })
        .finally(() => setIsLoading(false));
    }

    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        apiGet(
            "geoname", `name=${searchValue}`
        ).then( async res => {
            lon = await res.data.lon
            lat = await res.data.lat
            apiGet(
                "radius",
                `radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon ? lon : defaultLon}&lat=${lat ? lat :defaultLat}&kinds=${filters.toString()}&rate=2&format=json`
              )
              .then(async res => {
                setDiscoverData(await res.data)
              })
              .finally(() => setIsLoading(false));
        })
        apiGetImage();
    }

    const tagSlider = useRef(null);
    const [tagsScrollPos, setTagsScrollPos] = useState(0);
    const [atBottom, setAtBottom] = useState(false);

    const handleScroll = () => {
        setTagsScrollPos(tagSlider.current.scrollLeft)
        if (tagSlider.current.scrollWidth - tagSlider.current.scrollLeft === tagSlider.current.clientWidth) {
            setAtBottom(true)
        } else setAtBottom(false);
    }

    const prevTag = () =>
    tagSlider.current.scrollBy({
      top: 0,
      left: -10,
      behavior: "smooth",
    });

    const nextTag = () => {
    tagSlider.current.scrollBy({
        top: 0,
        left: 100,
        behavior: "smooth",
        });
    };

    return (
        <div className="w-container mx-auto pt-12 mb-12">
            <div className="">
                <form onSubmit={(e) => handleSearchSubmit(e)}
                    className="bg-white flex items-center px-4 md:px-7 py-2 rounded-[100vw] w-discover-search-form mx-auto">
                    <input type="text" placeholder="Search for destinations" value={searchValue} onChange={(e) => handleSearchChange(e)}
                        className="w-full text-dark-gray font-inter font-normal text-base leading-none focus:outline-0
                        placeholder:text-mediumgray placeholder:text-sm placeholder:leading-none placeholder:font-normal
                            placeholder:font-inter"/>
                    <input type="submit" name="" id="submit-button" className="hidden"/>
                    <label
                        htmlFor="submit-button"
                        className="cursor-pointer mx-auto ml-2 md:ml-6"
                    >
                        <img
                        src={process.env.PUBLIC_URL + "/images/search icon.svg"}
                        alt="search"
                        />
                    </label>
                </form>
                <div className="relative border-b border-very-dark-blue">
                    <div className="flex gap-5 shrink-0 overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain py-6" 
                        ref={tagSlider} onScroll={handleScroll}>
                        {categoriesList.map((category, index) => (
                                <CategoryTagCard 
                                    key={index}
                                    name={category}
                                    activeFilters={activeFilters}
                                    handleClick={() => toggleFilter(category)}
                                />
                            )
                        )}
                    </div>
                    <div className={`absolute z-20 inset-0 h-full w-[10%] mr-auto 
                        ${tagsScrollPos > 0 ? 'md:flex' : 'md:hidden'} items-center hidden
                            after:h-full after:w-full after:bg-gradient-to-l after:from-transparent
                             after:to-light-yellow after:pointer-events-none`}>
                        <div className="bg-light-yellow w-min mr-auto">
                            <LeftButton
                                key={-1}
                                padding='p-[10px]'
                                handleClick={prevTag}
                            />
                        </div>
                    </div>
                    <div className={`absolute z-20 inset-0 h-full w-[10%] ml-auto 
                        ${atBottom ? 'md:hidden' : 'md:flex' } items-center hidden
                            before:h-full before:w-full before:bg-gradient-to-r before:from-transparent
                             before:to-light-yellow before:pointer-events-none`}>
                        <div className="bg-light-yellow w-min ml-auto">
                            <RightButton
                                key={1}
                                padding='p-[10px]'
                                handleClick={nextTag}
                            />
                        </div>
                    </div>
                </div>
            </div>
            { !isLoading && !isLoadingImg && discoverData && (
                <div>
                    <div className="columns-2 md:columns-3 xl:columns-4 my-6 animate-fade-in">
                        {discoverData.map((item,index) => (
                            <DiscoverResultCard
                                key={item.xid}
                                name={item.name}
                                xid={item.xid}
                                image={imageData[index].webformatURL}
                                distance={item.dist}
                            />
                        ))}
                    </div>
                    <a href="https://pixabay.com/" target="_blank" rel="noreferrer"
                        className="text-regular-gray font-poppins font-light text-xs">
                        Images provided by Pixabay
                    </a>
                </div>
            )}
        </div>
)}

export default Discover;