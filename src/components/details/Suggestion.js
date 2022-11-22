import { useQuery } from "@tanstack/react-query"
import { useRef } from "react";
import { SuggestedCard } from "../cards";
import { LeftButton, RightButton } from "../buttons"
import { AiOutlineDoubleRight } from "react-icons/ai"
import Loader from "../Loader";
import axios from "axios";

let offset = 0;

const Suggestion = ({ destinationData }) => {
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
    const pageLength = 4;

    const {isLoading: isLoadingSuggestion, data: suggestionData} = useQuery(['suggestion'], () => {
        return apiGet(
            "radius",
            `radius=3000&limit=4&offset=0&lon=${destinationData?.point.lon}&lat=${destinationData?.point.lat}&rate=2&format=json`
        )
        .then(res => res.data)
        .catch(err => console.log(err));
    })

    const expandSuggestion = () => {
        offset += pageLength
        apiGet(
            "radius",
            `radius=3000&limit=${pageLength}&offset=${offset}&lon=${destinationData?.point.lon}&lat=${destinationData?.point.lat}&rate=2&format=json`
        )
        .then(res => suggestionData.concat(res.data));
    }

    const suggestionSlider = useRef(null);
    const prevSuggestion = () =>
    suggestionSlider.current.scrollBy({
      top: 0,
      left: -10,
      behavior: "smooth",
    });
    const nextSuggestion = () => {
    suggestionSlider.current.scrollBy({
        top: 0,
        left: 10,
        behavior: "smooth",
        });
    };

    if (isLoadingSuggestion) {
        return <Loader key='loader'/>
    }
    
    return (
        <div className="">
            <div className="flex justify-between items-center mb-8">
                <h1 className="font-inter font-semibold text-base md:text-[2rem] text-center xl:text-start leading-none">
                    Nearby Destinations
                </h1>
                <div className="hidden md:flex gap-4">
                        <LeftButton handleClick={prevSuggestion} key='-1'/>
                        <RightButton handleClick={nextSuggestion} key='1'/>
                </div>
            </div>
            { suggestionData && (
                <div className="flex gap-6 overflow-x-scroll scrollbar-hide snap-x 
                    snap-mandatory overscroll-x-contain py-1" ref={suggestionSlider}>
                    {suggestionData.map(item => {
                        if (item.name !== destinationData?.name) {
                            return (
                                <SuggestedCard
                                    key={item.xid}
                                    name={item.name}
                                    kinds={item.kinds}
                                    xid={item.xid}
                                />
                            )
                        }
                        return <></>
                    })}
                    <button onClick={expandSuggestion} className="outline-0">
                        <AiOutlineDoubleRight
                            style={{ width: 32, height: 32 }}
                            className="text-very-dark-blue"
                        />
                    </button>
                </div>
            )}
        </div>
    )
};

export default Suggestion;