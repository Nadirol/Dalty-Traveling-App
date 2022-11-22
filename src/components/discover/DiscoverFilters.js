import { CategoryTagCard } from "../cards";
import { categoriesList } from "../../data"
import { LeftButton, RightButton } from "../buttons";

const DiscoverFilters = ({ tagSlider, handleScroll, activeFilters, toggleFilter, tagsScrollPos, atSliderEnd, prevTag, nextTag }) => {
    return (
        <div className="relative border-b border-very-dark-blue w-container mx-auto">
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
                ${atSliderEnd ? 'md:hidden' : 'md:flex' } items-center hidden
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
    )
};

export default DiscoverFilters;