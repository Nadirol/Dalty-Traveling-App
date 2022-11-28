const FormSection = () => (
    <section className="py-[46px] mb-4 w-container mx-auto ">
        <div className="bg-regular-yellow dark:bg-semi-black rounded-[30px] py-[75px] text-center relative">
        <img
            src={"/images/intersect.png"}
            alt=""
            className="absolute inset-0 z-0 w-full h-full"
        />
        <div className="relative z-10">
            <h1 className="text-very-dark-gray dark:text-regular-yellow font-inter font-semibold text-[40px] leading-none mb-4">
                Sign up to our newsletter
            </h1>
            <p className="text-dark-gray dark:text-semi-light-yellow font-inter font-normal text-base leading-normal mb-10">
                Reciev latest news, update, and many other things every week.{" "}
            </p>
            <form className="flex gap-1 justify-between items-center bg-white dark:bg-black rounded-xl p-2.5 w-contact-form mx-auto">
                <input type="email" placeholder="Enter Your Email Address" required
                    className="bg-transparent pl-4 text-very-dark-gray dark:text-regular-yellow font-inter font-normal 
                        text-xl focus:outline-0 w-[80%] md:w-full placeholder-form"/>
                <input type="submit" className="hidden" id="email-sumbit__button"/>
                <label htmlFor="email-sumbit__button">
                    <img src={"/images/paper plane2.svg"} alt="submit button"
                        className="p-3 rounded-xl bg-orange cursor-pointer hover:bg-dark-orange"/>
                </label>
            </form>
        </div>
        </div>
    </section>
)

export default FormSection;