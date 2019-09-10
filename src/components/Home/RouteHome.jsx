import React from "react";
import SplashScreen from "./SplashScreen/SplashScreen";

class RouteHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {splashScreen: true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                splashScreen: false
            })
        }, 3000)
    }

    render() {
        return(
            (this.state.splashScreen &&
                <SplashScreen/>
            )
        );
    }
}

export default RouteHome;