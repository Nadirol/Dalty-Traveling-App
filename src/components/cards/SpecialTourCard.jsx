const SpecialTourCard = ({ name, price, image }) => {
    return (
        <div className="cursor-pointer border-2 border-white rounded-2xl p-3 snap-start 
            hover:shadow-card dark:hover:shadow-card-bold-dark transition-shadow duration-500">
            <img src={image} alt="destination preview" 
                className="mb-6 object-cover rounded-[14px] w-screen-card md:w-[450px] max-w-[450px] h-[300px]"/>
            <h1 className="text-very-dark-gray dark:text-semi-light-yellow dark:hover:text-orange
                font-inter font-semibold text-2xl leading-none mb-[14px]">
                {name}
            </h1>
            <div className="flex justify-between items-center mb-[14px]">
                <h1 className="text-very-dark-gray dark:text-semi-light-yellow font-inter font-semibold text-2xl leading-none">
                    {price}$ 
                    <span className="text-dark-gray dark:text-semi-light-yellow font-inter font-normal text-base leading-tight">
                        /Person
                    </span>
                </h1>
                <button className="book-btn font-inter font-normal text-[14px] leading-none px-4 py-3" >
                    Book Now
                </button>
            </div>
        </div>
    )
}

export default SpecialTourCard;