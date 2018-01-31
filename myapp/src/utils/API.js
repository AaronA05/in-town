import axios from "axios";

const BASEURL = "https://www.eventbriteapi.com/v3/events/search/?";
const APIKEY = "&token=WYIP6EGD7WSBOXPBEDBA";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    search: function (query) {
        return axios.get(BASEURL + APIKEY);
    }
};