export const getUserGeolocation = () => {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(getGeolocationCoords);
    }
};

const getGeolocationCoords = position => {
    return {
        "latitude" : position.coords.latitude,
        "longitude" : position.coords.longitude
    }
};