import { useRef, useState } from "react";
import axios from "axios";
import { ResultCard } from "../cards"; 
import countryCodes from "../../data/countryCodes.json";

let offset = 0;
let lon;
let lat;

const SearchSection = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchResults, setSearchResults] = useState("");
  
    const resultSection = useRef(null);
    const resultSlider = useRef(null);
  
    const handleSearchChange = (e) => {
      setSearchValue(e.target.value);
    };
  
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
  
    const pageLength = 6;
    const [count, setCount] = useState(null); 
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      let data =  apiGet("geoname", "name=" + searchValue);
     
      data.then(async res => {
          setSearchTitle("Name not found");
          if (res.data.status === 'OK') {
              setSearchTitle(capitalizeFirstLetter(res.data.name) + ", " + (countryCodes[res.data.country]));
          }
          lon = await res.data.lon
          lat = await res.data.lat
          apiGet(
              "radius",
              `radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=count`
          ).then(res => {
                setCount(res.data.count);
                offset = 0;
            })
          .catch(() => setSearchTitle("Error"));
          apiGet(
            "radius",
            `radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=json`
          )
          .then(async res => {
              setSearchResults(await res.data)
          })
          .then(() => {
            resultSection.current.scrollIntoView({behavior: "smooth"})
          })
          .catch(() => setSearchTitle("Error"));
      })
    };
  
    const moreResults = () => {
      offset += pageLength
      apiGet(
        "radius",
        `radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=json`
      )
      .then(res => {
          setSearchResults((prevResults) => prevResults.concat(res.data))
      })
    }

    function capitalizeFirstLetter(string) {
        let newString = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return newString.join(' ');
    };


    return (
        <section className=" w-container mx-auto">
            <div className="grid gap-8 xl:gap-36 xl:grid-flow-col xl:auto-cols-fr text-center xl:text-start mb-16 xl:mb-[124px]">
            <img src={process.env.PUBLIC_URL + "/images/hero1.png"} alt="" className="xl:ml-auto mx-auto"/>
            <div className="mt-16">
                <h1 className="font-sen font-bold text-[4rem] md:text-[5.25rem] leading-none mb-6">
                    Discover the Best Lovely Places
                </h1>
                <p className="font-inter font-normal text-base md:text-[1.125rem] leading-snug mb-[2.75rem] w-search-form mx-auto xl:mx-0">
                    Plan and book your perfect trip with expert advice, travel tips,
                    destination information and inspiration from us.
                </p>
                <form
                onSubmit={(e) => handleSearchSubmit(e)}
                className="bg-white flex items-center px-7 py-5 rounded-[100vw] w-search-form mx-auto xl:mx-0"
                >
                <div className="mx-auto flex">
                    <div className="pr-1 md:pr-8 border-r border-light-gray">
                        <h1 className="font-inter font-normal text-[1.125rem] leading-none mb-2 text-start">
                            Where
                        </h1>
                        <div className="flex">
                            <input type="text" placeholder="Center Point, Lo..." value={searchValue} onChange={(e) => handleSearchChange(e)}
                            className="w-full md:w-32 text-dark-gray font-inter font-normal text-base leading-none focus:outline-0
                                placeholder:text-mediumgray placeholder:text-xs placeholder:leading-none placeholder:font-normal
                                    placeholder:font-inter"/>
                            <img src={process.env.PUBLIC_URL + "/images/location icon.svg"} alt=""/>
                        </div>
                    </div>
                    <div className="pl-1 md:pl-8">
                    <h1 className="font-inter font-normal text-[1.125rem] leading-none mb-2 text-start">
                        Date
                    </h1>
                    <div className="flex">
                        <input
                        type="text"
                        placeholder="09th March,2021"
                        className="w-full md:w-32 font-inter font-normal text-xs leading-none focus:outline-0
                            placeholder:text-mediumgray placeholder:text-xs placeholder:leading-none placeholder:font-normal
                            placeholder:font-inter"/>
                        <img src={process.env.PUBLIC_URL + "/images/calendar icon.svg"} alt=""/>
                    </div>
                    </div>
                </div>
                <input type="submit" name="" id="submit-button" className="hidden"/>
                <label
                    htmlFor="submit-button"
                    className="cursor-pointer mx-auto ml-2 md:ml-6"
                >
                    <img
                    src={process.env.PUBLIC_URL + "/images/search icon.svg"}
                    alt="search"
                    />
                </label>
                </form>
            </div>
            </div>

            <div className="mb-[3.75rem] text-center w-container mx-auto" ref={resultSection}>
            <div className="text-center xl:text-start mb-6">
                <h1 className="font-inter font-semibold text-[1.5rem] md:text-[3rem] leading-none">
                {searchTitle}
                </h1>
            </div>
            {searchResults && (
                <>
                    <h3 className="font-inter font-normal text-base md:text-2xl leading-none text-start">Found {count} Results:</h3>
                    <div className="grid gap-4 auto-cols-fr md:grid-cols-3
                                pt-9 pb-[50px]" ref={resultSlider}>
                        {searchResults.map(result => (
                        <ResultCard
                            key={result.xid}
                            xid={result.xid}
                            name={result.name}
                            kinds={result.kinds}
                        />
                        ))}
                    </div>
                    {searchResults.length < count && 
                        <div className="w-full text-center">
                            <button className="text-orange font-inter font-normal text-base md:text-xl leading-none mx-auto 
                            border-2 border-orange py-3 px-6 rounded-[27px] hover:bg-orange hover:text-white" onClick={moreResults}>
                            View More
                            </button>
                        </div>
                    }

                </>
            )}
            </div>
        </section>
    )
}

export default SearchSection;