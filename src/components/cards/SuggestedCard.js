import { Link } from "react-router-dom"
import { useGetDestination } from "../../hooks";

const SuggestedCard = ({ name, kinds, xid }) => {
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
            <div className="md:snap-start border-2 border-dark-gray rounded-lg flex flex-col justify-between px-4 py-4 w-[320px] min-w-[320px] animate-fade-in">
                <div className="relative rounded-[8px] mb-4 overflow-y-hidden ">
                    <img src={destinationData?.preview ? destinationData?.preview?.source : process.env.PUBLIC_URL + "/images/Logo.svg"} alt="preview"
                        className='object-contain h-[270px] mx-auto relative z-10 rounded-[8px] shadow-image'
                        />
                    <img src={destinationData?.preview ? destinationData?.preview?.source : process.env.PUBLIC_URL + "/images/Logo.svg"}  alt='background'
                    className='absolute z-0 inset-0 blur-[2px] opacity-70 w-full h-full brightness-[0.75]'/>
                </div>
                <div className="flex flex-col">
                    <Link to={`/destination/${xid}`}
                        className="text-very-dark-gray dark:text-semi-light-yellow font-inter font-semibold text-base leading-none
                        hover:text-orange dark:hover:text-orange">
                        {name}
                    </Link>
                    <Link to={`/discover/${mainCategory}`}
                        className="text-very-dark-gray dark:text-semi-light-yellow font-inter 
                            font-normal text-sm leading-normal w-max hover:text-orange dark:hover:text-orange">
                        {mainCategory}
                    </Link>
                </div>
            </div>
    )}
}

export default SuggestedCard;