import { useState} from "react";
import { ReviewCard } from "../components/cards";
import { reviews } from "../data";

const ReviewsSection = () => {
    const [activeReviewIndex, setActiveReviewIndex] = useState(0)

    const prevReview = (index) => {
      setActiveReviewIndex(index - 1)
    };
  
    const nextReview = (index) => {
      setActiveReviewIndex(index + 1)
    };
    
    return (
        <section
            className="grid xl:grid-flow-col xl:auto-cols-fr py-[66px] 
                    text-center md:text-start xl:pl-[72px] mb-7 w-container mx-auto "
        >
            <img
            src={process.env.PUBLIC_URL + "/images/hero3.png"}
            alt=""
            className="mx-auto xl:mx-0"
            />
            <div className="pt-10">
            <div className="w-16 h-2 bg-medium-yellow rounded mb-3"></div>
            <h1 className="text-very-dark-blue font-inter font-semibold text-[3rem] md:text-[56px] leading-tight mb-6 capitalize">
                A customer said about us:
            </h1>
            <ReviewCard
                key={reviews[activeReviewIndex].id}
                id={reviews[activeReviewIndex].id}
                content={reviews[activeReviewIndex].content}
                name={reviews[activeReviewIndex].name}
                title={reviews[activeReviewIndex].title}
                prevReview={() => prevReview(reviews[activeReviewIndex].id)}
                nextReview={() => nextReview(reviews[activeReviewIndex].id)}
                dataLength={reviews.length}
            />
            </div>
        </section>
    )
}

export default ReviewsSection;