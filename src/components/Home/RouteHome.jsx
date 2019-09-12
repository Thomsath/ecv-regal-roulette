import React from "react";
import SplashScreen from "./SplashScreen/SplashScreen";
import {getRestaurants, mapUserCategoriesToFoursquareCategories} from "../../foursquareApi/FoursquareApi";
import {extractRandomItemFromArray} from "../../utils/Array";
import restaurantIcon from '../../restaurant.svg'
import timeIcon from '../../time.svg'
import checkIcon from '../../check.svg'
import moneyIcon from '../../money.svg'
import cheetahImg from '../../cheetah.svg'
import rabbitImg from '../../rabbit.svg'
import turtleImg from '../../turtle.svg'
import japaneseImg from '../../japanese.svg'
import italianImg from '../../italian.svg'
import hotdogImage from '../../hotdog.svg'
import brazilianImg from '../../brazilian.svg'
import sandwichImg from '../../sandwich.svg'
import saladsImg from '../../salads.svg'
import soupsImg from '../../soups.svg'
import gastronomicImg from '../../gastronomic.svg'
import pizzaImg from '../../pizza.svg'

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
        // this.apiGetRestaurants();
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
            <div className={'yellow'}>
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
                <hr/>
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
                <hr/>
                <div>
                    <p>Quel est ton budget ?</p>
                    <label>
                        Moins de 10€
                        <input type="radio" name="userBudget" value="lessTen"
                               onChange={(event) => this.setState({ userBudget: event.target.value })} />
                    </label>
                    <label>
                        Entre 10€ et 20€
                        <input type="radio" name="userBudget" value="tenTwenty"
                               onChange={(event) => this.setState({ userBudget: event.target.value })} />
                    </label>
                    <label>
                        Entre 20€ et 30€
                        <input type="radio" name="userBudget" value="twentyThirty"
                               onChange={(event) => this.setState({ userBudget: event.target.value })} />
                    </label>
                    <label>
                        Plus de 30€
                        <input type="radio" name="userBudget" value="moreThirty"
                               onChange={(event) => this.setState({ userBudget: event.target.value })} />
                    </label>
                </div>
                <hr/>
                <div>
                    <button onClick={() => this.apiGetRestaurants()}>GO !</button>
                    <h1>{selectedRestaurant}</h1>
                </div>
            </div>
        );
    }
}

export default RouteHome;