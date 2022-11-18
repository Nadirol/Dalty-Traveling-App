const TagCard = ({ name, handleClick, activeTagIndex, id }) => {
    return (
    <h3 className={`hover:text-white font-poppins font-normal text-[14px] leading-none 
        px-5 py-2.5 border border-very-dark-blue hover:bg-very-dark-blue rounded-[30px] cursor-pointer
          ${activeTagIndex === id ? 'bg-very-dark-blue text-white' : 'bg-transparent text-very-dark-blue'}`} onClick={handleClick}>
        {name}
    </h3>
)}

export default TagCard;