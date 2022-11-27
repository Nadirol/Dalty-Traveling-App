const RightButton = ({ handleClick, padding, status }) => {
    return (
        <div className={`${padding ? padding : 'p-[21px]'} rounded-full border cursor-pointer w-min
            ${status === 'disabled' ? 'prev-next-btn__disabled' : 'prev-next-btn'}`} 
                    onClick={handleClick}>
            <svg width="14" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7 7L1 1" stroke='#2D3134' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default RightButton;