import { Link } from "react-router-dom";

const CategoryCard = ({ name, image }) => {
    return (
        <div className="text-center snap-start">
            <Link to={`/discover/${name}`}>
                <div className="mb-[1.125rem] cursor-pointer relative dark-overlay-full">
                    <img src={image} alt="" className="max-w-none"/>
                    <div className="absolute inset-0 w-full h-full flex-center-center opacity-0 transition-all duration-200 z-20">
                        <h3 className="font-inter font-semibold text-[1.25rem] leading-tight text-white dark:text-regular-yellow">
                            Visit
                        </h3>
                    </div>
                </div>
            </Link>
            <h1 className="dark:text-regular-yellow font-inter font-medium text-[20px] leading-none">{name}</h1>
        </div>
    )
}

export default CategoryCard;