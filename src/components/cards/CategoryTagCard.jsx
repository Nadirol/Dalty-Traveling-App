
const CategoryTagCard = ({ name, handleClick, activeFilters }) => {
    return (
    <h3 className={`filter-tag-btn
          ${activeFilters.includes(name.toLowerCase().replaceAll(' ','_')) ? 'filter-tag__active' : 'filter-tag__inactive'} min-w-max`} 
            onClick={handleClick}>
        {name}
    </h3>
)}

export default CategoryTagCard;