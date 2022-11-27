import { Link } from "react-router-dom";
import { useGetDestination } from "../../hooks";

const ResultCard = ({ xid, name, kinds }) => {
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

    const resultCategories = formatCategories(kinds)
    
    if (!isLoading) {
        return (
            <div className="cursor-pointer border-2 border-regular-gray dark rounded-2xl p-6 snap-start 
                hover:shadow-card-bold dark:hover:shadow-card-bold-dark transition-shadow duration-500 flex-cols-between">
                <Link to={`/destination/${xid}`} className="relative rounded-[8px] mb-4 overflow-y-hidden">
                    <img src={destinationData?.preview ? destinationData?.preview?.source : process.env.PUBLIC_URL + "/images/Logo.svg"} 
                        alt="preview" loading="lazy"
                            className='object-contain h-[270px] mx-auto relative z-10 rounded-[8px] shadow-image'/>
                    <img src={destinationData?.preview ? destinationData?.preview?.source : process.env.PUBLIC_URL + "/images/Logo.svg"}  
                        alt='background' loading="lazy"
                            className='absolute z-0 inset-0 blur-[2px] opacity-70 w-full h-full brightness-[0.75]'/>
                </Link>
                <div className="mb-auto">
                        <Link to={`/destination/${xid}`} 
                            className="text-very-dark-gray dark:text-regular-yellow font-inter font-semibold text-xl leading-none
                                hover:text-orange">
                            {name}
                        </Link>
                    <div className="mt-[14px] inline-block max-w-full break-words [&>div:last-child>span]:hidden">
                        {resultCategories.map(ctg => (
                            <div className="inline-block">
                                <Link to={`/discover/${ctg}`}
                                    className="text-dark-gray dark:text-semi-light-yellow font-inter font-normal text-[12px] leading-normal w-max hover:text-orange">
                                    {ctg}
                                </Link>
                                <span className="text-dark-gray dark:text-semi-light-yellow font-inter font-normal text-[12px] leading-normal">,&nbsp;</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultCard;

