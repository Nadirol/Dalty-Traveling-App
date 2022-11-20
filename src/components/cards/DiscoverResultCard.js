import { Link } from "react-router-dom";

const DiscoverResultCard = ({ image, name, xid }) => {
    return (
        <div className="">
            <img src={image ? image : process.env.PUBLIC_URL + "/images/Logo.svg"} alt="" />
            <Link to={`/destination/${xid}`}>
                {name}
            </Link>
        </div>
    )
}

export default DiscoverResultCard;