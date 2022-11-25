import { useQuery } from "@tanstack/react-query";
import getApi from "./getApi";

const apiGetLocation = async (keyword) => {
    return await getApi("geoname", "name=" + keyword).then(res => { console.log(res.data); return res.data})
}

const useGetLocation = (keyword, onSuccess, queryKey = ['location'], enabled = false) => {
    return useQuery(
        queryKey,
        () => apiGetLocation(keyword),
        {
            onSuccess,
            enabled,
            refetchOnWindowFocus: false,
        }
    )
};

export default useGetLocation;