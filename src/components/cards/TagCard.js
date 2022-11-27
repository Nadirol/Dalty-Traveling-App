const TagCard = ({ name, handleClick, activeTagIndex, id }) => {
    return (
    <h3 className={`tag-btn ${activeTagIndex === id ? 'tag-btn__active' : 'tag-btn__inactive'}`} 
      onClick={handleClick}>
        {name}
    </h3>
)}

export default TagCard;