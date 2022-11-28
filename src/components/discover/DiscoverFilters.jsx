import { CategoryTagCard } from "../cards";
import { categoriesList } from "../../data"
import { LeftButton, RightButton } from "../buttons";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import { useState } from "react";

const DiscoverFilters = ({ tagSlider, handleScroll, activeFilters, toggleFilter, tagsScrollPos, atSliderEnd, prevTag, nextTag }) => {
    const [sliderExpanded, setSliderExpanded] = useState(false);
    const toggleExpandSlider = () => {
        setSliderExpanded(prevState => !prevState)
    }

    return (
        <div className="border-b border-very-dark-gray w-container mx-auto">
            <div className="relative">
                <div className={`flex gap-5 shrink-0 
                    ${sliderExpanded ? 'flex-wrap' : 'overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain'} my-2`}
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
                <div className={`absolute z-20 inset-0 h-full w-[10%] mr-auto items-center
                    ${tagsScrollPos > 0 && !sliderExpanded ? 'md:flex' : 'md:hidden'} hidden
                        filter-slider-after`}>
                    <div className="bg-light-yellow dark:bg-extra-dark-gray w-min mr-auto">
                        <LeftButton
                            key={-1}
                            padding='p-[10px]'
                            handleClick={prevTag}
                        />
                    </div>
                </div>
                <div className={`absolute z-20 inset-0 h-full w-[10%] ml-auto 
                    ${atSliderEnd || sliderExpanded ? 'md:hidden' : 'md:flex' } items-center hidden
                        filter-slider-before`}>
                    <div className="bg-light-yellow dark:bg-extra-dark-gray w-min ml-auto">
                        <RightButton
                            key={1}
                            padding='p-[10px]'
                            handleClick={nextTag}
                        />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="text-semi-dark-gray font-inter font-normal text-sm rounded-[100vw] 
                    hover:text-orange border-0 py-2 px-6 hover:bg-very-dark-gray hover:text-white mt-1 mb-2 focus:outline-0"
                    onClick={toggleExpandSlider}>
                    { sliderExpanded 
                    ? <AiFillCaretUp/>
                    : <AiFillCaretDown/>
                    }
                </button>
            </div>
        </div>

    )
};

export default DiscoverFilters;