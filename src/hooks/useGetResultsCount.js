import { useQuery } from "@tanstack/react-query";
import getApi from "./getApi";

const useGetResultsCount = (lon, lat, onSuccess) => {
    const apiGetResultsCount = async () => {
        return await 
        getApi(
            "radius",
            `radius=1000&limit=6&offset=0&lon=${lon}&lat=${lat}&rate=2&format=count`
        ).then(res => res.data)
    }

    return useQuery(
        ['resultsCount', lon],
        apiGetResultsCount,
        {
            enabled: !!lon && !!lat,
            refetchOnWindowFocus: false,
            select: data => data.count,
            onSuccess,
        }
    )
};

export default useGetResultsCount;