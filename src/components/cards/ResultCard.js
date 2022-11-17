import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResultCard = ({ xid, name, kinds }) => {
    const [image, setImage] = useState('');

    const apiKey = "5ae2e3f221c38a28845f05b6cdf805e810c7cdbb7f23f88fd8740ad9";

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

    useEffect(() => {
        axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${apiKey}`)
        .then(async res => {
            setImage(await res.data.preview?.source)
        })
        .catch((err) => console.log(err));
    },[])
    
    return (
    <div className="cursor-pointer border-2 border-regular-gray rounded-2xl p-6 snap-start 
        hover:shadow-card-bold transition-shadow duration-500 flex flex-col justify-between">
        <div className="relative rounded-[8px] mb-4 overflow-y-hidden">
            <img src={image ? image : process.env.PUBLIC_URL + "/images/Logo.svg"} alt="preview"
                className='object-contain h-[270px] mx-auto relative z-10 rounded-[8px] shadow-image'
                />
            <img src={image ? image : process.env.PUBLIC_URL + "/images/Logo.svg"}  alt='background'
             className='absolute z-0 inset-0 blur-[2px] opacity-70 w-full h-full brightness-[0.75]'/>
        </div>
        <div className="mb-auto">
                <Link to={`/destination/${xid}`} 
                    className="text-very-dark-blue font-inter font-semibold text-xl leading-none
                        hover:text-orange">
                    {name}
                </Link>
            <div className="mt-[14px] inline-block max-w-full break-words [&>div:last-child>span]:hidden">
                {resultCategories.map(ctg => (
                    <div className="inline-block">
                        <Link to={`/browse/${ctg}`}
                            className="text-dark-gray font-inter font-normal text-[12px] leading-normal w-max hover:text-orange">
                            {ctg}
                        </Link>
                        <span className="text-dark-gray font-inter font-normal text-[12px] leading-normal">,&nbsp;</span>
                    </div>
                ))}
            </div>
        </div>
        {/* <h3 className="text-dark-gray font-inter font-normal text-[10px] leading-none text-center
             mt-8 decoration-light-yellow decoration-1 underline-offset-[6px] hover:underline hover:decoration-orange
             transition-textdecoration duration-100">Click To View More</h3> */}
    </div>
)}

export default ResultCard;

