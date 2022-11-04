import locationCategories from "../data/categories";
import CategoryCard from "./CategoryCard";

const Main = () => {
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
                        {/* <svg className="aspect-square p-[21px] rounded-full border border-very-dark-blue cursor-pointer
                                hover:bg-very-dark-blue hover:stroke-white">
                            <use href={process.env.PUBLIC_URL + "/images/left icon.svg"} />
                        </svg> */}
                        <img src={process.env.PUBLIC_URL + "/images/left icon.svg"} alt="previous" 
                            className="aspect-square p-[21px] rounded-full border border-very-dark-blue cursor-pointer
                                hover:bg-very-dark-blue hover:stroke-white"/>
                        <img src={process.env.PUBLIC_URL + "/images/right icon.svg"} alt="next" 
                            className="aspect-square p-[21px] rounded-full border border-very-dark-blue cursor-pointer"/>
                    </div>
                </div>
                <p className="font-inter font-normal text-base leading-snug text-darkgray w-[370px] mb-[60px]">Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</p>
                <div className="flex gap-[46px] items-center overflow-x-scroll scrollbar-hide">

                    {locationCategories.map(category => (
                        <CategoryCard 
                            key={category.id}
                            name={category.name}
                            image={category.image}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Main;