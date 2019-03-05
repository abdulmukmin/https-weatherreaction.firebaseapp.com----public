import React from 'react';
import Card from '../components/card';
import Alert from "../components/alert";
import { connect } from "react-redux";
import { clickDetail } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
    return {
        clickDetail: () => dispatch(clickDetail(true)),
    }

}

const mapStateToProps = (state) => {
    return {
        weatherArr: state.detailWeather
    }
}

class SearchCity extends React.Component {
    state = {
        newCity:'',
        
    }

    handleChange = name => e => {
        this.setState({
            [name]: e.target.value
            
        })
    }

    getCity = () => {
        if (this.state.newCity){
            this.props.getDetailWeather(this.state.newCity)
            this.setState({
                newCity: ""
                
            })
        }
    }

    showAlert = (condition) => {
        if (condition) {
            return <Alert alertMsg={this.props.weatherArr.errMsg} />
        }
    }

    render(){
        let allWeatherArr = this.props.weatherArr.weatherArr
        return (
            <div>
                {
                    this.showAlert(this.props.weatherArr.isError)
                }
                {
                    this.props.weatherArr.isLoading ? <div><h3>Loading...</h3> <img src="https://i.gifer.com/WsSM.gif" alt="loadingImg"/> </div>:
                    allWeatherArr.length > 0 ?
                    <div>
                        <h2>Today Forecast</h2>
                        <div className="d-flex justify-content-center">
                            {allWeatherArr.map((weather, index) =>
                                <Card
                                    key={index}
                                    page="searchCity"
                                    imgSrc={weather.weatherArr[0].weather_state_name}
                                    weatherName={weather.weatherArr[0].weather_state_name}
                                    applicableDate={weather.weatherArr[0].applicable_date}
                                    cityName={weather.city}
                                    btnName="Detail"
                                    btnDetailVenue="Venue"
                                    clickDetail={this.props.clickDetail}
                                />
                            )}
                        </div>
                    </div> :
                    <h3>Please add new city for new prediction</h3>
                }
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity)