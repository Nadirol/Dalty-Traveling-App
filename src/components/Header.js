const Header = () => {
    return (
        <header className="flex justify-between items-center py-6 w-container mx-auto">
            <img src={process.env.PUBLIC_URL + "/images/Logo.svg"} alt="brand logo"/>
            <div className="hidden xl:flex items-center w-full">
                <ul className="flex gap-9 ml-[4.5rem]">
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-light-yellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        Home
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-light-yellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-100">
                        About Us
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-light-yellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        Destinations
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-light-yellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        Tours
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-light-yellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        Blogs
                    </li>
                </ul>
                <button className="flex gap-[6px] items-center border-[2px] border-orange py-5 px-9 rounded-[27px] ml-auto 
                    hover:bg-orange [&:hover>h5]:text-white [&:hover>svg>path]:fill-white">
                    <h5 className="text-orange font-poppins font-medium text-base leading-none">Book Now</h5> 
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8.45744L4.04598 10.2128L13.4253 2.87235L6.06897 11.1702V15L8.82758 11.9681L13.4253 13.5638L16 0L0 8.45744Z" fill="#F66F4D"/>
                    </svg>                
                </button>
            </div>
        </header>
    )
}

export default Header;