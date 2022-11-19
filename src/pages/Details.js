import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs"
import { AiFillCheckCircle } from "react-icons/ai"

const Details = () => {
    const { id: destinationId } = useParams();

    const apiKey = "5ae2e3f221c38a28845f05b6cdf805e810c7cdbb7f23f88fd8740ad9";
    const apiGet = (method, query) => {
        return axios.get(
        "https://api.opentripmap.com/0.1/en/places/" +
            method +
            "?apikey=" +
            apiKey +
            (query ? "&" + query : '')
        );
    };

    const [isLoading, setIsLoading] = useState(true)
    const [destinationData, setDestinationData] = useState('')

    useEffect(() => {
        apiGet(`xid/${destinationId}`)
        .then(async res => setDestinationData( await res.data))
        .finally(() => setIsLoading(false))
        console.log(destinationData)
    },[])

    const formatCategories = (ctg) => {
        let arr = ctg.split(',')
        arr = arr.map(item => {
            let newItem = item.replaceAll('_',' ').split(' ')
            newItem = newItem.map(word => word.charAt(0).toUpperCase() + word.slice(1))
            return newItem.join(' ');
        })
        return arr
    }

    const [detailsMinimized, setDetailsMinimized] = useState(true)

    const toggleDetailsSize = () => {
        setDetailsMinimized(state => !state)
    }

    console.log(isLoading)
    if (!isLoading) {
        return (
            <div className="w-container mx-auto">
                <div className=" grid gap-12 xl:grid-flow-col xl:auto-cols-fr pt-12 mb-12">
                    <div className="">
                        <img src={destinationData.preview ? destinationData.preview?.source : process.env.PUBLIC_URL + "/images/Logo.svg"} alt="" 
                            className="mx-auto shadow-image-xl"/>
                        <div className="flex gap-16 justify-center items-center mx-auto mt-8">

                            <button className="flex items-center cursor-pointer 
                                text-semi-dark-gray font-inter font-medium text-sm md:text-base leading-normal">
                                <AiFillCheckCircle style={{ width: 32, height: 32 }} className="mr-1"/>
                                Visited
                            </button>
                            <div  className="flex items-center cursor-pointer
                                text-very-dark-blue font-inter font-medium text-sm md:text-base leading-normal">
                                <BsBookmarkFill style={{ width: 36, height: 36 }} className="mr-1"/>
                                Save
                            </div>

                        </div>
                    </div>
                    <div className="px-2 py-4 xl:px-4 flex flex-col -xl:justify-between">
                        <h1 className="font-inter font-semibold text-[3rem] md:text-[56px] text-center xl:text-start leading-none mb-2">
                            {destinationData.name}
                        </h1>
                        <div className="flex gap-3 mx-auto xl:mx-0">
                            <img src={process.env.PUBLIC_URL + "/images/location icon.svg"} alt=""/>
                            <h5 className="text-orange font-inter font-normal text-xs md:text-base leading-normal 
                                w-max cursor-pointer">
                                {`${destinationData?.address?.pedestrian ? destinationData?.address?.pedestrian : ''}, 
                                    ${destinationData?.address?.neighbourhood ? destinationData?.address?.neighbourhood : ''}, 
                                    ${destinationData?.address?.city ? destinationData?.address?.city : ''}, 
                                    ${destinationData?.address?.country ? destinationData?.address?.country : ''}`}
                            </h5>
                        </div>
                        <div className="mt-[14px] flex gap-x-1 gap-y-2 flex-wrap max-w-full xl:max-w-[90%] break-words 
                            [&>div:last-child>span]:hidden mx-auto xl:mx-0 mb-4">
                            {formatCategories(destinationData.kinds).map(ctg => (
                                    <Link to={`/browse/${ctg}`}
                                        className="text-very-dark-blue font-inter font-normal text-sm md:text-base leading-normal w-max
                                            px-2 py-1 rounded-[27px] border border-very-dark-blue hover:bg-very-dark-blue hover:text-white">
                                        {ctg}
                                    </Link>
                            ))}
                        </div>
                        <div className={`w-[90%] mx-auto xl:mx-0 mb-4 
                            ${detailsMinimized ? 'xl:h-[72px]' : ''}`}>
                            <p className={`text-dark-gray font-inter font-normal text-sm md:text-base leading-normal 
                                mx-auto xl:mx-0 overflow-hidden relative before:hidden before:absolute before:h-full before:w-full
                                    before:bg-gradient-to-b before:from-transparent before:to-light-yellow
                                        ${detailsMinimized ? 'xl:h-full xl:before:block' : 'xl:h-max xl:before:hidden'}`}>                
                                {destinationData?.wikipedia_extracts
                                    ? destinationData.wikipedia_extracts.text
                                    : "No description."
                                }
                            </p>
                        </div>
                        <div className="text-center hidden xl:block w-[90%] mx-auto xl:mx-0 mb-4">
                                <button onClick={toggleDetailsSize}
                                    className='text-dark-gray font-inter font-medium text-xs md:text-base leading-normal cursor-pointer underline'>
                                    {detailsMinimized ? 'See More' : 'Minimize'}
                                </button>
                            </div>
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
                <div className="">
                    <h1>Nearby Destinations:</h1>
                </div>
            </div>
        )
    }
}

export default Details;