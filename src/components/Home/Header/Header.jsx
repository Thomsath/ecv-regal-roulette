import React from "react";
import './Header.css';
import wheel from '../../../assets/img/wheel.svg';

class Header extends React.Component {
    render() {
        return (

            <header>
                <div className={'baseline-container'}>
                    <span className={'baseline-regal'}>Régal'</span><span className={'baseline-roulette'}>roulette</span>
                </div>
                <div className={'wheel-container'}>
                    <img src={wheel} alt={"wheel-icon"} className={'wheel-icon'}/>
                </div>
            </header>
        );
    }
}

export default Header;
