import { useRef } from "react";
import { LeftButton, RightButton } from "../components/buttons";
import { SpecialTourCard } from "../components/cards";
import { SpecialTours } from "../data";

const ToursSection = () => {
    const popularSlider = useRef(null);

    const prevPopular = () =>
      popularSlider.current.scrollBy({
        top: 0,
        left: -10,
        behavior: "smooth",
      });
  
    const nextPopular = () =>
      popularSlider.current.scrollBy({
        top: 0,
        left: 10,
        behavior: "smooth",
      });

    return (
        <section className="pt-[50px] mb-14">
            <div className="flex justify-between items-center text-center md:text-start w-container mx-auto">
            <h1
                className="text-very-dark-blue font-inter font-semibold text-[3rem] md:text-[56px] mx-auto 
                            md:mx-0 leading-tight md:w-[400px]"
            >
                Special Tours
            </h1>
            <div className="hidden md:flex gap-4">
                <LeftButton handleClick={prevPopular}  key='-1'/>
                <RightButton handleClick={nextPopular}  key='1'/>
            </div>
            </div>
            <div
            className="flex gap-[30px] overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain
                        pt-9 pb-[50px] w-slider-container md:ml-auto"
            ref={popularSlider}
            >
            {SpecialTours.map((destination) => (
                <SpecialTourCard
                key={destination.id}
                name={destination.name}
                price={destination.price}
                image={destination.image}
                />
            ))}
            </div>
        </section>
    )
}

export default ToursSection;