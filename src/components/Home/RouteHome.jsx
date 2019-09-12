import React from "react";
import SplashScreen from "./SplashScreen/SplashScreen";
import Header from "./Header/Header";
import {getRestaurants, mapUserCategoriesToFoursquareCategories} from "../../foursquareApi/FoursquareApi";
import {extractRandomItemFromArray} from "../../utils/Array";
import restaurantIcon from '../../assets/img/restaurant.svg'
import timeIcon from '../../assets/img/time.svg'
import checkIcon from '../../assets/img/check.svg'
import moneyIcon from '../../assets/img/money.svg'
import cheetahImg from '../../assets/img/cheetah.svg'
import rabbitImg from '../../assets/img/rabbit.svg'
import turtleImg from '../../assets/img/turtle.svg'
import japaneseImg from '../../assets/img/japanese.svg'
import italianImg from '../../assets/img/italian.svg'
import hotdogImage from '../../assets/img/hotdog.svg'
import brazilianImg from '../../assets/img/brazilian.svg'
import sandwichImg from '../../assets/img/sandwich.svg'
import saladsImg from '../../assets/img/salads.svg'
import soupsImg from '../../assets/img/soups.svg'
import gastronomicImg from '../../assets/img/gastronomic.svg'
import pizzaImg from '../../assets/img/pizza.svg'

class RouteHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splashScreen: true,
            restaurants: [],
            selectedRestaurant: null,
            userCategories: [],
            userTime: null,
            userBudget: null
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                splashScreen: false
            })
        }, 3000)
    }

    apiGetRestaurants = () => {
        getRestaurants(this.state.userCategories, this.state.userTime, this.state.userBudget)
            .then(apiResponse => {
                const restaurants = apiResponse.data.response.venues;
                const randomRestaurant = extractRandomItemFromArray(restaurants);
                this.setState({
                    restaurants: restaurants,
                    selectedRestaurant: randomRestaurant
                })
            })
            .catch(error => {
                console.log(error);
            });
    };

    pushSelectedUserCategoryToCategories = (event) => {
        let selectedCategories = this.state.userCategories;
        const selectedFoursquareCategory = mapUserCategoriesToFoursquareCategories(event.target.value);
        if(event.target.checked){
            if(false === selectedCategories.includes(selectedFoursquareCategory)){
                selectedCategories.push(selectedFoursquareCategory);
            }
        }
        else{
            if(selectedCategories.includes(selectedFoursquareCategory)){
                selectedCategories = selectedCategories.filter((category) => {
                    return category !== selectedFoursquareCategory;
                });
            }
        }
        this.setState({ userCategories: selectedCategories });
    };

    render() {
        const selectedRestaurant = this.state.selectedRestaurant ? this.state.selectedRestaurant.name : '';
        return(
            <>
                <Header/>
                <main>
                    <div className={'home-container'}>
                        <span className={'home-title'}>Bienvenue !</span>
                        <p className={'home-description'}>
                            Réponds à quelques questions afin de trouver le restaurant qui répond à tes besoins.
                        </p>
                    </div>
                    <div className={'yellow-container'}>
                        <div className={'questions-container'}>
                            <h2 className={'question-title'}>
                                <img src={timeIcon} alt=""/>
                                <span>Combien de temps as-tu pour manger ?</span>
                            </h2>
                            <label className={'question-choice small top'}>
                                <img src={cheetahImg} alt=""/>
                                <input type="radio" name="userTime" value="cheetah"
                                       onChange={(event) => this.setState({ userTime: event.target.value })} />
                                <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                            <label className={'question-choice small'}>
                                <img src={rabbitImg} alt=""/>
                                <input type="radio" name="userTime" value="rabbit"
                                       onChange={(event) => this.setState({ userTime: event.target.value })} />
                                <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                            <label className={'question-choice small'}>
                                <img src={turtleImg} alt=""/>
                                <input type="radio" name="userTime" value="turtle"
                                       onChange={(event) => this.setState({ userTime: event.target.value })} />
                                <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                        </div>
                        <div className={'questions-container'}>
                            <h2 className={'question-title'}>
                                <img src={restaurantIcon} alt=""/>
                                <span>Quelles sont tes envies ?</span>
                            </h2>
                            <label className={'question-choice big'}>
                                <img src={japaneseImg} alt=""/>
                                <input type="checkbox" name="userCategories" value="italian"
                                       onChange={(event) => this.pushSelectedUserCategoryToCategories(event)} />                        <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                            <label className={'question-choice big'}>
                                <img src={hotdogImage} alt=""/>
                                <input type="checkbox" name="userCategories" value="italian"
                                       onChange={(event) => this.pushSelectedUserCategoryToCategories(event)} />
                                <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                            <label className={'question-choice big'}>
                                <img src={italianImg} alt=""/>
                                <input type="checkbox" name="userCategories" value="italian"
                                       onChange={(event) => this.pushSelectedUserCategoryToCategories(event)} />
                                <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                            <label className={'question-choice big'}>
                                <img src={brazilianImg} alt=""/>
                                <input type="checkbox" name="userCategories" value="italian"
                                       onChange={(event) => this.pushSelectedUserCategoryToCategories(event)} />
                                <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                            <label className={'question-choice big'}>
                                <img src={gastronomicImg} alt=""/>
                                <input type="checkbox" name="userCategories" value="italian"
                                       onChange={(event) => this.pushSelectedUserCategoryToCategories(event)} />
                                <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                            <label className={'question-choice big'}>
                                <img src={pizzaImg} alt=""/>
                                <input type="checkbox" name="userCategories" value="italian"
                                       onChange={(event) => this.pushSelectedUserCategoryToCategories(event)} />
                                <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                            <label className={'question-choice big'}>
                                <img src={saladsImg} alt=""/>
                                <input type="checkbox" name="userCategories" value="italian"
                                       onChange={(event) => this.pushSelectedUserCategoryToCategories(event)} />
                                <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                            <label className={'question-choice big'}>
                                <img src={sandwichImg} alt=""/>
                                <input type="checkbox" name="userCategories" value="italian"
                                       onChange={(event) => this.pushSelectedUserCategoryToCategories(event)} />
                                <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                            <label className={'question-choice big'}>
                                <img src={soupsImg} alt=""/>
                                <input type="checkbox" name="userCategories" value="italian"
                                       onChange={(event) => this.pushSelectedUserCategoryToCategories(event)} />
                                <span className={'question-select-effect'}>
                            <img src={checkIcon} alt=""/>
                        </span>
                            </label>
                        </div>
                        <div>
                            <button className={'button'} onClick={() => this.apiGetRestaurants()}>GO !</button>
                            <h1>{selectedRestaurant}</h1>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default RouteHome;