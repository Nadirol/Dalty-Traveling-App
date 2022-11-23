import axios from "axios";

const getApi = (method, query) => {
    const apiKey = "5ae2e3f221c38a28845f05b6cdf805e810c7cdbb7f23f88fd8740ad9";
    return axios.get(
        "https://api.opentripmap.com/0.1/en/places/" +
          method +
          "?apikey=" +
          apiKey +
          (query ? "&" + query : '')
    );
}

export default getApi;