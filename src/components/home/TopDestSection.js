import { useState } from "react";
import { TagCard, TopDestinationCard } from "../cards";
import { destinationTags } from "../../data";
import { useGetLocation, useGetSearchResults } from "../../hooks";
import Loader from "../Loader";

let lon;
let lat;

const onLocationSuccess = (data) => {
    lon = data.lon;
    lat = data.lat
}

const TopDestSection = () => {
    const [activeTagIndex, setActiveTagIndex] = useState(0)
  
    const handleTopDesTag = (index) => {
      setActiveTagIndex(index);
    }

    const { isLoading: isLoadingLocation,
      } = useGetLocation(destinationTags[activeTagIndex], onLocationSuccess, ['location', activeTagIndex], true);
    
    const searchQueryKey = ['searchResults', lon, lat]
    const { isLoading: isLoadingTopDes,
        data: topDesData,
    } = useGetSearchResults(lon, lat, 3000, 6, searchQueryKey)

    return (
        <section className="text-center py-9 mb-9 w-container mx-auto ">
            <h1 className="text-very-dark-blue font-inter font-semibold -xs:text-[2rem] text-[3rem] md:text-[56px] mx-auto md:mx-0 leading-tight mb-4">
            Top Destinations
            </h1>
            <p className="text-dark-gray font-inter font-normal text-base leading-none mb-7">
            Sost Brilliant reasons Entrada should be your one-stop-shop!
            </p>
            <div className="flex flex-wrap justify-center gap-3.5 mx-auto w-3/4 md:w-[60%] mb-[50px]">
            {destinationTags.map((tag, index) => (
                <TagCard
                key={index}
                id={index}
                name={tag}
                handleClick={() => handleTopDesTag(index)}
                activeTagIndex={activeTagIndex}/>
            ))}
            </div>
            { topDesData 
              ? <div className="grid gap-4 auto-cols-fr md:grid-cols-3
                  pt-9 pb-[50px] w-container mx-auto">
                  { isLoadingLocation || isLoadingTopDes 
                    ? <Loader />
                    : topDesData.map(result => (
                      <TopDestinationCard
                      key={result.xid}
                      xid={result.xid}
                      name={result.name}
                      kinds={result.kinds}
                      />
                  ))
                  }
                </div>
              : <></>
            }

        </section>
    )
}

export default TopDestSection;