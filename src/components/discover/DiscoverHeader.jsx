
import { GrClose } from "react-icons/gr"
import { BsFilterLeft, BsSun, BsFillMoonFill } from "react-icons/bs"
import { RiAccountCircleFill } from "react-icons/ri"
import { useState } from "react";
import { Link } from 'react-router-dom';

import { UserAuth } from "../../context/AuthContext";

const DiscoverHeader = ({ handleSearchSubmit, searchValue, handleSearchChange, clearSearchValue, 
    radiusValue, handleRadiusChange,
    nameValue, handleNameChange, theme, toggleTheme }) => {
        const [searchConfigsExpanded, setSearchConfigsExpanded] = useState(false);
        const toggleSearchConfigs = () => {
            setSearchConfigsExpanded(prevState => !prevState)
        }
        
        const [ navMenuOpen, setNavMenuOpen ] = useState(false);

        const openNavMenu = () => {
            setNavMenuOpen(state => !state)
        }
    
        const closeNavMenu = () => {
            setNavMenuOpen(state => !state)
        }

        
        const { user, logOut } = UserAuth();

        const handleGoogleLogOut = async () => {
            try {
                await logOut()
            }
            catch(error) {
                console.log(error)
            }
        };

        return (
            <div className="w-full mx-auto mb-8 flex -md:flex-col -md:gap-8 items-center justify-between p-4">
                <Link to='/home'>
                    <img src={`/images/${theme === 'light' ? 'Logo' : 'Logo yellow'}.svg`} alt="brand logo"/>
                </Link>
                { navMenuOpen ? 
                    <GrClose className='md:hidden fixed right-8 top-6 cursor-pointer z-50'
                    style={{ width: 35, height: 35 }} onClick={closeNavMenu}/>
                    :
                    <RiAccountCircleFill className='md:hidden fixed right-8 top-6 cursor-pointer z-50 bg-light-yellow rounded-[50%]'
                    style={{ width: 35, height: 35 }} onClick={openNavMenu}/>
                }
                <form onSubmit={(e) => handleSearchSubmit(e)}
                    className="bg-white dark:bg-semi-black px-4 md:px-7 py-2 rounded-[100vw] xl:w-discover-search-form mx-auto 
                        relative">
                    <div className="relative z-30 flex items-center">
                        <div className="text-regular-gray dark:text-regular-yellow text-xl pr-2 rounded-[50%] 
                            hover:text-orange dark:hover:text-orange" 
                            onClick={toggleSearchConfigs}>
                            <BsFilterLeft/>
                        </div>
                        <input type="text" placeholder="Street name, or City like 'Paris'" value={searchValue} onChange={(e) => handleSearchChange(e)}
                            className="w-full text-dark-gray dark:text-regular-yellow font-inter font-normal text-base leading-none 
                                focus:outline-0 placeholder-discover-search"/>
                        <input type="submit" name="" id="submit-button" className="hidden"/>
                        <div className={`hover:bg-light-gray dark:hover:bg-black
                            rounded-[50%] p-3 ${searchValue ? 'block' : 'hidden'}`}
                            onClick={clearSearchValue}>
                            <GrClose style={{ width: 22, height: 22 }}/>
                        </div>
                        <label
                            htmlFor="submit-button"
                            className="cursor-pointer mx-auto ml-2 md:ml-6"
                        >
                            <img src={"/images/search icon.svg"} alt="search"/>
                        </label>
                    </div>
                    <div className={`absolute z-10 bg-white dark:bg-semi-black top-0 left-0 w-full rounded-t-[2rem] rounded-b-xl overflow-hidden
                        pt-16 pb-4 px-6 shadow-lg ${searchConfigsExpanded ? '' : 'hidden'}`}>
                        <div className="flex gap-6 items-center mb-4">
                            <h1 className="text-dark-gray dark:text-regular-yellow font-inter font-regular text-xs md:text-lg">
                                Radius &#40;meter&#41;:
                            </h1>
                            <input type="text" value={radiusValue} onChange={(e) => handleRadiusChange(e)}
                            className="px-6 py-2 border-2 w-full md:min-w-[100px] md:w-[15%] text-center filter-input"/>
                        </div>
                        <div className="flex gap-6 items-center mb-4">
                            <h1 className="text-dark-gray dark:text-regular-yellow font-inter font-regular text-xs md:text-lg">
                                Specific Name:
                            </h1>
                            <input type="text" placeholder="'Arc de Triomphe',  'Louvre Museum',  'Eiffel Tower',  ..." 
                            value={nameValue} onChange={(e) => handleNameChange(e)}
                            className=" px-6 py-2 border-2 w-full md:w-4/5 filter-input"/>
                        </div>
                    </div>
                </form>
                <div className={`${ navMenuOpen ? '-md:fixed' : '-md:hidden'} small-middle z-30 -md:p-9 -md:rounded-xl
                    flex -md:gap-6 -md:flex-col -md:bg-white -md:dark:bg-semi-black`}>
                        <button className='-md:mx-auto outline-0' onClick={toggleTheme}>
                            { theme === 'light' 
                                ? <BsSun style={{ width: 20, height: 20 }}/>
                                : <BsFillMoonFill style={{ width: 20, height: 20 }} className="text-regular-yellow"/>
                            }
                        </button>
                        { user?.displayName
                        ? <button onClick={handleGoogleLogOut}>Sign Out</button>
                        : 
                        <>
                            <Link to='/auth/login'
                                className="login-btn">
                                Login            
                            </Link>
                            <Link to='/auth/sign-up'
                                className="sign-up-btn flex-center-center gap-3 border-2 border-orange py-4 px-6 xl:px-7 rounded-[27px]">
                                <h5 className="text-orange font-poppins font-medium text-base leading-none">Sign Up</h5> 
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8.45744L4.04598 10.2128L13.4253 2.87235L6.06897 11.1702V15L8.82758 11.9681L13.4253 13.5638L16 0L0 8.45744Z" fill="#F66F4D"/>
                                </svg>                
                            </Link>
                        </>
                        }
                </div>
            </div>
        )
};

export default DiscoverHeader;