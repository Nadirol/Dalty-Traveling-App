import { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom';

const Header = () => {
    const [ navMenuOpen, setNavMenuOpen ] = useState(false);

    const openNavMenu = () => {
        setNavMenuOpen(state => state = !navMenuOpen)
    }

    const closeNavMenu = () => {
        setNavMenuOpen(state => state = !navMenuOpen)
    }

    return (
        <header className={`flex justify-between items-center py-6 w-container mx-auto
            ${ navMenuOpen ? '-md:after:fixed' : '-md:after:hidden'} md:after:hidden after:w-screen after:h-screen after:bg-filter-dark after:top-0 after:left-0 after:z-[20]`}>
            { navMenuOpen ? 
                <GrClose className='md:hidden fixed right-8 top-6 cursor-pointer z-30'
                style={{ width: 35, height: 35 }} onClick={closeNavMenu}/>
                :
                <FiMenu className='md:hidden fixed right-8 top-6 cursor-pointer z-30'
                style={{ width: 35, height: 35 }} onClick={openNavMenu}/>
            }
            <Link to='/'>
                <img src={process.env.PUBLIC_URL + "/images/Logo.svg"} alt="brand logo"/>
            </Link>
            <div className={`${ navMenuOpen ? '-md:fixed' : '-md:hidden'} -md:bottom-1/2 -md:right-1/2 -md:translate-x-1/2 
                -md:translate-y-1/2 z-30 md:flex items-center w-[75%]
                    md:w-full bg-white md:bg-transparent -md:p-9 -md:rounded-xl`}>
                <ul className="flex flex-col md:flex-row items-center gap-5 xl:gap-9 md:ml-8 xl:ml-[4.5rem] mb-9 md:mb-0">
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-light-yellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-light-yellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-100">
                        <Link to='/discover'>
                            Discover
                        </Link>
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-light-yellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        Tours
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-light-yellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        About Us
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-light-yellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        Blogs
                    </li>
                </ul>
                <div className="flex -md:flex-col gap-4 -md:mx-auto md:ml-auto">
                    <button className="flex gap-3 justify-center items-center border-2 border-orange py-5 px-6 xl:px-9 rounded-[27px]  
                        hover:bg-orange [&:hover>h5]:text-white [&:hover>svg>path]:fill-white">
                        <h5 className="text-orange font-poppins font-medium text-base leading-none">Sign Up</h5> 
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8.45744L4.04598 10.2128L13.4253 2.87235L6.06897 11.1702V15L8.82758 11.9681L13.4253 13.5638L16 0L0 8.45744Z" fill="#F66F4D"/>
                        </svg>                
                    </button>
                    <button className="flex gap-3 justify-center items-center py-5 px-4 xl:px-6 rounded-[27px] 
                          border border-very-dark-blue [&:hover>h5]:text-white hover:bg-very-dark-blue">
                        <h5 className="text-very-dark-blue font-poppins font-medium text-sm leading-none">Sign In</h5>             
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;