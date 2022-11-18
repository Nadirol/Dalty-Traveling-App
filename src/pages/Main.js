import { useRef, useState } from "react";
import axios from "axios";
import { CategoryCard, SpecialTourCard, ReviewCard, TagCard, TopDestinationCard, ResultCard } from "../components/cards";
import { LeftButton, RightButton } from "../components/buttons";
import { locationCategories, SpecialTours, destinationTags, reviews } from "../data";
import countryCodes from "../data/countryCodes.json";
import { useEffect } from "react";

let offset = 0;
let lon;
let lat;

const Main = () => {

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

  const categorySlider = useRef(null);
  const popularSlider = useRef(null);

  const prevCategory = () =>
    categorySlider.current.scrollBy({
      top: 0,
      left: -10,
      behavior: "smooth",
    });

  const nextCategory = () => {
    categorySlider.current.scrollBy({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };

  const prevPopular = () =>
    popularSlider.current.scrollBy({
      top: 0,
      left: -10,
      behavior: "smooth",
    });

  const nextPopular = () =>
    popularSlider.current.scrollBy({
      top: 0,
      left: 10,
      behavior: "smooth",
    });

  function capitalizeFirstLetter(string) {
    let newString = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return newString.join(' ');
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

  const [activeReviewIndex, setActiveReviewIndex] = useState(0)

  const prevReview = (index) => {
    setActiveReviewIndex(index - 1)
  };

  const nextReview = (index) => {
    setActiveReviewIndex(index + 1)
  };

  return (
    <main className="mt-[0.625rem]">
      <section className="grid gap-8 xl:gap-36 xl:grid-flow-col xl:auto-cols-fr text-center xl:text-start mb-16 xl:mb-[124px] w-container mx-auto">
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
                  <input
                    type="text"
                    placeholder="Center Point, Lo..."
                    value={searchValue}
                    onChange={(e) => handleSearchChange(e)}
                    className="w-full md:w-32 text-dark-gray font-inter font-normal text-base leading-none focus:outline-0
                        placeholder:text-mediumgray placeholder:text-xs placeholder:leading-none placeholder:font-normal
                            placeholder:font-inter"
                  />
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
            <input
              type="submit"
              name=""
              id="submit-button"
              className="hidden"
            />
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
      </section>
      <section className="mb-[3.75rem] text-center" ref={resultSection}>
        <div className="w-container text-center xl:text-start mx-auto mb-6">
          <h1 className="font-inter font-semibold text-[1.5rem] md:text-[3rem] leading-none">
            {searchTitle}
          </h1>
        </div>
        {searchResults && (
          <>
            <h3 className="font-inter font-normal text-base md:text-2xl leading-none w-container text-start mx-auto">Found {count} Results:</h3>
            <div className="grid gap-4 auto-cols-fr md:grid-cols-3
                      pt-9 pb-[50px] w-container mx-auto" ref={resultSlider}>
              {searchResults.map(result => (
                <ResultCard
                  key={result.xid}
                  xid={result.xid}
                  name={result.name}
                  kinds={result.kinds}
                />
              ))}
            </div>
            <div className="w-full text-center">
              <button className="text-orange font-inter font-normal text-base md:text-xl leading-none mx-auto 
                border-2 border-orange py-3 px-6 rounded-[27px] hover:bg-orange hover:text-white" onClick={moreResults}>
                View More
              </button>
            </div>

          </>
        )}
      </section>
      <section className="pb-[3.75rem] w-container mx-auto">
        <div className="mb-6 flex justify-between text-center mx-auto">
          <h1 className="font-inter font-semibold text-[3rem] md:text-[56px] mx-auto md:mx-0 leading-none">
            Categories
          </h1>
          <div className="hidden md:flex gap-4">
            <LeftButton handleClick={prevCategory} key='-1'/>
            <RightButton handleClick={nextCategory} key='1'/>
          </div>
        </div>
        <p className="font-inter font-normal text-base leading-snug text-dark-gray md:w-[370px] text-center md:text-start mb-[60px]">
          Here are lots of interesting destinations to visit, but don’t be
          confused—they’re already grouped by category.
        </p>
        <div className="flex gap-[46px] items-center overflow-x-scroll scrollbar-hide snap-x 
          snap-mandatory overscroll-x-contain [&>*:last-child]:pr-[46px] py-1"
            ref={categorySlider}>
          {locationCategories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </section>
      <section className="pb-8 w-container mx-auto ">
        <div className="grid text-center xl:gap-28 xl:grid-flow-col xl:auto-cols-fr xl:text-start pt-[50px] pb-[58px]">
          <div className="relative xl:mr-auto xl:mb-auto -xl:mx-auto">
            <img src={process.env.PUBLIC_URL + "/images/hero2.png"} alt="" />
            <div
              className="bg-white rounded-[14px] text-center px-1.5 py-2 md:px-[14px] md:py-[20px] 
                            absolute bottom-[80px] left-[-10px] md:left-[-51px]"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/star location icon.svg"}
                alt=""
                className="mx-auto aspect-square w-12 md:w-20 mb-[20px]"
              />
              <h2 className="text-orange font-poppins font-semibold text-base md:text-[30px] leading-none mb-2">
                600%
              </h2>
              <h5 className="text-regular-gray font-inter font-normal text-xs md:text-[19px] leading-[30px]">
                Destinations
              </h5>
            </div>
            <div
              className="bg-white rounded-[10px] px-2 py-3 md:pl-[16px] md:pr-[21px] md:py-[20px]
                            absolute bottom-[-20px] right-[1rem] flex justify-between"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/connect icon.svg"}
                alt=""
                className="w-[2rem] md:w-full"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-very-dark-blue font-poppins font-semibold text-base md:text-[30px] leading-none">
                  5000+
                </h2>
                <h5 className="text-dark-gray font-poppins font-normal text-[8px] md:text-[12px] leading-none">
                  Customers
                </h5>
              </div>
            </div>
          </div>
          <div className="pt-14">
            <h4 className="text-orange font-inter font-semibold text-[20px] leading-none tracking-wide mb-[20px]">
              Our Experience
            </h4>
            <h1
              className="text-very-dark-blue font-inter font-semibold text-[3rem] md:text-[56px] 
                            mx-auto md:mx-0 leading-tight mb-[20px]"
            >
              Our Stories Have Adventures
            </h1>
            <p className="text-dark-gray font-inter font-normal text-base leading-normal mb-[40px] w-3/4 mx-auto xl:mx-0">
              We are experienced in bringing adventures to stay their journey,
              with all outdoor destinations in the world as our specialties.
              Start your adventure now! Nature has already called you!
            </p>
            <div className="grid gap-[20px] xl:grid-flow-col xl:auto-cols-fr grid-cols-2">
              <div className="bg-white bg-opacity-70 rounded-[14px] p-[30px]">
                <h2 className="text-orange font-inter font-semibold text-[46px] leading-none mb-[18px]">
                  12K+
                </h2>
                <h4 className="text-regular-gray font-inter font-normal text-[21px] leading-normal">
                  Succes Journey
                </h4>
              </div>
              <div className="bg-white bg-opacity-70 rounded-[14px] p-[30px]">
                <h2 className="text-orange font-inter font-semibold text-[46px] leading-none mb-[18px]">
                  16+
                </h2>
                <h4 className="text-regular-gray font-inter font-normal text-[21px] leading-normal">
                  Awards Winning
                </h4>
              </div>
              <div className="bg-white bg-opacity-70 rounded-[14px] p-[30px]">
                <h2 className="text-orange font-inter font-semibold text-[46px] leading-none mb-[18px]">
                  20+
                </h2>
                <h4 className="text-regular-gray font-inter font-normal text-[21px] leading-normal">
                  Years Of Experience
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[50px] mb-14">
        <div className="flex justify-between items-center text-center md:text-start w-container mx-auto">
          <h1
            className="text-very-dark-blue font-inter font-semibold text-[3rem] md:text-[56px] mx-auto 
                        md:mx-0 leading-tight md:w-[400px]"
          >
            Special Tours
          </h1>
          <div className="hidden md:flex gap-4">
            <LeftButton handleClick={prevPopular}  key='-1'/>
            <RightButton handleClick={nextPopular}  key='1'/>
          </div>
        </div>
        <div
          className="flex gap-[30px] overflow-x-scroll scrollbar-hide snap-x snap-mandatory overscroll-x-contain
                     pt-9 pb-[50px] w-slider-container md:ml-auto"
          ref={popularSlider}
        >
          {SpecialTours.map((destination) => (
            <SpecialTourCard
              key={destination.id}
              name={destination.name}
              price={destination.price}
              image={destination.image}
            />
          ))}
        </div>
      </section>
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
      <section className="py-[46px] mb-4 w-container mx-auto ">
        <div className="bg-medium-yellow rounded-[30px] py-[75px] text-center relative">
          <img
            src={process.env.PUBLIC_URL + "/images/intersect.png"}
            alt=""
            className="absolute inset-0 z-0 w-full h-full"
          />
          <div className="relative z-10">
            <h1 className="text-very-dark-blue font-inter font-semibold text-[40px] leading-none mb-4">
              Sign up to our newsletter
            </h1>
            <p className="text-dark-gray font-inter font-normal text-base leading-normal mb-10">
              Reciev latest news, update, and many other things every week.{" "}
            </p>
            <form className="flex gap-1 justify-between items-center bg-white rounded-xl p-2.5 w-contact-form mx-auto">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                required
                className="bg-transparent pl-4 text-very-dark-blue font-inter font-normal text-xl focus:outline-0 w-[80%] md:w-full
                                placeholder:text-dark-gray placeholder:font-inter placeholder:font-normal 
                                    placeholder:text-xs md:placeholder:text-[14px] placeholder:leading-none"
              />
              <input
                type="submit"
                className="hidden"
                id="email-sumbit__button"
              />
              <label htmlFor="email-sumbit__button">
                <img
                  src={process.env.PUBLIC_URL + "/images/paper plane2.svg"}
                  alt="submit button"
                  className="p-3 rounded-xl bg-orange cursor-pointer hover:bg-dark-orange"
                />
              </label>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
