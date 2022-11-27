const AboutSection = () => (
    <section className="pb-8 w-container mx-auto">
        <div className="grid text-center xl:gap-28 xl:grid-flow-col xl:auto-cols-fr xl:text-start pt-[50px] pb-[58px]">
        <div className="relative xl:mr-auto xl:mb-auto -xl:mx-auto">
            <img src={process.env.PUBLIC_URL + "/images/hero2.png"} alt="" />
            <div className="bg-white dark:bg-semi-black rounded-[14px] text-center px-1.5 py-2 md:px-[14px] md:py-[20px] 
                    absolute bottom-[80px] left-[-10px] md:left-[-51px]">
                <img src={process.env.PUBLIC_URL + "/images/star location icon.svg"} alt=""
                    className="mx-auto aspect-square w-12 md:w-20 mb-[20px]"/>
                <h2 className="text-orange font-poppins font-semibold text-base md:text-[30px] leading-none mb-2">
                    600%
                </h2>
                <h5 className="text-regular-gray dark:text-semi-light-yellow font-inter font-normal text-xs md:text-[19px] leading-[30px]">
                    Destinations
                </h5>
            </div>
            <div className="bg-white dark:bg-semi-black rounded-[10px] px-2 py-3 md:pl-[16px] md:pr-[21px] md:py-[20px]
                absolute bottom-[-20px] right-[1rem] flex justify-between">
                <img src={process.env.PUBLIC_URL + "/images/connect icon.svg"} alt=""
                    className="w-[2rem] md:w-full"/>
                <div className="flex flex-col justify-between">
                    <h2 className="text-very-dark-gray dark:text-orange font-poppins font-semibold text-base md:text-[30px] leading-none">
                        5000+
                    </h2>
                    <h5 className="text-dark-gray dark:text-semi-light-yellow font-poppins font-normal text-[8px] md:text-[12px] leading-none">
                        Customers
                    </h5>
                </div>
            </div>
        </div>
        <div className="pt-14">
            <h4 className="text-orange font-inter font-semibold text-[20px] leading-none tracking-wide mb-[20px]">
                Our Experience
            </h4>
            <h1
            className="text-very-dark-gray dark:text-regular-yellow font-inter font-semibold text-[3rem] md:text-[56px] 
                mx-auto md:mx-0 leading-tight mb-[20px]">
                Our Stories Have Adventures
            </h1>
            <p className="text-dark-gray dark:text-semi-light-yellow font-inter font-normal text-base leading-normal mb-[40px] w-3/4 mx-auto xl:mx-0">
                We are experienced in bringing adventures to stay their journey,
                    with all outdoor destinations in the world as our specialties.
                        Start your adventure now! Nature has already called you!
            </p>
            <div className="grid gap-[20px] xl:grid-flow-col xl:auto-cols-fr grid-cols-2">
                <div className="bg-white dark:bg-semi-black bg-opacity-70 rounded-[14px] p-[30px]">
                    <h2 className="text-orange font-inter font-semibold text-[46px] leading-none mb-[18px]">
                        12K+
                    </h2>
                    <h4 className="text-regular-gray dark:text-semi-light-yellow font-inter font-normal text-[21px] leading-normal">
                        Succes Journey
                    </h4>
                </div>
                <div className="bg-white dark:bg-semi-black bg-opacity-70 rounded-[14px] p-[30px]">
                    <h2 className="text-orange font-inter font-semibold text-[46px] leading-none mb-[18px]">
                        16+
                    </h2>
                    <h4 className="text-regular-gray dark:text-semi-light-yellow font-inter font-normal text-[21px] leading-normal">
                        Awards Winning
                    </h4>
                </div>
                <div className="bg-white dark:bg-semi-black bg-opacity-70 rounded-[14px] p-[30px]">
                    <h2 className="text-orange font-inter font-semibold text-[46px] leading-none mb-[18px]">
                        20+
                    </h2>
                    <h4 className="text-regular-gray dark:text-semi-light-yellow font-inter font-normal text-[21px] leading-normal">
                        Years Of Experience
                    </h4>
                </div>
            </div>
        </div>
        </div>
    </section>
)

export default AboutSection;