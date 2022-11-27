import { useRef, useState } from "react";
import countryCodes from "../../data/countryCodes.json";
import Loader from "../Loader";
import SearchResults from "./SearchResults";
import { useGetLocation, useGetResultsCount, useGetSearchResults } from "../../hooks";

let lon;
let lat;

const onLocationSuccess = (data) => {
    lon = data.lon;
    lat = data.lat
}

const SearchSection = () => {
    const [searchValue, setSearchValue] = useState("");
    const resultSection = useRef(null);
  
    const handleSearchChange = (e) => {
      setSearchValue(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchLocation();
    }

    const scrollToResults = () => resultSection.current.scrollIntoView({behavior: "smooth"});

    const { isLoading: isLoadingLocation, data: locationData, refetch: fetchLocation } = useGetLocation(searchValue, onLocationSuccess);

    const { isLoading: isLoadingResultsCount, data: resultsCount } = useGetResultsCount(lon, lat, scrollToResults);

    const searchQueryKey = ['searchResults', lon, lat]
    const { isLoading: isLoadingSearchResults,
        data: searchResults,
        hasNextPage,
        fetchNextPage,
    } = useGetSearchResults(lon, lat, 1000, 6, searchQueryKey)

    function capitalizeFirstLetter(string) {
        let newString = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return newString.join(' ');
    };

    return (
        <section className=" w-container mx-auto">
            <div className="grid gap-8 xl:gap-36 xl:grid-flow-col xl:auto-cols-fr text-center xl:text-start mb-16 xl:mb-[124px]">
                <img src={process.env.PUBLIC_URL + "/images/hero1.png"} alt="" className="xl:ml-auto mx-auto"/>
                <div className="mt-16">
                    <h1 className="font-sen font-bold text-[4rem] md:text-[5.25rem] leading-none mb-6 dark:text-regular-yellow">
                        Discover the Best Lovely Places
                    </h1>
                    <p className="dark:text-semi-light-yellow font-inter font-normal text-base md:text-[1.125rem] leading-snug mb-[2.75rem] w-search-form mx-auto xl:mx-0">
                        Plan and book your perfect trip with expert advice, travel tips,
                        destination information and inspiration from us.
                    </p>
                    <form onSubmit={(e) => handleSearchSubmit(e)}
                        className="bg-white dark:bg-very-dark-gray flex items-center px-7 py-5 rounded-[100vw] w-search-form mx-auto xl:mx-0">
                        <div className="mx-auto flex">
                            <div className="pr-1 md:pr-8 border-r border-light-gray dark:border-semi-black">
                                <h1 className="search-heading">
                                    Where
                                </h1>
                                <div className="flex">
                                    <input type="text" placeholder="Center Point, Lo..." value={searchValue} onChange={(e) => handleSearchChange(e)}
                                    className="w-full md:w-32 text-dark-gray dark:text-regular-yellow font-inter font-normal text-base leading-none focus:outline-0
                                        placeholder-search"/>
                                    <img src={process.env.PUBLIC_URL + "/images/location icon.svg"} alt=""/>
                                </div>
                            </div>
                            <div className="pl-1 md:pl-8">
                            <h1 className="search-heading">
                                Date
                            </h1>
                            <div className="flex">
                                <input type="text" placeholder="09th March,2021"
                                    className="w-full md:w-32  text-dark-gray dark:text-regular-yellow font-inter font-normal text-base 
                                        leading-none focus:outline-0 placeholder-search"/>
                                <img src={process.env.PUBLIC_URL + "/images/calendar icon.svg"} alt=""/>
                            </div>
                            </div>
                        </div>
                        <input type="submit" name="" id="submit-button" className="hidden"/>
                        <label htmlFor="submit-button"
                            className="cursor-pointer mx-auto ml-2 md:ml-6">
                            <img src={process.env.PUBLIC_URL + "/images/search icon.svg"} alt="search"/>
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