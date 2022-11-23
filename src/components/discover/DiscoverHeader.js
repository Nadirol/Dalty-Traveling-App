
import { GrClose } from "react-icons/gr"

const DiscoverHeader = ({ handleSearchSubmit, searchValue, handleSearchChange, clearSearchValue }) => {
    return (
        <div className="w-container mx-auto">
            <form onSubmit={(e) => handleSearchSubmit(e)}
                className="bg-white flex items-center px-4 md:px-7 py-2 rounded-[100vw] w-discover-search-form mx-auto">
                <input type="text" placeholder="Search for destinations" value={searchValue} onChange={(e) => handleSearchChange(e)}
                    className="w-full text-dark-gray font-inter font-normal text-base leading-none focus:outline-0
                    placeholder:text-mediumgray placeholder:text-sm placeholder:leading-none placeholder:font-normal
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
            </form>
            
        </div>
    )
};

export default DiscoverHeader;