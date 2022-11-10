const Header = () => {
    return (
        <header className="flex justify-between items-center py-6 w-container mx-auto ">
            <img src={process.env.PUBLIC_URL + "/images/Logo.svg"} alt="brand logo" />
            <div className="hidden xl:flex items-center w-full">
                <ul className="flex gap-9 ml-[4.5rem]">
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-lightyellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        Home
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-lightyellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        About Us
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-lightyellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        Destinations
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-lightyellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        Tours
                    </li>
                    <li className="cursor-pointer font-poppins font-normal text-base leading-none 
                    decoration-lightyellow decoration-2 underline-offset-[6px] hover:underline hover:decoration-orange
                        transition-textdecoration duration-300">
                        Blogs
                    </li>
                </ul>
                <button className="flex gap-[6px] items-center border-[2px] border-orange py-5 px-9 rounded-[27px] ml-auto">
                    <h5 className="text-orange font-poppins font-medium text-base leading-none">Book Now</h5> 
                    <img src={process.env.PUBLIC_URL + "/images/paper plane.svg"} alt="paper plane" />
                </button>
            </div>
        </header>
    )
}

export default Header;