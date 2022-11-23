import { useRef, useState } from "react";
import axios from "axios";
import countryCodes from "../../data/countryCodes.json";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import Loader from "../Loader";
import SearchResults from "./SearchResults";

let lon;
let lat;

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

const apiGetLocation = async (input) => {
    return await apiGet("geoname", "name=" + input).then(res => res.data)
}

const apiGetResultsCount = async () => {
    return await 
    apiGet(
        "radius",
        `radius=1000&limit=6&offset=0&lon=${lon}&lat=${lat}&rate=2&format=count`
    ).then(res => res.data)
}

const apiGetResults = async ({ pageParam = 0 }) => {
    return await
    apiGet(
        "radius",
        `radius=1000&limit=6&offset=${pageParam}&lon=${lon}&lat=${lat}&rate=2&format=json`
    ).then(res => res.data)
}

const SearchSection = () => {
    const [searchValue, setSearchValue] = useState("");
  
    const handleSearchChange = (e) => {
      setSearchValue(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchLocation();
    }

    const { isLoading: isLoadingLocation, data: locationData, refetch: fetchLocation } = useQuery(
        ['location'],
        () => apiGetLocation(searchValue),
        {
            onSuccess: data => {
                console.log(data.lon, data.lat)
                lon = data.lon;
                lat = data.lat
            },
            enabled: false,
            refetchOnWindowFocus: false,
        }
    )

    const { isLoading: isLoadingResultsCount, data: resultsCount } = useQuery(
        ['resultsCount', lon],
        apiGetResultsCount,
        {
            enabled: !!lon && !!lat,
            refetchOnWindowFocus: false,
            select: data => data.count,
            onSuccess: () => resultSection.current.scrollIntoView({behavior: "smooth"}),
        }
    )

    const { isLoading: isLoadingSearchResults,
        data: searchResults,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery(
        ['searchResults', lon, lat],
        apiGetResults,
        {
            enabled: !!lon && !!lat,
            getNextPageParam: (lastPage, pages) => {
                return lastPage.length >= 6 ? pages.reduce((accumulator, currentValue) => accumulator.concat(currentValue)).length : undefined
            },
            select: (data) => data.pages.reduce((accumulator, currentValue) => accumulator.concat(currentValue)),
            refetchOnWindowFocus: false,
        }
    )

    const resultSection = useRef(null);

    function capitalizeFirstLetter(string) {
        let newString = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return newString.join(' ');
    };



    return (
        <section className=" w-container mx-auto">
            <div className="grid gap-8 xl:gap-36 xl:grid-flow-col xl:auto-cols-fr text-center xl:text-start mb-16 xl:mb-[124px]">
                <img src={process.env.PUBLIC_URL + "/images/hero1.png"} alt="" className="xl:ml-auto mx-auto"/>
                <div className="mt-16">
                    <h1 className="font-sen font-bold text-[4rem] md:text-[5.25rem] leading-none mb-6">
                        Discover the Best Lovely Places
                    </h1>
                    <p className="font-inter font-normal text-base md:text-[1.125rem] leading-snug mb-[2.75rem] w-search-form mx-auto xl:mx-0">
                        Plan and book your perfect trip with expert advice, travel tips,
                        destination information and inspiration from us.
                    </p>
                    <form onSubmit={(e) => handleSearchSubmit(e)}
                        className="bg-white flex items-center px-7 py-5 rounded-[100vw] w-search-form mx-auto xl:mx-0">
                        <div className="mx-auto flex">
                            <div className="pr-1 md:pr-8 border-r border-light-gray">
                                <h1 className="font-inter font-normal text-[1.125rem] leading-none mb-2 text-start">
                                    Where
                                </h1>
                                <div className="flex">
                                    <input type="text" placeholder="Center Point, Lo..." value={searchValue} onChange={(e) => handleSearchChange(e)}
                                    className="w-full md:w-32 text-dark-gray font-inter font-normal text-base leading-none focus:outline-0
                                        placeholder:text-mediumgray placeholder:text-xs placeholder:leading-none placeholder:font-normal
                                            placeholder:font-inter"/>
                                    <img src={process.env.PUBLIC_URL + "/images/location icon.svg"} alt=""/>
                                </div>
                            </div>
                            <div className="pl-1 md:pl-8">
                            <h1 className="font-inter font-normal text-[1.125rem] leading-none mb-2 text-start">
                                Date
                            </h1>
                            <div className="flex">
                                <input
                                type="text"
                                placeholder="09th March,2021"
                                className="w-full md:w-32 font-inter font-normal text-xs leading-none focus:outline-0
                                    placeholder:text-mediumgray placeholder:text-xs placeholder:leading-none placeholder:font-normal
                                    placeholder:font-inter"/>
                                <img src={process.env.PUBLIC_URL + "/images/calendar icon.svg"} alt=""/>
                            </div>
                            </div>
                        </div>
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
                </div>
            </div>
            { locationData 
                ? <div className="mb-[3.75rem] text-center w-container mx-auto" ref={resultSection}>
                    { isLoadingLocation || isLoadingResultsCount || isLoadingSearchResults
                        ? <Loader />
                        : <SearchResults
                            key='searchResults'
                            locationTitle={capitalizeFirstLetter(locationData.name) + ", " + (countryCodes[locationData.country])}
                            resultsCount={resultsCount}
                            searchResults={searchResults}
                            hasNextPage={hasNextPage}
                            fetchNextPage={fetchNextPage}
                            resultSection={resultSection}
                            />
                    }
                </div>
                : <></>
            }

        </section>
    )
}

export default SearchSection;