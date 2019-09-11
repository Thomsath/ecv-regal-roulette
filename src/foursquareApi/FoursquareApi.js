import axios from "axios";
import moment from "moment";
import {getUserGeolocation} from "../utils/Geolocation";

//Define base url parameters
const CLIENT_ID = "K0XW445NXAAPEBF4JDKTW5OTLWNVYURIHP14C4D030QSCWGG";
const CLIENT_SECRET = "OGUDXWE5BYVVP1QZGGJMLEJ0MR2HXUL0MDGF3AJ4SIMD5EHI";
const VERSION_DATE = moment.format("YYYYMMDD");
const LIMIT = 10;
const SECTION = "food";
const LL = getUserGeolocation();

const instanceFoursquare = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/"
    + "https://api.foursquare.com/v2/"
});

const immutableUrlParameters = "&client_id=" + CLIENT_ID
    + "&client_secret=" + CLIENT_SECRET
    + "&v=" + VERSION_DATE
    + "&limit=" + LIMIT
    + "&section=" + SECTION
    + "&ll=" + LL.latitude + "," + LL.longitude;

export const results = customUrlParameters => {
    instanceFoursquare.get("/venues/explore/" + immutableUrlParameters + customUrlParameters);
};