import { useRef, useState } from "react";
import locationCategories from "../data/categories";
import popularDestination from "../data/popular"
import CategoryCard from "./CategoryCard";
import LeftButton from "./buttons/LeftButton";
import RightButton from "./buttons/RightButton";
import PopularCard from "./PopularCard";
import tags from "../data/tags"
import TagCard from "./TagCard";
import topDestinations from "../data/topDestination"
import TopDestinationCard from "./TopDestinationCard";
import reviews from "../data/reviews";
import ReviewCard from "./ReviewCard";

const Main = () => {
    const categorySlider = useRef(null)

    const [prevColorCategory, setPrevColorCategory] = useState('#2D3134');

    const prevCategoryHoverIn = () => {
        setPrevColorCategory('#faf8ed');
    }

    const prevCategoryHoverOut = () => {
        setPrevColorCategory('#2D3134');
    }

    const prevCategory = () => categorySlider.current.scrollBy(
        {
            top: 0,
            left: -1
            ,
            behavior: "smooth"
        }
    )

    const [nextColorCategory, setNextColorCategory] = useState('#2D3134');

    const nextCategoryHoverIn = () => setNextColorCategory('#faf8ed');

    const nextCategoryHoverOut = () => setNextColorCategory('#2D3134');

    const nextCategory = () => {categorySlider.current.scrollBy(
            {
                top: 0,
                left: 1
                ,
                behavior: "smooth"
            }
        );
    }

    const popularSlider = useRef(null)

    const [prevColorPopular, setPrevColorPopular] = useState('#2D3134');

    const prevPopularHoverIn = () => {
        setPrevColorPopular('#faf8ed');
    }

    const prevPopularHoverOut = () => {
        setPrevColorPopular('#2D3134');
    }

    const prevPopular = () => popularSlider.current.scrollBy(
        {
            top: 0,
            left: -1
            ,
            behavior: "smooth"
        }
    )

    const [nextColorPopular, setNextColorPopular] = useState('#2D3134');

    const nextPopularHoverIn = () => setNextColorPopular('#faf8ed');

    const nextPopularHoverOut = () => setNextColorPopular('#2D3134');

    const nextPopular = () => {popularSlider.current.scrollBy(
            {
                top: 0,
                left: 1
                ,
                behavior: "smooth"
            }
        );
    }

    
    return (
        <main className="mt-[0.625rem]">
            <section className="grid gap-36 md:grid-flow-col md:auto-cols-fr mb-20">
                <div className="mt-16">
                    <h1 className="font-sen font-bold text-[5.25rem] leading-none mb-6">Discover the Best Lovely Places</h1>
                    <p className="font-inter font-normal text-[1.125rem] leading-snug mb-[2.75rem] w-[31.25rem]">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
                    <form className="bg-white flex items-center px-7 py-5 rounded-[100vw] w-[31.25rem]">
                        <div className="pr-8 border-r border-lightgray">
                            <h1 className="font-inter font-normal text-[1.125rem] leading-none mb-2">Where</h1>
                            <div className="flex">
                                <input type="text" placeholder="Center Point, Lo..."
                                    className="w-32 font-inter font-normal text-xs leading-none focus:outline-0
                                        placeholder:text-mediumgray placeholder:text-xs placeholder:leading-none placeholder:font-normal
                                            placeholder:font-inter"/>
                                <img src={process.env.PUBLIC_URL + "/images/location icon.svg"} alt="" />
                            </div>
                        </div>
                        <div className="pl-8">
                            <h1 className="font-inter font-normal text-[1.125rem] leading-none mb-2">Date</h1>
                            <div className="flex">
                                <input type="text" placeholder="09th March,2021" 
                                    className="w-32 font-inter font-normal text-xs leading-none focus:outline-0
                                        placeholder:text-mediumgray placeholder:text-xs placeholder:leading-none placeholder:font-normal
                                            placeholder:font-inter"/>
                                <img src={process.env.PUBLIC_URL + "/images/calendar icon.svg"} alt="" />
                            </div>
                        </div>
                        <input type="submit" name="" id="submit-button"  className="hidden"/>
                        <label htmlFor="submit-button" className="cursor-pointer ml-auto">
                            <img src={process.env.PUBLIC_URL + "/images/search icon.svg"} alt="search" />
                        </label>
                    </form>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/hero1.png"} alt=''
                    className="ml-auto"/>
            </section>
            <section className="pb-[3.75rem]">
                <div className="mb-6 flex justify-between">
                    <h1 className="font-inter font-semibold text-[56px] leading-none">Categories</h1>
                    <div className="flex gap-4">
                        <LeftButton 
                            color={prevColorCategory}
                            handleHoverIn={prevCategoryHoverIn}
                            handleHoverOut={prevCategoryHoverOut}
                            handleClick={prevCategory}
                        />
                        <RightButton 
                            color={nextColorCategory}
                            handleHoverIn={nextCategoryHoverIn}
                            handleHoverOut={nextCategoryHoverOut}
                            handleClick={nextCategory}
                        />
                    </div>
                </div>
                <p className="font-inter font-normal text-base leading-snug text-dark-gray w-[370px] mb-[60px]">Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</p>
                <div className="flex gap-[46px] items-center overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain
                    [&>*:last-child]:pr-[46px]" 
                    ref={categorySlider}>
                    {locationCategories.map(category => (
                        <CategoryCard 
                            key={category.id}
                            name={category.name}
                            image={category.image}
                        />
                    ))}
                </div>
            </section>
            <section className="pb-8">
                <div className="grid gap-28 md:grid-flow-col md:auto-cols-fr pt-[50px] pb-[58px]">
                    <div className="relative mr-auto mb-auto">
                        <img src={process.env.PUBLIC_URL + "/images/hero2.png"} alt="" />
                        <div className="bg-white rounded-[14px] text-center px-[14px] py-[20px] 
                            absolute bottom-[80px] left-[-51px]">
                            <img src={process.env.PUBLIC_URL + "/images/star location icon.svg"} alt="" 
                                className="mx-auto aspect-square w-20 mb-[20px]"/>
                            <h2 className="text-orange font-poppins font-semibold text-[30px] leading-none mb-2">600%</h2>
                            <h5 className="text-regular-gray font-inter font-normal text-[19px] leading-[30px]">Destinations</h5>
                        </div>
                        <div className="bg-white rounded-[10px] pl-16px pr-[21px] py-[20px]
                            absolute bottom-[-20px] right-[1rem] flex justify-between">
                            <img src={process.env.PUBLIC_URL + "/images/connect icon.svg"} alt="" />
                            <div className="flex flex-col justify-between">
                                <h2 className="text-very-dark-blue font-poppins font-semibold text-[30px] leading-none">5000+</h2>
                                <h5 className="text-dark-gray font-poppins font-normal text-[12px] leading-none">Customers</h5>
                            </div>
                        </div>
                    </div>
                    <div className="pt-14">
                        <h4 className="text-orange font-inter font-semibold text-[20px] leading-none tracking-wide mb-[20px]">Our Experience</h4>
                        <h1 className="text-very-dark-blue font-inter font-semibold text-[56px] leading-tight mb-[20px]">Our Stories Have Adventures</h1>
                        <p className="text-dark-gray font-inter font-normal text-base leading-normal mb-[40px] w-3/4">We are experienced in bringing adventures to stay their journey, 
                            with all outdoor destinations in the world as our specialties. 
                            Start your adventure now! Nature has already called you!
                        </p>
                        <div className="grid gap-[20px] grid-flow-col auto-cols-fr">
                            <div className="bg-white bg-opacity-70 rounded-[14px] p-[30px]">
                                <h2 className="text-orange font-inter font-semibold text-[46px] leading-none mb-[18px]">12K+</h2>
                                <h4 className="text-regular-gray font-inter font-normal text-[21px] leading-normal">Succes Journey</h4>
                            </div>
                            <div className="bg-white bg-opacity-70 rounded-[14px] p-[30px]">
                                <h2 className="text-orange font-inter font-semibold text-[46px] leading-none mb-[18px]">16+</h2>
                                <h4 className="text-regular-gray font-inter font-normal text-[21px] leading-normal">Awards Winning</h4>
                            </div>
                            <div className="bg-white bg-opacity-70 rounded-[14px] p-[30px]">
                                <h2 className="text-orange font-inter font-semibold text-[46px] leading-none mb-[18px]">20+</h2>
                                <h4 className="text-regular-gray font-inter font-normal text-[21px] leading-normal">Years Of Experience</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-[50px] mb-14">
                <div className="flex justify-between items-center">
                    <h1 className="text-very-dark-blue font-inter font-semibold text-[56px] leading-tight w-[400px]">Find Popular Destination</h1>
                    <div className="flex gap-4">
                        <LeftButton 
                            color={prevColorPopular}
                            handleHoverIn={prevPopularHoverIn}
                            handleHoverOut={prevPopularHoverOut}
                            handleClick={prevPopular}
                        />
                        <RightButton 
                            color={nextColorPopular}
                            handleHoverIn={nextPopularHoverIn}
                            handleHoverOut={nextPopularHoverOut}
                            handleClick={nextPopular}
                        />
                    </div>
                </div>
                <div className="flex gap-[30px] overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain
                    [&>*:last-child]:mr-[120px] pt-9 pb-[50px] w-[calc(100vw-152px)]"
                    ref={popularSlider}>
                        {popularDestination.map(destination => (
                            <PopularCard 
                                key={destination.id}
                                name={destination.name}
                                location={destination.location}
                                price={destination.price}
                                image={destination.image}
                            />
                        ))}
                </div>
            </section>
            <section className="text-center py-9 mb-9">
                <h1 className="text-very-dark-blue font-inter font-semibold text-[56px] leading-tight mb-4">Top Destinations</h1>
                <p className="text-dark-gray font-inter font-normal text-base leading-none mb-7">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
                <div className="flex gap-3.5 mx-auto w-min mb-[50px]">
                    {tags.map(tag => (
                        <TagCard 
                            name={tag}
                        />
                    ))}
                </div>
                <div className="grid gap-x-[30px] grid-cols-gallery grid-rows-gallery w-min mx-auto
                    [&>*:nth-child(2)]:row-start-4 [&>*:nth-child(3)]:row-[1/-1] [&>*:nth-child(4)]:col-[3/-1]
                        [&>*:nth-child(5)]:row-[3/-1] [&>*:nth-child(6)]:row-[3/-1]">
                    {topDestinations.map((destination, index) => (
                        <TopDestinationCard
                            key={destination.id}
                            rating={destination.rating}
                            name={destination.name}
                            location={destination.location}
                            image={destination.image}
                        />
                    ))}
                </div>
            </section>
            <section className="grid md:grid-flow-col md:auto-cols-fr py-[66px] pl-[72px]">
                <img src={process.env.PUBLIC_URL + "/images/hero3.png"} alt="" />
                <div className="pt-10">
                    <div className="w-16 h-2 bg-medium-yellow rounded mb-3"></div>
                    <h1 className="text-very-dark-blue font-inter font-semibold text-[56px] leading-tight mb-6 capitalize">A customer said about us:</h1>
                    {reviews.map(review => (
                        <ReviewCard
                            key={review.id}
                            content={review.content}
                            name={review.name}
                            title={review.title}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Main;