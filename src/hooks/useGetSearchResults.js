import { useInfiniteQuery } from "@tanstack/react-query";
import getApi from "./getApi";

const useGetSearchResults = (lon, lat, pageLength, queryKey) => {
    const apiGetSearchResults = async ({ pageParam = 0 }) => {
        return await
        getApi(
            "radius",
            `radius=1000&limit=${pageLength}&offset=${pageParam}&lon=${lon}&lat=${lat}&rate=2&format=json`
        ).then(res => res.data)
    }

    return useInfiniteQuery(
        queryKey,
        apiGetSearchResults,
        {
            enabled: !!lon && !!lat,
            getNextPageParam: (lastPage, pages) => {
                return lastPage.length >= pageLength ? pages.reduce((accumulator, currentValue) => accumulator.concat(currentValue)).length : undefined
            },
            select: (data) => data.pages.reduce((accumulator, currentValue) => accumulator.concat(currentValue)),
            refetchOnWindowFocus: false,
        }
    )
};

export default useGetSearchResults;