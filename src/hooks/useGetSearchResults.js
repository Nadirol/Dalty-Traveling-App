import { useInfiniteQuery } from "@tanstack/react-query";
import getApi from "./getApi";

const useGetSearchResults = (lon, lat, radius, pageLength, queryKey, rating = '2') => {
    const apiGetSearchResults = async ({ pageParam = 0 }) => {
        return await
        getApi(
            "radius",
            `radius=${radius}&limit=${pageLength}&offset=${pageParam}&lon=${lon}&lat=${lat}&rate=${rating}&format=json`
        ).then(res => {
            return res.data
        })
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