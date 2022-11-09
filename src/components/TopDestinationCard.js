const TopDestinationCard = ({ rating, name, location, image }) => (
    <div className="relative rounded-[20px] p-6 cursor-pointer before:absolute overflow-hidden
        before:bg-gradient-to-t from-filter-very-dark to-transparent before:inset-0 before:rounded-[20px]
            before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:z-[9]
                [&:hover>*>span]:bg-very-dark-blue [&:hover>*>span]:text-white">
        <img src={image} alt="" 
            className="absolute inset-0 z-0 h-full w-full"/>
        <div className="relative z-10 flex flex-col justify-between items-start text-start w-full h-full">
            <span className="text-very-dark-blue font-inter font-medium text-[14px] leading-none
                 px-2.5 py-[5px] bg-white rounded-xl transition-all duration-300">{rating}</span>
            <div className="">
                <h3 className="text-white hover:text-orange font-inter font-semibold text-[20px] leading-none mb-2.5">{name}</h3>
                <h4 className="text-white hover:text-orange font-inter font-normal text-[14px] leading-none">{location}</h4>
            </div>
        </div>
    </div>
)

export default TopDestinationCard;