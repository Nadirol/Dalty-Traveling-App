import { Link } from "react-router-dom";
import { useGetDestination } from "../../hooks";

const TopDestinationCard = ({ xid, name, kinds }) => {
    const { data: destinationData, isLoading } = useGetDestination(xid);

    const formatCategories = (ctg) => {
        let arr = ctg.split(',')
        arr = arr.map(item => {
            let newItem = item.replaceAll('_',' ').split(' ')
            newItem = newItem.map(word => word.charAt(0).toUpperCase() + word.slice(1))
            return newItem.join(' ');
        })
        return arr
    }
    const mainCategory = formatCategories(kinds)[0]
    
    if (!isLoading) {
        return (
            <div className="relative rounded-[20px] p-6 cursor-pointer overflow-hidden w-[80%] md:w-full mx-auto h-[500px]
            before:absolute before:bg-gradient-to-t from-filter-very-dark to-transparent before:inset-0 before:rounded-[20px]
                    md:before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:z-[9]
                        [&:hover>*>span]:bg-very-dark-blue [&:hover>*>span]:text-white">
                <img src={destinationData?.preview ? destinationData?.preview?.source : process.env.PUBLIC_URL + "/images/Logo.svg"} alt="preview" 
                    className="absolute z-0 inset-0 h-full w-full object-cover"/>
                <div className="relative z-10 flex flex-col justify-between items-start text-start w-full h-full">
                    <span className="text-very-dark-blue font-inter font-medium text-[14px] leading-none
                        px-2.5 py-[5px] bg-white rounded-xl transition-all duration-300">5.0</span>
                    <div className="flex flex-col">
                        <Link to={`/destination/${xid}`}  
                            className="text-white hover:text-orange font-inter font-semibold text-[20px] leading-none mb-2.5">
                            {name}
                        </Link>
                        <Link to={`/discover/${mainCategory}`}
                            className="text-white hover:text-orange font-inter font-normal text-[14px] leading-none">
                            {mainCategory}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }   
}

export default TopDestinationCard;