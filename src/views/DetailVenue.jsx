import React from "react"
import Card from "../components/card"
import Button from "../components/button"
import {Link} from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        venueArr: state.detailWeather.venueArr
    }
}

class DetailVenue extends React.PureComponent {
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
        let allVenueArr = this.props.venueArr
        let detailVenueArr = []
        for ( let i = 0; i < allVenueArr.length; i++){
            if (allVenueArr[i].city === this.props.match.params.city){
                detailVenueArr = allVenueArr[i].venueArr
                break 
            }
        }
        console.log(detailVenueArr)
        return (
            <div>
                <h3>Nearest Venue in {this.props.match.params.city} city</h3>
                {<div className="d-flex justify-content-center flex-wrap">
                    {detailVenueArr.map((venue, index) =>
                        <Card
                            key={index}
                            page="detailVenue"
                            
                            // imgSrc={venue.weather_state_name}
                            weatherName={venue.name}
                            venueId={venue.id}
                            // applicableDate={venue.applicable_date}
                            // min_temp={venue.min_temp}
                            // max_temp={venue.max_temp}
                            // wind_speed={venue.wind_speed}
                            // air_pressure={venue.air_pressure}
                            // detail={this.state}
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

export default connect (mapStateToProps, null)(DetailVenue);