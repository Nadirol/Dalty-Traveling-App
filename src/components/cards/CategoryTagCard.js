
const CategoryTagCard = ({ name, handleClick, activeFilters }) => {
    return (
    <h3 className={`hover:text-white font-poppins font-normal text-[14px] leading-none transition-colors duration-200
        px-5 py-2.5 border border-very-dark-blue hover:bg-dark-gray rounded-[30px] cursor-pointer
          ${activeFilters.includes(name.toLowerCase().replaceAll(' ','_')) ? 'bg-very-dark-blue text-white' : 'bg-transparent text-very-dark-blue'} min-w-max`} onClick={handleClick}>
        {name}
    </h3>
)}

export default CategoryTagCard;