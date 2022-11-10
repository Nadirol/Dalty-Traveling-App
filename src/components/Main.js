import { useRef } from "react";
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

    const prevCategory = () => categorySlider.current.scrollBy(
        {
            top: 0,
            left: -1
            ,
            behavior: "smooth"
        }
    )

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

    const prevPopular = () => popularSlider.current.scrollBy(
        {
            top: 0,
            left: -1
            ,
            behavior: "smooth"
        }
    )

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
            <section className="grid gap-8 xl:gap-36 xl:grid-flow-col xl:auto-cols-fr text-center xl:text-start mb-20 w-container mx-auto ">
                <div className="mt-16">
                    <h1 className="font-sen font-bold text-[4rem] md:text-[5.25rem] leading-none mb-6">Discover the Best Lovely Places</h1>
                    <p className="font-inter font-normal text-base md:text-[1.125rem] leading-snug mb-[2.75rem] w-search-form mx-auto">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
                    <form className="bg-white flex flex-wrap md:flex-nowrap items-center px-7 py-5 rounded-[100vw] w-search-form mx-auto">
                        <div className="mx-auto flex">
                            <div className="md:pr-8 border-r border-light-gray">
                                <h1 className="font-inter font-normal text-[1.125rem] leading-none mb-2 text-start">Where</h1>
                                <div className="flex">
                                    <input type="text" placeholder="Center Point, Lo..."
                                        className="w-32 font-inter font-normal text-xs leading-none focus:outline-0
                                            placeholder:text-mediumgray placeholder:text-xs placeholder:leading-none placeholder:font-normal
                                                placeholder:font-inter"/>
                                    <img src={process.env.PUBLIC_URL + "/images/location icon.svg"} alt="" />
                                </div>
                            </div>
                            <div className="md:pl-8">
                                <h1 className="font-inter font-normal text-[1.125rem] leading-none mb-2 text-start">Date</h1>
                                <div className="flex">
                                    <input type="text" placeholder="09th March,2021" 
                                        className="w-32 font-inter font-normal text-xs leading-none focus:outline-0
                                            placeholder:text-mediumgray placeholder:text-xs placeholder:leading-none placeholder:font-normal
                                                placeholder:font-inter"/>
                                    <img src={process.env.PUBLIC_URL + "/images/calendar icon.svg"} alt="" />
                                </div>
                            </div>
                        </div>

                        <input type="submit" name="" id="submit-button"  className="hidden"/>
                        <label htmlFor="submit-button" className="cursor-pointer mx-auto md:ml-auto">
                            <img src={process.env.PUBLIC_URL + "/images/search icon.svg"} alt="search" />
                        </label>
                    </form>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/hero1.png"} alt=''
                    className="xl:ml-auto mx-auto"/>
            </section>
            <section className="pb-[3.75rem] w-container mx-auto">
                <div className="mb-6 flex justify-between text-center mx-auto">
                    <h1 className="font-inter font-semibold text-[56px] leading-none">Categories</h1>
                    <div className="hidden md:flex gap-4">
                        <LeftButton 
                            handleClick={prevCategory}
                        />
                        <RightButton 
                            handleClick={nextCategory}
                        />
                    </div>
                </div>
                <p className="font-inter font-normal text-base leading-snug text-dark-gray w-[370px] mb-[60px]">
                    Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.
                </p>
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
            <section className="pb-8 w-container mx-auto ">
                <div className="grid text-center xl:gap-28 xl:grid-flow-col xl:auto-cols-fr xl:text-start pt-[50px] pb-[58px]">
                    <div className="relative xl:mr-auto xl:mb-auto mx-auto">
                        <img src={process.env.PUBLIC_URL + "/images/hero2.png"} alt=""/>
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
                        <p className="text-dark-gray font-inter font-normal text-base leading-normal mb-[40px] w-3/4 mx-auto">We are experienced in bringing adventures to stay their journey, 
                            with all outdoor destinations in the world as our specialties. 
                            Start your adventure now! Nature has already called you!
                        </p>
                        <div className="grid gap-[20px] xl:grid-flow-col xl:auto-cols-fr grid-cols-2">
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
                <div className="flex justify-between items-center w-container mx-auto text-center">
                    <h1 className="text-very-dark-blue font-inter font-semibold text-[56px] leading-tight w-[400px]">Find Popular Destination</h1>
                    <div className="hidden md:flex gap-4">
                        <LeftButton 
                            handleClick={prevPopular}
                        />
                        <RightButton 
                            handleClick={nextPopular}
                        />
                    </div>
                </div>
                <div className="flex gap-[30px] overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain
                     pt-9 pb-[50px] w-slider-container ml-auto"
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
            <section className="text-center py-9 mb-9 w-container mx-auto ">
                <h1 className="text-very-dark-blue font-inter font-semibold text-[56px] leading-tight mb-4">Top Destinations</h1>
                <p className="text-dark-gray font-inter font-normal text-base leading-none mb-7">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
                <div className="flex flex-wrap md:flex-nowrap gap-3.5 mx-auto w-3/4 md:w-min mb-[50px]">
                    {tags.map(tag => (
                        <TagCard 
                            name={tag}
                        />
                    ))}
                </div>
                <div className="grid gap-x-1 md:gap-x-[30px] gap-y-2 md:gap-y-0 md:w-min mx-auto grid-cols-2 auto-rows-auto
                    xl:grid-cols-gallery md:grid-cols-gallery-md xl:grid-rows-gallery md:grid-rows-gallery-md         
                        md:[&>*:nth-child(2)]:row-start-4 md:[&>*:nth-child(3)]:row-[1/-1] md:[&>*:nth-child(4)]:col-[3/-1]
                        md:[&>*:nth-child(5)]:row-[3/-1] md:[&>*:nth-child(6)]:row-[3/-1]">
                    {topDestinations.map(destination => (
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
            <section className="grid md:grid-flow-col md:auto-cols-fr py-[66px] 
                text-center md:text-start md:pl-[72px] mb-7 w-container mx-auto ">
                <img src={process.env.PUBLIC_URL + "/images/hero3.png"} alt="" className="mx-auto"/>
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
            <section className="py-[46px] mb-4 w-container mx-auto ">
                <div className="bg-medium-yellow rounded-[30px] py-[75px] text-center relative">
                    <img src={process.env.PUBLIC_URL + "/images/intersect.png"} alt="" 
                        className="absolute inset-0 z-0 w-full h-full"/>
                    <div className="relative z-10">
                        <h1 className="text-very-dark-blue font-inter font-semibold text-[40px] leading-none mb-4">Sign up to our newsletter</h1>
                        <p className="text-dark-gray font-inter font-normal text-base leading-normal mb-10">Reciev latest news, update, and many other things every week. </p>
                        <form className="flex justify-between items-center bg-white rounded-xl p-2.5 w-contact-form mx-auto">
                            <input type="email" placeholder="Enter Your Email Address"
                                className="bg-transparent pl-4 text-very-dark-blue font-inter font-normal text-xl focus:outline-0
                                placeholder:text-dark-gray placeholder:font-inter placeholder:font-normal placeholder:text-[14px] placeholder:leading-none"/>
                            <input type="submit" className="hidden" id="email-sumbit__button"/>
                            <label htmlFor="email-sumbit__button">
                                <img src={process.env.PUBLIC_URL + "/images/paper plane2.svg"} alt="submit button" 
                                    className="p-3 rounded-xl bg-orange cursor-pointer hover:bg-dark-orange"/>
                            </label>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;