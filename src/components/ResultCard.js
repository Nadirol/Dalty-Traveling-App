import { Link } from "react-router-dom";

const ResultCard = ({ xid, preview, name, kinds }) => {
    kinds = kinds.replace(',', ', ');
    return (
    <Link to={`/destination/${xid}`}
        className="cursor-pointer border-2 border-white rounded-2xl p-3 snap-start 
        hover:shadow-card transition-shadow duration-500 min-w-[400px] max-w-[400px] h-[450px] flex flex-col justify-between">
        <img src={preview ? preview : process.env.PUBLIC_URL + "/images/Logo.svg"} alt="preview"
         className={`${preview ? 'object-cover' : 'object-contain'} h-[270px] rounded-[8px]`}/>
        <div className="">
            <h1 className="text-very-dark-blue font-inter font-semibold text-xl leading-none mb-[14px]">{name}</h1>
            <h3 className="text-dark-gray font-inter font-normal text-[12px] leading-none max-w-full break-words">{kinds}</h3>
        </div>
    </Link>
)}

export default ResultCard;

