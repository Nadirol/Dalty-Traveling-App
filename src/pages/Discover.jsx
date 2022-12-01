import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { DiscoverResultCard } from "../components/cards";
import { categoriesList } from "../data"
import Loader from "../components/Loader";
import { AiOutlineReload } from "react-icons/ai"
import { DiscoverHeader, DiscoverFilters } from "../components/discover"
import { useGetLocation, useGetImages, getApi } from "../hooks";
import { useInfiniteQuery } from "@tanstack/react-query";

let lat = 34.0083;
let lon = -118.4988;
let radius = 3000;
let pageLength = 24;
let rating = 2;
let filters;
let outOfResults = false;
const noFilters = "accomodations,amusements,interesting_places,sport,tourist_facilities"


const Discover = ({ theme, toggleTheme }) => {
    const { filter } = useParams();

    const [activeFilters, setActiveFilters] = useState([categoriesList[0].toLowerCase().replaceAll(' ','_')]);

    const [searchValue, setSearchValue] = useState("");
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchLocation();
    };
    const clearSearchValue = () => {
        setSearchValue('')
    };

    const [radiusValue, setRadiusValue] = useState(3000)
    const handleRadiusChange = (e) => {
        setRadiusValue(e.target.value)
        radius = e.target.value
    }

    const [nameValue, setNameValue] = useState('')
    const handleNameChange = (e) => {
        setNameValue(e.target.value)
    }

    useEffect(() => {
        if ( filter ) {
            if (categoriesList.includes(filter)) {
                const foundIdx = categoriesList.findIndex(el => el === filter)
                categoriesList.splice(foundIdx, 1)
                categoriesList.unshift(filter)
            } else { 
                categoriesList.unshift(filter)
            };
            setActiveFilters([formatFilterName(filter)]);
            filters = [formatFilterName(filter)]
        } else { 
            setActiveFilters([formatFilterName(categoriesList[0])])
            filters = [formatFilterName(categoriesList[0])]
        }        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const discoverQueryKey = ['discover', lon, lat, filters]

    const apiGetSearchResults = async ({ pageParam = 0 }) => {
        return await
            getApi(
                "radius",
                `radius=${radius}&limit=${pageLength}&offset=${pageParam}&lon=${lon}&lat=${lat}&kinds=${filters.length > 0 ? filters : noFilters}&rate=${rating}${nameValue ? `&name=${nameValue}` : ''}&format=json`
            ).then(res => {
                return res.data
            })
    }

    const { isLoading: isLoadingDiscover, 
        data: discoverData,
        fetchNextPage: fetchMoreDiscover }  = useInfiniteQuery(
            discoverQueryKey,
            apiGetSearchResults,
            {
                enabled: !!lon && !!lat,
                getNextPageParam: (lastPage, pages) => {
                    if (lastPage.length < pageLength) {
                        outOfResults = true
                    } else { outOfResults = false }
                    return pages.reduce((accumulator, currentValue) => accumulator.concat(currentValue)).length
                },
                select: (data) => data.pages.reduce((accumulator, currentValue) => accumulator.concat(currentValue)),
                refetchOnWindowFocus: false,
            }
        )
    // useGetSearchResults(lon, lat, radius, 24, discoverQueryKey, filters);

    const loadMoreDiscover = () => {
        if (outOfResults) {
            radius += radiusValue
        }
        fetchMoreDiscover()
    }
    
    const onLocationSuccess = (data) => {
        lon = data.lon;
        lat = data.lat
        console.log(lon, lat)

    }

    const { data: locationData, refetch: fetchLocation } = useGetLocation(searchValue, onLocationSuccess);

    const { isLoading: isLoadingImages, data: imageData } = useGetImages(['images', locationData])

    const toggleFilter = (category) => {
        if (activeFilters.includes(formatFilterName(category))) {
            setActiveFilters(
                prevFilters => prevFilters.filter(el => el !== formatFilterName(category))
            );
            filters = filters.filter(el => el !== formatFilterName(category));
        } else {
            setActiveFilters(prevFilters => prevFilters.concat(formatFilterName(category)));
            filters = filters.concat(formatFilterName(category));
        }
    }

    const formatFilterName = (filter) => {
        return filter.toLowerCase().replaceAll(' ','_')
    };

    const reduceNum = (num) => {
        while (num > imageData.length - 1) { num -= imageData.length}
        return num
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

    return (
        <div className="">
            <DiscoverHeader 
                handleSearchSubmit={handleSearchSubmit}
                searchValue={searchValue}
                handleSearchChange={handleSearchChange}
                clearSearchValue={clearSearchValue}
                radiusValue={radiusValue}
                handleRadiusChange={handleRadiusChange}
                nameValue={nameValue}
                handleNameChange={handleNameChange}
                theme={theme}
                toggleTheme={toggleTheme}
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
            { isLoadingDiscover || isLoadingImages
                ? <Loader/>
                : (
                    <div className="px-4 min-h-screen">
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
                        <div className="hover:bg-very-dark-gray hover:text-white rounded-[50%] p-3 w-min mx-auto text-dark-gray animate-pop"
                            onClick={loadMoreDiscover}>
                            <AiOutlineReload style={{ width: 28, height: 28 }} />
                        </div>

                        <a href="https://pixabay.com/" target="_blank" rel="noreferrer"
                            className="text-regular-gray font-poppins font-light text-xs">
                            Images provided by Pixabay
                        </a>
                    </div>
                )
            }
        </div>
)}

export default Discover;