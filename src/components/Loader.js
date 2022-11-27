const Loader = () => (
    <div className="flex gap-4 flex-col justify-center items-center mt-20 w-container mx-auto animate-pulse">
        <img src={process.env.PUBLIC_URL + "/images/Logo.svg"} alt="" />
        <h1 className="text-very-dark-gray font-inter font-medium text-2xl xl:text-[2rem]">Loading</h1>
    </div>
)

export default Loader;