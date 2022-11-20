import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopDestinationCard = ({ xid, name, kinds }) => {
    const [image, setImage] = useState('');

    const apiKey = "5ae2e3f221c38a28845f05b6cdf805e810c7cdbb7f23f88fd8740ad9";

    useEffect(() => {
        axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${apiKey}`)
        .then(async res => {
            setImage(await res.data.preview?.source)
        })
        .catch((err) => console.log(err));

        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const mainCategory = formatCategories(kinds)[0]
    
    return (
    <div className="relative rounded-[20px] p-6 cursor-pointer overflow-hidden w-[80%] md:w-full mx-auto h-[500px]
    before:absolute before:bg-gradient-to-t from-filter-very-dark to-transparent before:inset-0 before:rounded-[20px]
            md:before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:z-[9]
                [&:hover>*>span]:bg-very-dark-blue [&:hover>*>span]:text-white">
        <img src={image ? image : process.env.PUBLIC_URL + "/images/Logo.svg"} alt="preview" 
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
)}

export default TopDestinationCard;