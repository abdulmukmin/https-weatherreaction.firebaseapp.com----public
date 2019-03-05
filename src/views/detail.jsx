import React from "react"
import Card from "../components/card"
import Button from "../components/button"
import {Link} from "react-router-dom"
import { connect } from "react-redux"
import ButtonGroup from "../components/buttonGroup"

const mapStateToProps = (state) => {
    return {
        weatherArr: state.detailWeather
    }
}

class Detail extends React.PureComponent {
    state = {
        isTemperature: true,
        isAirPressure: false,
        isWindSpeed: false
    }

    showTemperature = () => {
        console.log(`masuk show temperature`)
        this.setState ({
            isTemperature: true,
            isAirPressure: false,
            isWindSpeed: false
        })
    }

    showAirPressure = () => {
        this.setState ({
            isTemperature: false,
            isAirPressure: true,
            isWindSpeed: false
        })
    }

    showWindSpeed = () => {
        this.setState ({
            isTemperature: false,
            isAirPressure: false,
            isWindSpeed: true
        })
    }

    render() {
        let allWeatherArr = this.props.weatherArr.weatherArr
        let detailWeatherArr = []
        for ( let i = 0; i < allWeatherArr.length; i++){
            if (allWeatherArr[i].city === this.props.match.params.city){
                detailWeatherArr = allWeatherArr[i].weatherArr
                break 
            }
        }
        return (
            <div>
                <h3>Weather for {this.props.match.params.city} city</h3>
                <ButtonGroup 
                            showTemperature={this.showTemperature}
                            showAirPressure={this.showAirPressure}
                            showWindSpeed={this.showWindSpeed}
                />
                {console.log(this.state)}
                {<div className="d-flex justify-content-center">
                    {detailWeatherArr.map((weather, index) =>
                        <Card
                            key={index}
                            page="detail"
                            imgSrc={weather.weather_state_name}
                            weatherName={weather.weather_state_name}
                            applicableDate={weather.applicable_date}
                            min_temp={weather.min_temp}
                            max_temp={weather.max_temp}
                            wind_speed={weather.wind_speed}
                            air_pressure={weather.air_pressure}
                            detail={this.state}
                        />
                    )} 
                </div>}
                <Link to="/">
                    <Button 
                        btnName="Back"
                    />
                </Link>
            </div>
        )
    }
}

export default connect (mapStateToProps, null)(Detail);