import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Details = () => {
    const { id: destinationId } = useParams();

    const apiKey = "5ae2e3f221c38a28845f05b6cdf805e810c7cdbb7f23f88fd8740ad9";
    const apiGet = (method, query) => {
        return axios.get(
        "https://api.opentripmap.com/0.1/en/places/" +
            method +
            "?apikey=" +
            apiKey +
            (query ? "&" + query : '')
        );
    };

    const [destinationData, setDestinationData] = useState('')

    useEffect(() => {
        apiGet(`xid/${destinationId}`).then(res => setDestinationData(res.data))
    },[])

    return (
    <div className="">
        <img src={destinationData.preview ? destinationData.preview?.source : process.env.PUBLIC_URL + "/images/Logo.svg"} alt="" />
        <h1>{destinationData.name}</h1>
        <h2>{destinationData.kinds}</h2>
    </div>
)}

export default Details;