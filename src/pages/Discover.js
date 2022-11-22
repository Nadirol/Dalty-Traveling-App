import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { DiscoverResultCard } from "../components/cards";
import { categoriesList } from "../data"
import Loader from "../components/Loader";
import { AiOutlineReload } from "react-icons/ai"

import { DiscoverHeader, DiscoverFilters } from "../components/discover"

let radius= 3000;
let offset = 0;
let pageLength = 24;
let lon;
let lat;
let filters;
let outOfResults = false;
const defaultLat = 34.0083;
const defaultLon = -118.4988;
const noFilters = "accomodations,amusements,interesting_places,sport,tourist_facilities"


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

    // const apiGetResults = (searchType) => {
    //     if (searchType === 'location') {
    //         setIsLoading(true)
    //         apiGetImage(24);
    //         apiGet(
    //             "geoname", `name=${searchValue}`
    //         ).then( async res => {
    //             lon = await res.data.lon
    //             lat = await res.data.lat
    //             apiGet(
    //                 "radius",
    //                 `radius=3000&limit=24&offset=0&lon=${lon ? lon : defaultLon}&lat=${lat ? lat :defaultLat}&kinds=${filters.length > 0 ? filters.toString() : noFilters}&rate=2&format=json`
    //               )
    //               .then(async res => {
    //                 setDiscoverData(await res.data);
    //                 checkResultsCount(await res.data);
    //               })
    //               .finally(() => setIsLoading(false));
    //         })
    //     } 
    // }

    const apiGetImage = async () => {
        setIsLoadingImg(true);
        return await axios.get(`https://pixabay.com/api/?key=${pbApiKey}&category=travel&image_type=photo&page=${getRandomInt(10)}&per_page=50`)
        .then(async res => {
            setImageData(await res.data.hits)
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoadingImg(false));
    }

    const reduceNum = (num) => {
        while (num > imageData.length - 1) { num -= imageData.length}
        return num
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
            `radius=${radius}&limit=${pageLength}&offset=${offset}&lon=${defaultLon}&lat=${defaultLat}&kinds=${filters ? filters.toString() : noFilters}&rate=2&format=json`
        ).then(async res => {
            setDiscoverData(await res.data);
            checkResultsCount(await res.data);
        })
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
            `radius=3000&limit=${pageLength}&offset=0&lon=${lon ? lon : defaultLon}&lat=${lat ? lat :defaultLat}&kinds=${filters.length > 0 ? filters.toString() : noFilters}&rate=2&format=json`
        ).then(async res => {
            setDiscoverData(await res.data);
            checkResultsCount(await res.data);
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
                `radius=3000&limit=${pageLength}&offset=0&lon=${lon ? lon : defaultLon}&lat=${lat ? lat :defaultLat}&kinds=${filters.length > 0 ? filters.toString() : noFilters}&rate=2&format=json`
              )
              .then(async res => {
                setDiscoverData(await res.data);
                checkResultsCount(await res.data);
              })
              .finally(() => setIsLoading(false));
        })
    }

    const clearSearchValue = () => {
        setSearchValue('')
    }

    const tagSlider = useRef(null);
    const [tagsScrollPos, setTagsScrollPos] = useState(0);
    const [atSliderEnd, setAtSliderEnd] = useState(false);

    const handleScroll = () => {
        setTagsScrollPos(tagSlider.current.scrollLeft)
        if (tagSlider.current.scrollWidth - tagSlider.current.scrollLeft - 2 <= tagSlider.current.clientWidth) {
            setAtSliderEnd(true)
        } else setAtSliderEnd(false);
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

    const checkResultsCount = (data) => {
        if (data.length < 24 ) {
            outOfResults = true
        } else { outOfResults = false }
    };

    const loadMore = () => {
        if ( outOfResults ) {
            radius += 5000
        }
        offset += discoverData.length
        apiGet(
            "radius",
            `radius=${radius}&limit=${pageLength}&offset=${offset}&lon=${lon ? lon : defaultLon}&lat=${lat ? lat :defaultLat}&kinds=${filters.length > 0 ? filters.toString() : noFilters}&rate=2&format=json`
        )
        .then(async res => {
            setDiscoverData(prevData => prevData.concat(res.data))
            checkResultsCount(await res.data);
        })
    }

    return (
        <div className=" my-8">
            <DiscoverHeader 
                handleSearchSubmit={handleSearchSubmit}
                searchValue={searchValue}
                handleSearchChange={handleSearchChange}
                clearSearchValue={clearSearchValue}
            />
            <DiscoverFilters 
                tagSlider={tagSlider}
                handleScroll={handleScroll}
                activeFilters={activeFilters}
                toggleFilter={toggleFilter}
                tagsScrollPos={tagsScrollPos}
                atSliderEnd={atSliderEnd}
                prevTag={prevTag}
                nextTag={nextTag}
            />
            { !isLoading && !isLoadingImg && discoverData
                ? (
                    <div className="px-4">
                        <div className="my-6 animate-fade-in columns-2 md:columns-3 xl:columns-4">
                            {discoverData.map((item,index) => (
                                <DiscoverResultCard
                                    key={item.xid}
                                    name={item.name}
                                    xid={item.xid}
                                    image={imageData[reduceNum(index)].webformatURL}
                                    distance={item.dist}
                                />
                            ))}
                        </div>
                        <div className="hover:bg-very-dark-blue hover:text-white rounded-[50%] p-3 w-min mx-auto text-dark-gray animate-pop"
                            onClick={loadMore}>
                            <AiOutlineReload style={{ width: 28, height: 28 }} />
                        </div>

                        <a href="https://pixabay.com/" target="_blank" rel="noreferrer"
                            className="text-regular-gray font-poppins font-light text-xs">
                            Images provided by Pixabay
                        </a>
                    </div>
                )
                : <Loader/>
            }
        </div>
)}

export default Discover;