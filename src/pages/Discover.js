import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { CategoryTagCard, DiscoverResultCard } from "../components/cards";
import { categoriesList } from "../data"

let offset = 0;
let pageLength = 24;
let lon;
let lat;
let filters;
const defaultLat = 34.0083;
const defaultLon = -118.4988;

const Discover = () => {
    const { filter } = useParams();

    const apiKey = "5ae2e3f221c38a28845f05b6cdf805e810c7cdbb7f23f88fd8740ad9";
    const apiGet = (method, query) => {
        return axios.get(
        "https://api.opentripmap.com/0.1/en/places/" +
            method +
            "?apikey=" +
            apiKey +
            (query ? "&" + query : '')
        );
    };

    const [activeFilters, setActiveFilters] = useState([categoriesList[0].toLowerCase().replaceAll(' ','_')]);

    const [isLoading, setIsLoading] = useState(true);
    const [discoverData, setDiscoverData] = useState('');

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
        apiGet(
            "radius",
            `radius=10000&limit=${pageLength}&offset=${offset}&lon=${defaultLon}&lat=${defaultLat}&kinds=${filters.toString()}&rate=2&format=json`
        ).then(async res => setDiscoverData(await res.data))
        .finally(() => setIsLoading(false));
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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
    }

    return (
        <div className="w-container mx-auto">
            <div className="">
                <form onSubmit={(e) => handleSearchSubmit(e)}
                    className="bg-white flex items-center px-7 py-2 rounded-[100vw] w-discover-search-form mx-auto">
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
                <div className="flex gap-5 shrink-0 overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain">
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
            </div>
            { !isLoading && discoverData && (
                <div className="grid grid-cols-4">
                    {discoverData.map(item => (
                        <DiscoverResultCard
                            key={item.xid}
                            name={item.name}
                            xid={item.xid}
                        />
                    ))}
                </div>
            )}
        </div>
)}

export default Discover;