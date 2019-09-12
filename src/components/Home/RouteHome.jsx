import React from "react";
import SplashScreen from "./SplashScreen/SplashScreen";
import Header from "./Header/Header";
import Content from "./Content/Content";

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
            <>
            <Header/>
            <Content/>
          </>
        );
    }
}

export default RouteHome;
