import { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import { BsSun, BsFillMoonFill } from "react-icons/bs"

const Header = ({ theme, toggleTheme }) => {
    const [ navMenuOpen, setNavMenuOpen ] = useState(false);

    const openNavMenu = () => {
        setNavMenuOpen(state => !state)
    }

    const closeNavMenu = () => {
        setNavMenuOpen(state => !state)
    }

    return (
        <header className={`py-6 w-container mx-auto flex-between-center dark-overlay-screen ${ navMenuOpen ? '-md:after:fixed' : '-md:after:hidden'}`}>
            { navMenuOpen ? 
                <GrClose className='md:hidden fixed right-8 top-6 cursor-pointer z-30'
                style={{ width: 35, height: 35 }} onClick={closeNavMenu}/>
                :
                <FiMenu className='md:hidden fixed right-8 top-6 cursor-pointer z-30'
                style={{ width: 35, height: 35 }} onClick={openNavMenu}/>
            }
            <Link to='/home'>
                <img src={`/images/${theme === 'light' ? 'Logo' : 'Logo yellow'}.svg`} alt="brand logo" className='focus:outline-0'/>
            </Link>
            <div className={`${ navMenuOpen ? '-md:fixed' : '-md:hidden'} small-middle   z-30 md:flex items-center w-[75%]
                md:w-full -md:bg-white -md:dark:bg-semi-black md:bg-transparent -md:p-9 -md:rounded-xl `}>
                <ul className="flex flex-col md:flex-row items-center gap-5 xl:gap-9 md:ml-8 xl:ml-[4.5rem] mb-9 md:mb-0">
                    <li className="nav-link">
                        <Link to='/home'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to='/discover'>
                            Discover
                        </Link>
                    </li>
                    <li className="nav-link">
                        Tours
                    </li>
                    <li className="nav-link">
                        About Us
                    </li>
                    <li className="nav-link">
                        Blogs
                    </li>
                </ul>
                <div className="flex items-center -md:flex-col gap-4 -md:mx-auto md:ml-auto">
                    <button className='-md:mx-auto outline-0 p-2 border-2 border-very-dark-gray dark:border-regular-yellow rounded-[50%]' 
                        onClick={toggleTheme}>
                        { theme === 'light' 
                            ? <BsSun style={{ width: 20, height: 20 }}/>
                            : <BsFillMoonFill style={{ width: 20, height: 20 }} className="text-regular-yellow"/>
                        }
                    </button>
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
                </div>
            </div>
        </header>
    )
}

export default Header;