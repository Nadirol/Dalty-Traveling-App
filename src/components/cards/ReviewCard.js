import LeftButton from "../buttons/LeftButton"
import RightButton from "../buttons/RightButton"

const ReviewCard = ({ id, content, name, title, prevReview, nextReview, dataLength }) => {    
    return (
        <div className="bg-white rounded-[14px] p-[30px] snap-start ">
            <div className="flex flex-col justify-between xl:min-h-[250px]">
                <p className="text-dark-gray font-inter font-normal text-lg mb-7 animate-fade-in">{content}</p>
                <div className="flex justify-between items-end">
                    <div className="">
                        <div className="flex gap-1 mb-4 animate-fade-in">
                            <img className="w-[18px] aspect-square" src={process.env.PUBLIC_URL + "/images/star icon.svg"} alt="" />
                            <img className="w-[18px] aspect-square" src={process.env.PUBLIC_URL + "/images/star icon.svg"} alt="" />
                            <img className="w-[18px] aspect-square" src={process.env.PUBLIC_URL + "/images/star icon.svg"} alt="" />
                            <img className="w-[18px] aspect-square" src={process.env.PUBLIC_URL + "/images/star icon.svg"} alt="" />
                            <img className="w-[18px] aspect-square" src={process.env.PUBLIC_URL + "/images/star icon.svg"} alt="" />
                        </div>
                        <h3 className="text-very-dark-blue font-inter font-medium text-xl leading-none mb-2 animate-fade-in">{name}</h3>
                        <h5 className="text-dark-gray font-inter font-normal text-xs leading-none animate-fade-in">{title}</h5>
                    </div>
                    <div className="flex gap-4">
                        <LeftButton 
                            padding='p-4'
                            status={id === 0 ? 'disabled' : null}
                            handleClick={id !== 0 ? prevReview : null}
                        />
                        <RightButton                         
                            padding='p-4'
                            status={id === dataLength - 1 ? 'disabled' : null}
                            handleClick={id !== dataLength - 1 ? nextReview : null}
                        />
                    </div>
                </div>
            </div>
        </div>
)};

export default ReviewCard;