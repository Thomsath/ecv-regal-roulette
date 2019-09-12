import React from "react";
import './Content.css';

class Content extends React.Component {
    render() {
        return (
            <main>

                <span className={'home-title'}>Bienvenue !</span>

                <p className={'home-description'}>
                    Réponds à quelques questions afin de trouver le restaurant qui répond à tes besoins.
                </p>

            </main>);
    }
}

export default Content;
