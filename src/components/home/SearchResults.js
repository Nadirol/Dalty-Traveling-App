import { ResultCard } from "../cards"; 

const SearchResults = ({ locationTitle, resultsCount, searchResults, hasNextPage, fetchNextPage, resultSection }) => {
    return (
        <>
            <div className="text-center xl:text-start mb-6">
                <h1 className="font-inter font-semibold text-[1.5rem] md:text-[3rem] leading-none">
                    {locationTitle}
                </h1>
            </div>

            <div>
                <h3 className="font-inter font-normal text-base md:text-2xl leading-none text-start">Found {resultsCount} Results:</h3>
                <div className="grid gap-4 auto-cols-fr md:grid-cols-3
                            pt-9 pb-[50px]">
                    {searchResults.map(result => (
                    <ResultCard
                        key={result.xid}
                        xid={result.xid}
                        name={result.name}
                        kinds={result.kinds}
                    />
                    ))}
                </div>
                {hasNextPage && 
                    <div className="w-full text-center">
                        <button className="text-orange font-inter font-normal text-base md:text-xl leading-none mx-auto 
                        border-2 border-orange py-3 px-6 rounded-[27px] hover:bg-orange hover:text-white" onClick={() => fetchNextPage()}>
                        View More
                        </button>
                    </div>
                }
            </div>
        </>
    )
}

export default SearchResults;