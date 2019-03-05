import React from "react"
import {Link} from "react-router-dom"
import Button from "./button"
import Axios from "axios";
import { forsquareAPIID, forsquareAPISecret} from "../lovelySecret.js"

const cardStyle = {
    width: "10rem",
    ml: "2px",
    mr: "2px"
};

class Card extends React.Component {
    
    venueImage = (venueId, cb) => {
        if (this.props.page === "detailVenue") {
            Axios.get(
                `https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v2/venues/${venueId}/photos?client_id=${forsquareAPIID}&client_secret=${forsquareAPISecret}&v=20181212`,
                {headers: {'Access-Control-Allow-Origin' : '*'}} 
                )
                .then( response => {
                    if (response.data.response.photos.items.length > 0) {
                        console.log(`masuk get image venue id`)
                        console.log(response.data.response.photos.items[0])
                    let prefix = response.data.response.photos.items[0].prefix
                    let suffix = response.data.response.photos.items[0].suffix

                    cb (`${prefix}300x500${suffix}`)
                } else {
                    cb (null)
                }
            })
            .catch( error => {
                console.log(error)
            })
        }
    }

    weatherName = ( weatherName ) => {
        if (weatherName === "Snow" ){
            return "https://www.metaweather.com/static/img/weather/sn.svg"
        }
        else if (weatherName === "Sleet" ){
            return "https://www.metaweather.com/static/img/weather/sl.svg"
        }
        else if (weatherName === "Hail" ){
            return "https://www.metaweather.com/static/img/weather/h.svg"
        }
        else if (weatherName === "Thunder" ){
            return "https://www.metaweather.com/static/img/weather/t.svg"
        }
        else if (weatherName === "Heavy Rain" ){
            return "https://www.metaweather.com/static/img/weather/hr.svg"
        }
        else if (weatherName === "Light Rain" ){
            return "https://www.metaweather.com/static/img/weather/lr.svg"
        }
        else if (weatherName === "Showers" ){
            return "https://www.metaweather.com/static/img/weather/s.svg"
        }
        else if (weatherName === "Heavy Cloud" ){
            return "https://www.metaweather.com/static/img/weather/hc.svg"
        }
        else if (weatherName === "Light Cloud" ){
            return "https://www.metaweather.com/static/img/weather/lc.svg"
        }
        else if (weatherName === "Clear" ){
            return "https://www.metaweather.com/static/img/weather/c.svg"
        }
    }

    checkPage = (type) => {
        if(type === "detail"){
            return (
                <div>
                    <p className="card-text">Forecast for {this.props.applicableDate}</p>
                    <img src={this.weatherName(this.props.imgSrc)} className="card-img-top" alt="weahter_image" />
                </div>
            )

        } else if(type === "searchCity") {
            return (<img src={this.weatherName(this.props.imgSrc)} className="card-img-top" alt="weahter_image" />)
        } else if(type === "detailVenue") {
            return (<p className="card-text">Visit to</p>)
        }
    }

    buttonConditional = (type) => {
        if(type === "searchCity"){
            return (
                <div>
                    <Link to={`/detail/${this.props.cityName}` } >
                        <Button 
                            btnName={this.props.btnName}
                            clickDetail={this.props.clickDetail}
                        />
                    </Link>
                    <Link to={`/detailVenue/${this.props.cityName}` } >
                        <Button 
                            btnName={this.props.btnDetailVenue}
                            clickDetail={this.props.clickDetail}
                        />
                    </Link>
                </div>
            )
        } 
    }

    detailConditional = (type) => {
        if(type === "detail"){
            if(this.props.detail.isTemperature){
                return (
                    <div>
                        <p>min temp: {this.props.min_temp.toFixed(2)}</p>
                        <p>max temp: {this.props.max_temp.toFixed(2)}</p>
                    </div>
                )
            } else if(this.props.detail.isAirPressure){
                return (
                    <div>
                        <p>air pressure: {this.props.air_pressure}</p>
                    </div>
                )
            } else if(this.props.detail.isWindSpeed){
                return (
                    <div>
                        <p>wind speed: {this.props.wind_speed}</p>
                    </div>
                )
            }
        } 
    }

    render() {
        return (
            <div className="card ml-2 mr-2 mt-2 mb-2" style={cardStyle} >
                {console.log(`looping card`)}
                {this.venueImage(this.props.venueId, (img)=>{
                   if(img){
                        return <img src={String(img)} class="card-img-top" alt="image" />
                   } else {
                       console.log(
                           `image not found`
                       )
                       return null
                   }
                })}
                {this.checkPage(this.props.page)}
                <div className="card-body">
                    <h5 className="card-text">{this.props.weatherName}</h5>
                    <p>{this.props.cityName}</p>
                    {this.detailConditional(this.props.page)}
                </div>
                    {this.buttonConditional(this.props.page)}
            </div>
        )
    }
}

export default Card;