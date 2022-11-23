import { useQuery } from "@tanstack/react-query";
import getApi from "./getApi";

const apiGetLocation = async (keyword) => {
    return await getApi("geoname", "name=" + keyword).then(res => res.data)
}

const useGetLocation = (keyword, onSuccess) => {
    return useQuery(
        ['location'],
        () => apiGetLocation(keyword),
        {
            onSuccess,
            enabled: false,
            refetchOnWindowFocus: false,
        }
    )
};

export default useGetLocation;