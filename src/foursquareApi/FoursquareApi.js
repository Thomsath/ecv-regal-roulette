import axios from "axios";
import moment from "moment";
import {getCurrentGeolocation} from "../utils/Geolocation";

//Define base url parameters
const CLIENT_ID = "B5SR0HFQ5OKP0FC2OVTUASE0XWRRGT5XP5O3XBPWG4SYMXJR";
const CLIENT_SECRET = "SX3QLJ5TRWJCNCKYR04MXOCJHZQJ001GSNO2AYD2CZT3I4QC";
const VERSION_DATE = moment().format("YYYYMMDD");
const LIMIT = 50;
const INTENT = "browse";
const RADIUS = 5000; //5000 meters
const CATEGORY = "4d4b7105d754a06374d81259"; //Food

const instanceFoursquare = axios.create({
    baseURL: "https://api.foursquare.com/v2/venues/"
});

export const getRestaurants = async (selectedCategories = null, availableTime = null, budget = null) => {
    let categories = selectedCategories ? selectedCategories.join(',') : CATEGORY;
    let radius = availableTime ? determineMaxDistanceAccordingToUserTime(availableTime) : RADIUS;
    const currentGeolocation = await getCurrentGeolocation();
    const urlParameters = "client_id=" + CLIENT_ID
        + "&client_secret=" + CLIENT_SECRET
        + "&v=" + VERSION_DATE
        + "&ll=" + currentGeolocation.coords.latitude + "," + currentGeolocation.coords.longitude
        + "&intent=" + INTENT
        + "&radius=" + radius
        + "&limit=" + LIMIT
        + "&categoryId=" + categories;
    return instanceFoursquare.get("search?" + urlParameters);
};

const determineMaxDistanceAccordingToUserTime = (userTime) => {
    let radius = 5000;
    switch (userTime) {
        case 'cheetah':
            radius = 500;
            break;
        case 'rabbit':
            radius = 2000;
            break;
        case 'turtle':
            radius = 10000;
            break;
        default:
            radius = 5000;
    }
    return radius;
};


// TODO : we are blocked cause of requests limit
export const getRestaurant = async (restaurantId, priceLevel) => {
    priceLevel = priceLevel.join(',');
    const urlParameters = "client_id=" + CLIENT_ID
        + "&client_secret=" + CLIENT_SECRET
        + "&v=" + VERSION_DATE
        + "&price=" + priceLevel;
    return instanceFoursquare.get( restaurantId + "?" + urlParameters);
};