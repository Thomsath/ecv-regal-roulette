import React from "react";
import SplashScreen from "./SplashScreen/SplashScreen";
import WheelsList from "./WheelsList/WheelsList";

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
            <div>
                {this.state.splashScreen && <SplashScreen/>}
                <WheelsList/>
            </div>
        );
    }
}

export default RouteHome;