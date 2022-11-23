import { useQuery } from "@tanstack/react-query";
import getApi from "./getApi";

const apiGetDestination = async (xid) => {
    return await getApi(`xid/${xid}`).then(res => res.data);
}

const useGetDestination = (xid) => {
    return useQuery(
        ['destination', xid],
        () => apiGetDestination(xid)
    )
}

export default useGetDestination;