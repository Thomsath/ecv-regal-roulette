import React from "react";
import './WheelsList.css';

class WheelsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {wheelItems: ['First', 'Second', 'Third']};
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.wheelItems.map((wheel) =>
                        <li>{wheel}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default WheelsList;