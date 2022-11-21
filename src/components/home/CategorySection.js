import { useRef } from "react";
import { LeftButton, RightButton } from "../buttons";
import { CategoryCard } from "../cards";
import { locationCategories } from "../../data";

const CategorySection = () => {
    const categorySlider = useRef(null);

    const prevCategory = () =>
    categorySlider.current.scrollBy({
      top: 0,
      left: -10,
      behavior: "smooth",
    });

    const nextCategory = () => {
        categorySlider.current.scrollBy({
        top: 0,
        left: 100,
        behavior: "smooth",
        });
    };

    return (
        <section className="pb-[3.75rem] w-container mx-auto">
            <div className="mb-6 flex justify-between text-center mx-auto">
            <h1 className="font-inter font-semibold text-[3rem] md:text-[56px] mx-auto md:mx-0 leading-none">
                Categories
            </h1>
            <div className="hidden md:flex gap-4">
                <LeftButton handleClick={prevCategory} key='-1'/>
                <RightButton handleClick={nextCategory} key='1'/>
            </div>
            </div>
            <p className="font-inter font-normal text-base leading-snug text-dark-gray md:w-[370px] text-center md:text-start mb-[60px]">
            Here are lots of interesting destinations to visit, but don’t be
            confused—they’re already grouped by category.
            </p>
            <div className="flex gap-[46px] items-center overflow-x-scroll scrollbar-hide snap-x 
            snap-mandatory overscroll-x-contain [&>*:last-child]:pr-[46px] py-1"
                ref={categorySlider}>
            {locationCategories.map((category) => (
                <CategoryCard
                key={category.id}
                name={category.name}
                image={category.image}
                />
            ))}
            </div>
        </section>
    )
}

export default CategorySection;