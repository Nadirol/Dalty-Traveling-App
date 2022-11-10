const CategoryCard = ({ name, image }) => {
    return (
        <div className="text-center snap-end">
            <div className="mb-[1.125rem] cursor-pointer relative hover:before:block [&>div]:hover:opacity-100
                before:hidden before:absolute before:inset-0 before:bg-filter-dark before:rounded-[85px]
                    ">
                <img src={image} alt="" className="max-w-none"/>
                <div className="absolute inset-0 w-full h-full flex justify-center items-center opacity-0 transition-all duration-200">
                    <h3 className="font-inter font-semibold text-[1.25rem] leading-tight text-white">Visit</h3>
                </div>
            </div>
            <h1 className="font-inter font-medium text-[26px] leading-none">{name}</h1>
        </div>
    )
}

export default CategoryCard;