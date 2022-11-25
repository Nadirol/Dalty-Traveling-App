
import { GrClose } from "react-icons/gr"
import { BsFilterLeft } from "react-icons/bs"
import { useState } from "react";
import { Link } from 'react-router-dom';

const DiscoverHeader = ({ handleSearchSubmit, searchValue, handleSearchChange, clearSearchValue, 
    radiusValue, handleRadiusChange,
    nameValue, handleNameChange }) => {
        const [searchConfigsExpanded, setSearchConfigsExpanded] = useState(false);
        const toggleSearchConfigs = () => {
            setSearchConfigsExpanded(prevState => !prevState)
        }
        return (
            <div className="w-full mx-auto mb-8 flex items-center justify-between px-4">
                <Link to='/home'>
                    <img src={process.env.PUBLIC_URL + "/images/Logo.svg"} alt="brand logo"/>
                </Link>
                <form onSubmit={(e) => handleSearchSubmit(e)}
                    className="bg-white px-4 md:px-7 py-2 rounded-[100vw] w-discover-search-form mx-auto 
                        relative">
                    <div className="relative z-30 flex items-center">
                        <button className="text-regular-gray text-xl pr-2 rounded-[50%] hover:text-orange" onClick={toggleSearchConfigs}>
                            <BsFilterLeft/>
                        </button>
                        <input type="text" placeholder="Street name, or City like 'Paris'" value={searchValue} onChange={(e) => handleSearchChange(e)}
                            className="w-full text-dark-gray font-inter font-normal text-base leading-none focus:outline-0
                            placeholder:text-medium-gray placeholder:text-sm placeholder:leading-none placeholder:font-normal
                                placeholder:font-inter bg-transparent"/>
                        <input type="submit" name="" id="submit-button" className="hidden"/>
                        <div className={`hover:bg-light-gray rounded-[50%] p-3 ${searchValue ? 'block' : 'hidden'}`}
                            onClick={clearSearchValue}>
                            <GrClose style={{ width: 22, height: 22 }} />
                        </div>
                        <label
                            htmlFor="submit-button"
                            className="cursor-pointer mx-auto ml-2 md:ml-6"
                        >
                            <img src={process.env.PUBLIC_URL + "/images/search icon.svg"} alt="search"/>
                        </label>
                    </div>
                    <div className={`absolute z-10 bg-white top-0 left-0 w-full rounded-t-[2rem] rounded-b-xl overflow-hidden
                        pt-16 pb-4 px-6 shadow-lg ${searchConfigsExpanded ? '' : 'hidden'}`}>
                        <h1 className="text-dark-gray font-inter font-regular text-xl mb-4">Filters:</h1>
                        <div className="flex gap-6 items-center mb-4">
                            <h1 className="text-dark-gray font-inter font-regular text-xs md:text-lg">Radius &#40;meter&#41;:</h1>
                            <input type="text" placeholder="3000" value={radiusValue} onChange={(e) => handleRadiusChange(e)}
                            className="focus:outline-0 bg-transparent px-6 py-2 border-2 border-light-gray rounded-[100vw] focus:border-dark-gray
                            text-dark-gray font-inter font-normal text-base leading-none w-full md:w-[15%] text-center
                                placeholder:text-medium-gray placeholder:text-sm placeholder:leading-none placeholder:font-normal
                                    placeholder:font-inter"/>
                        </div>
                        <div className="flex gap-6 items-center mb-4">
                            <h1 className="text-dark-gray font-inter font-regular text-xs md:text-lg">Specific Name:</h1>
                            <input type="text" placeholder="'Arc de Triomphe',  'Louvre Museum',  'Eiffel Tower',  ..." 
                            value={nameValue} onChange={(e) => handleNameChange(e)}
                            className="focus:outline-0 bg-transparent px-6 py-2 border-2 border-light-gray rounded-[100vw] focus:border-dark-gray
                            text-dark-gray font-inter font-normal text-base leading-none w-full md:w-4/5
                                placeholder:text-medium-gray placeholder:text-sm placeholder:leading-none placeholder:font-normal
                                    placeholder:font-inter"/>
                        </div>
                    </div>
                </form>
                <div className="flex -md:flex-col gap-4 -md:mx-auto md:ml-auto">
                    <Link to='/account/sign-in'
                        className="flex gap-3 justify-center items-center py-5 px-4 xl:px-6 rounded-[27px] 
                          [&:hover>h5]:text-orange">
                        <h5 className="text-very-dark-blue font-poppins font-medium text-sm leading-none">Sign In</h5>             
                    </Link>
                    <button className="flex gap-3 justify-center items-center border-2 border-orange py-4 px-6 xl:px-7 rounded-[27px]  
                        hover:bg-orange [&:hover>h5]:text-white [&:hover>svg>path]:fill-white">
                        <h5 className="text-orange font-poppins font-medium text-base leading-none">Sign Up</h5> 
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.45744L4.04598 10.2128L13.4253 2.87235L6.06897 11.1702V15L8.82758 11.9681L13.4253 13.5638L16 0L0 8.45744Z" fill="#F66F4D"/>
                        </svg>                
                    </button>
                </div>
            </div>
        )
};

export default DiscoverHeader;