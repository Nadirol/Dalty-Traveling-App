import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const pbApiKey = "31488120-64bdfca9e4ad103bf79d2f9f6";

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

const apiGetImage = async () => {
    return await axios.get(`https://pixabay.com/api/?key=${pbApiKey}&category=travel&image_type=photo&page=${getRandomInt(10)}&per_page=50`)
    .then(res => res.data.hits)
}

const useGetImages = (queryKey, onSuccess) => {
    return useQuery(
        queryKey,
        apiGetImage,
        {
            onSuccess,
            refetchOnWindowFocus: false,
        }
    )
}

export default useGetImages;