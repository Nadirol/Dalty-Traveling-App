import { Link } from "react-router-dom";

const DiscoverResultCard = ({ image, name, xid, distance }) => {
    function capitalizeFirstLetter(string) {
        let newString = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return newString.join(' ');
    };
    return (
        <div className="mb-6 break-inside-avoid-column">
            <Link to={`/destination/${xid}`}>
                <img src={image ? image : process.env.PUBLIC_URL + "/images/Logo.svg"} alt="" 
                    className="rounded-xl shadow-image-lg mb-3" loading="lazy"/>
            </Link>
            <Link to={`/destination/${xid}`} 
                className="text-very-dark-gray dark:text-regular-yellow font-inter font-normal text-sm md:text-base 
                    text-center xl:text-start leading-none hover:text-orange dark:hover:text-orange mb-4">
                {capitalizeFirstLetter(name)}
            </Link>
            <h1 className="text-very-dark-gray dark:text-regular-yellow font-inter font-normal text-xs text-start leading-none">
                <span className="text-blue dark:text-orange">{Math.round(distance)}m</span> Away
            </h1>
        </div>
    )
}

export default DiscoverResultCard;