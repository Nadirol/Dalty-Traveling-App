import { Link } from "react-router-dom";
import { BsBookmarkFill, BsFillBookmarkCheckFill } from "react-icons/bs"
import { AiFillCheckCircle } from "react-icons/ai"
import { useState } from "react";

const DesDetails = ({ destinationData }) => {
    const [detailsMinimized, setDetailsMinimized] = useState(true)
    const toggleDetailsSize = () => {
        setDetailsMinimized(state => !state)
    }

    const [isVisited, setIsVisited] = useState(false);
    const handleVisitedClick = () => {
        setIsVisited(state => !state)
    }

    const [isBookmarked, setIsBookmarked] = useState(false);
    const handleBookmarkClick = () => {
        setIsBookmarked(state => !state)
    }

    const formatCategories = (ctg) => {
        let arr = ctg.split(',')
        arr = arr.map(item => {
            let newItem = item.replaceAll('_',' ').split(' ')
            newItem = newItem.map(word => word.charAt(0).toUpperCase() + word.slice(1))
            return newItem.join(' ');
        })
        return arr
    }

    function capitalizeFirstLetter(string) {
        let newString = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return newString.join(' ');
    };

    return (
        <div className=" grid gap-12 xl:grid-flow-col xl:auto-cols-fr pt-12 mb-12">
            <div className="">
                <img src={destinationData.preview ? destinationData.preview?.source : process.env.PUBLIC_URL + "/images/Logo.svg"} alt="" 
                    className={`mx-auto  ${destinationData.preview ? 'shadow-image-xl' : 'h-3/5'}`}/>
                <div className="flex gap-16 justify-center items-center mx-auto mt-8">
                    <button className={`flex items-center cursor-pointer
                        ${isVisited ? 'text-green' : 'text-semi-dark-gray'} font-inter font-medium text-sm md:text-base leading-normal
                            ${ isVisited ? 'animate-pop' : 'animate-pop-reversed'} transition-colors duration-400`}
                            onClick={handleVisitedClick}>
                        <AiFillCheckCircle style={{ width: 32, height: 32 }} className="mr-1"/>
                        {`${isVisited ? '' : 'Not'} Visited`}
                    </button>
                    <div  className={`flex items-center cursor-pointer ${ isBookmarked ? 'animate-pop' : 'animate-pop-reversed'}
                        text-very-dark-gray dark:text-regular-yellow font-inter font-medium text-sm md:text-base leading-normal`}
                            onClick={handleBookmarkClick}>
                        {isBookmarked 
                            ? (<BsFillBookmarkCheckFill style={{ width: 36, height: 36 }} className="mr-1"/>)
                            : (<BsBookmarkFill style={{ width: 36, height: 36 }} className="mr-1"/>)
                        }
                        
                        {isBookmarked 
                        ? 'Saved' : 'Save'}
                    </div>
                </div>
            </div>
            <div className="px-2 py-4 xl:px-4 flex flex-col -xl:justify-between">
                <h1 className="dark:text-regular-yellow font-inter font-semibold text-[3rem] md:text-[56px] 
                    text-center xl:text-start leading-none mb-2 md:max-h-[168px] overflow-y-hidden" 
                        title={destinationData.name}>
                    {capitalizeFirstLetter(destinationData.name)}
                </h1>
                <div className="flex gap-3 mx-auto xl:mx-0">
                    <img src={process.env.PUBLIC_URL + "/images/location icon.svg"} alt=""/>
                    <a href={`https://maps.google.com/?ll=${destinationData?.point.lat},${destinationData?.point.lon}`}
                        className="text-orange font-inter font-normal text-xs md:text-base leading-normal 
                            w-max cursor-pointer" target="_blank" rel="noreferrer">
                        {`${destinationData?.address?.pedestrian ? `${destinationData?.address?.pedestrian},` : ''} 
                            ${destinationData?.address?.neighbourhood ? `${destinationData?.address?.neighbourhood},` : ''} 
                            ${destinationData?.address?.city ? destinationData?.address?.city : ''}, 
                            ${destinationData?.address?.country ? destinationData?.address?.country : ''}`}
                    </a>
                </div>
                <div className="mt-[14px] flex gap-x-2 gap-y-2 flex-wrap justify-center xl:justify-start max-w-[90%] break-words 
                    [&>div:last-child>span]:hidden mx-auto xl:mx-0 mb-4">
                    {formatCategories(destinationData.kinds).map((ctg) => (
                            <Link to={`/discover/${ctg}`} key={ctg}
                                className="ctg-tag-btn">
                                {ctg}
                            </Link>
                    ))}
                </div>
                <div className={`w-[90%] mx-auto xl:mx-0 mb-4 
                    ${detailsMinimized ? 'xl:h-[72px]' : ''}`}>
                    <p className={`details-p
                                ${detailsMinimized && destinationData?.wikipedia_extracts 
                                ? 'xl:h-full xl:before:block' : 'xl:h-max xl:before:hidden'}`}>                
                        {destinationData?.wikipedia_extracts
                            ? destinationData.wikipedia_extracts.text
                            : "No description."
                        }
                    </p>
                </div>
                {destinationData?.wikipedia_extracts && (
                    <div className="text-center hidden xl:block w-[90%] mx-auto xl:mx-0 mb-4">
                        <button onClick={toggleDetailsSize}
                            className='text-dark-gray dark:text-semi-light-yellow font-inter font-medium text-xs md:text-base 
                                leading-normal cursor-pointer underline'>
                            {detailsMinimized ? 'See More' : 'Minimize'}
                        </button>
                    </div>
                )}
                <div className="w-[90%] mx-auto xl:mx-0 flex justify-between">
                    <a href={destinationData?.wikipedia} target="_blank" rel="noreferrer"
                        className="text-orange font-inter font-normal text-xs md:text-base leading-normal cursor-pointer">
                        Wikipedia
                    </a>
                    <a href={destinationData?.otm} target="_blank" rel="noreferrer"
                        className="text-orange font-inter font-normal text-xs md:text-base leading-normal cursor-pointer">
                        View destination on OpenTripMap
                    </a>
                </div>
            </div>
        </div>
    )
};

export default DesDetails;