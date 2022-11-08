const RightButton = ({ handleClick, padding }) => {
    return (
        <div className={`${padding ? padding : 'p-[21px]'} rounded-full border border-very-dark-blue cursor-pointer
        hover:bg-very-dark-blue [&:hover>*>path]:stroke-[#faf8ed]`} onClick={handleClick}>
            <svg width="14" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7 7L1 1" stroke='#2D3134' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}

export default RightButton;