import { useRef } from "react";
import { SuggestedCard } from "../cards";
import { LeftButton, RightButton } from "../buttons"
import { AiOutlineDoubleRight } from "react-icons/ai"
import Loader from "../Loader";
import { useGetSearchResults } from "../../hooks";

const Suggestion = ({ destinationData }) => {
    const {isLoading: isLoadingSuggestion, 
            data: suggestionData, 
            isError: isErrorSuggestion, 
            error,
            hasNextPage,
            fetchNextPage
        } = useGetSearchResults(destinationData?.point.lon, destinationData?.point.lat, 3000, 4, ['suggestion', destinationData])

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

    if (isErrorSuggestion) {
        return (
            <div className="mt-12 text-center">
                <h1>{error.message}</h1>
            </div>
        )
    }
    
    return (
        <div className="">
            <div className="flex justify-between items-center mb-8">
                <h1 className="dark:text-regular-yellow font-inter font-semibold text-base md:text-[2rem] text-center xl:text-start leading-none">
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
                    <button disabled={!hasNextPage} onClick={() => fetchNextPage()} className="outline-0">
                        <AiOutlineDoubleRight
                            key={'icon'}
                            style={{ width: 32, height: 32 }}
                            className="text-very-dark-gray dark:text-regular-yellow"
                        />
                    </button>
                </div>
            )}
        </div>
    )
};

export default Suggestion;