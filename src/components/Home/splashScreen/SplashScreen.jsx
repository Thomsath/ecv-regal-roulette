import React from "react";
import './SplashScreen.css';

class SplashScreen extends React.Component {

    componentWillUnmount() {
        console.log('hello');
    }

    render() {
        return (
            <div className={'splash-screen'}>
                <p>Loading</p>
            </div>
        );
    }
}

export default SplashScreen;