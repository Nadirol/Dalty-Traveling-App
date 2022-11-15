import { Link } from "react-router-dom";

const ResultCard = ({ xid, name, kinds }) => {
    const formatCategories = (ctg) => {
        let arr = ctg.split(',')
        arr = arr.map(item => {
            let newItem = item.replaceAll('_',' ').split(' ')
            newItem = newItem.map(word => word.charAt(0).toUpperCase() + word.slice(1))
            return newItem.join(' ');
        })
        return arr.join(', ')
    }
    
    return (
    <Link to={`/destination/${xid}`}
        className="cursor-pointer border-2 border-regular-gray rounded-2xl p-6 snap-start 
        hover:shadow-card-bold transition-shadow duration-500 flex flex-col justify-between">
        <div className="">
            <h1 className="text-very-dark-blue font-inter font-semibold text-xl leading-none mb-[14px]">{name}</h1>
            <p className="text-dark-gray font-inter font-normal text-[12px] leading-normal max-w-full break-words">{formatCategories(kinds)}</p>
        </div>
        <h3 className="text-dark-gray font-inter font-normal text-[10px] leading-none text-center
             mt-8 decoration-light-yellow decoration-1 underline-offset-[6px] hover:underline hover:decoration-orange
             transition-textdecoration duration-100">Click To View More</h3>
    </Link>
)}

export default ResultCard;

