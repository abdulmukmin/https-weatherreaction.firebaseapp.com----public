import axios from "axios"
import { forsquareAPIID, forsquareAPISecret} from "../lovelySecret.js"

export default function (thisCity) {
    return (dispatch) => {
        dispatch({type: 'GET_DETAIL_LOADING'})
        axios.get( `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${thisCity}`, {
            headers: {'Access-Control-Allow-Origin' : '*'}} )
            .then( response => {
                if (response.data.length !== 0){
                    const detailWeather = axios.get( `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${response.data[0].woeid}/`, {
                        headers: {'Access-Control-Allow-Origin' : '*'}} )
                    const nearestVenue = axios.get( `https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v2/venues/search?ll=${response.data[0].latt_long}&client_id=${forsquareAPIID}&client_secret=${forsquareAPISecret}&v=20190507`, {
                        headers: {'Access-Control-Allow-Origin' : '*'}} )
                    Promise.all([detailWeather, nearestVenue])
                    .then( response => {
                        dispatch({
                            type:'GET_DETAIL_SUCCESS', 
                            payload: {
                                detailWeather: response[0].data.consolidated_weather,
                                detailVenues: response[1].data.response.venues,
                                city: response[0].data.title}, 
                        })
                    })
                    .catch( error => {
                        console.log(error)
                        dispatch({type: 'GET_DETAIL_ERROR', payload: error.message})
                    }) 
                } else {
                    dispatch({type: 'GET_DETAIL_ERROR', payload: 'City Not Found'})
                }
            })
            .catch( error => {
                console.log(error)
                dispatch({type: 'GET_DETAIL_ERROR', payload: error.message})
            })   
    }
}