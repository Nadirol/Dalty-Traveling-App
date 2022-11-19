const FormSection = () => (
    <section className="py-[46px] mb-4 w-container mx-auto ">
        <div className="bg-medium-yellow rounded-[30px] py-[75px] text-center relative">
        <img
            src={process.env.PUBLIC_URL + "/images/intersect.png"}
            alt=""
            className="absolute inset-0 z-0 w-full h-full"
        />
        <div className="relative z-10">
            <h1 className="text-very-dark-blue font-inter font-semibold text-[40px] leading-none mb-4">
            Sign up to our newsletter
            </h1>
            <p className="text-dark-gray font-inter font-normal text-base leading-normal mb-10">
            Reciev latest news, update, and many other things every week.{" "}
            </p>
            <form className="flex gap-1 justify-between items-center bg-white rounded-xl p-2.5 w-contact-form mx-auto">
            <input
                type="email"
                placeholder="Enter Your Email Address"
                required
                className="bg-transparent pl-4 text-very-dark-blue font-inter font-normal text-xl focus:outline-0 w-[80%] md:w-full
                                placeholder:text-dark-gray placeholder:font-inter placeholder:font-normal 
                                    placeholder:text-xs md:placeholder:text-[14px] placeholder:leading-none"
            />
            <input
                type="submit"
                className="hidden"
                id="email-sumbit__button"
            />
            <label htmlFor="email-sumbit__button">
                <img
                src={process.env.PUBLIC_URL + "/images/paper plane2.svg"}
                alt="submit button"
                className="p-3 rounded-xl bg-orange cursor-pointer hover:bg-dark-orange"
                />
            </label>
            </form>
        </div>
        </div>
    </section>
)

export default FormSection;