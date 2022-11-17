import LeftButton from "../buttons/LeftButton"
import RightButton from "../buttons/RightButton"

import { useState } from "react";

const ReviewCard = ({ content, name, title }) => {

    const [prevColorReview, setPrevColorReview] = useState('#2D3134');

    const prevReviewHoverIn = () => {
        setPrevColorReview('#faf8ed');
    }

    const prevReviewHoverOut = () => {
        setPrevColorReview('#2D3134');
    }

    const [nextColorReview, setNextColorReview] = useState('#2D3134');

    const nextReviewHoverIn = () => {
        setNextColorReview('#faf8ed');
    }

    const nextReviewHoverOut = () => {
        setNextColorReview('#2D3134');
    }
    
    return (
        <div className="bg-white rounded-[14px] p-[30px]">
            <p className="text-dark-gray font-inter font-normal text-lg mb-7">{content}</p>
            <div className="flex justify-between items-end">
                <div className="">
                    <div className="flex gap-1 mb-4">
                        <img className="w-[18px] aspect-square" src={process.env.PUBLIC_URL + "/images/star icon.svg"} alt="" />
                        <img className="w-[18px] aspect-square" src={process.env.PUBLIC_URL + "/images/star icon.svg"} alt="" />
                        <img className="w-[18px] aspect-square" src={process.env.PUBLIC_URL + "/images/star icon.svg"} alt="" />
                        <img className="w-[18px] aspect-square" src={process.env.PUBLIC_URL + "/images/star icon.svg"} alt="" />
                        <img className="w-[18px] aspect-square" src={process.env.PUBLIC_URL + "/images/star icon.svg"} alt="" />
                    </div>
                    <h3 className="text-very-dark-blue font-inter font-medium text-xl leading-none mb-2">{name}</h3>
                    <h5 className="text-dark-gray font-inter font-normal text-xs leading-none">{title}</h5>
                </div>
                <div className="flex gap-4">
                    <LeftButton 
                        color={prevColorReview}
                        handleHoverIn={prevReviewHoverIn}
                        handleHoverOut={prevReviewHoverOut}
                        padding='p-4'
                    />
                    <RightButton                         
                        color={nextColorReview}
                        handleHoverIn={nextReviewHoverIn}
                        handleHoverOut={nextReviewHoverOut}
                        padding='p-4'
                    />
                </div>
            </div>
        </div>
)};

export default ReviewCard;