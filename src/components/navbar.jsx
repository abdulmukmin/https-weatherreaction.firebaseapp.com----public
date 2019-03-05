import React from "react"
import Title from "./title"
import Input from "../components/input"
import { connect } from "react-redux";
import getDetailWeather from "../actions/getDetailWeather"

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailWeather: (city) => dispatch(getDetailWeather(city))
    }

}

class NavBar extends React.Component {
    state = {
        newCity:'',
        
    }

    handleChange = name => e => {
        this.setState({
            [name]: e.target.value
            
        })
    }

    getCity = () => {
        console.log(`masuk get city`)
        if (this.state.newCity){
            this.props.getDetailWeather(this.state.newCity)
            this.setState({
                newCity: ""
                
            })
        }
    }


    render(){
        return(
            <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <Title />
                <Input
                    clickDetail={() => this.clickDetail()}
                    value={this.state.newCity}
                    getCity={this.getCity}
                    name="test"
                    handleChange={this.handleChange("newCity")}
                />
            </nav>
        )
    }
}

export default connect(null, mapDispatchToProps)(NavBar)