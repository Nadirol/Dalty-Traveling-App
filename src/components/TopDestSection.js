import { useState, useEffect } from "react";
import axios from "axios";
import { TagCard, TopDestinationCard } from "../components/cards";
import { destinationTags } from "../data";

const TopDestSection = () => {

    const apiKey = "5ae2e3f221c38a28845f05b6cdf805e810c7cdbb7f23f88fd8740ad9";

    const apiGet = (method, query) => {
      return axios.get(
        "https://api.opentripmap.com/0.1/en/places/" +
          method +
          "?apikey=" +
          apiKey +
          (query ? "&" + query : '')
      );
    };
  
    const [topDesData, setTopDesData] = useState("");
    const [activeTagIndex, setActiveTagIndex] = useState(0)
  
    useEffect(() => {
      apiGet("geoname", `name=${destinationTags[0]}`)
      .then(async res => {
        apiGet(
          'radius',
          `radius=1000&limit=6&offset=0&lon=${await res.data.lon}&lat=${await res.data.lat}&rate=3&format=json`
        )
        .then(async res => {
          setTopDesData(await res.data)
        })
      })
    },[])
  
    const loadTopDesData = (tag, index) => {
      setTopDesData("");
      setActiveTagIndex(index);
      apiGet("geoname", `name=${tag}`)
      .then(async res => {
        apiGet(
          'radius',
          `radius=1000&limit=6&offset=0&lon=${await res.data.lon}&lat=${await res.data.lat}&rate=3&format=json`
        )
        .then(async res => {
          setTopDesData(await res.data)
        });
      })
    }

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
                handleClick={() => loadTopDesData(tag, index)}
                activeTagIndex={activeTagIndex}/>
            ))}
            </div>
            {topDesData && (
            <>
                <div className="grid gap-4 auto-cols-fr md:grid-cols-3
                        pt-9 pb-[50px] w-container mx-auto">
                {topDesData.map(result => (
                    <TopDestinationCard
                    key={result.xid}
                    xid={result.xid}
                    name={result.name}
                    kinds={result.kinds}
                    />
                ))}
                </div>
            </>
            )}
        </section>
    )
}

export default TopDestSection;