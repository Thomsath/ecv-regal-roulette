import React from "react";
import SplashScreen from "./SplashScreen/SplashScreen";
import {getRestaurants} from "../../foursquareApi/FoursquareApi";
import {extractRandomItemFromArray} from "../../utils/Array";

class RouteHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splashScreen: true,
            restaurants: [],
            selectedRestaurant: null,
            selectedCategories: null,
            availableTime: null,
            budget: null
        };
    }

    componentDidMount() {
        this.apiGetRestaurants();
        setTimeout(() => {
            this.setState({
                splashScreen: false
            })
        }, 3000)
    }

    apiGetRestaurants = () => {
        getRestaurants()
            .then(apiResponse => {
                const restaurants = apiResponse.data.response.venues;
                const randomRestaurant = extractRandomItemFromArray(restaurants);
                console.log(randomRestaurant);
                this.setState({
                    restaurants: restaurants,
                    selectedRestaurant: randomRestaurant
                })
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return(
            (this.state.splashScreen &&
                <SplashScreen/>
            )
        );
    }
}

export default RouteHome;