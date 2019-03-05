import React from "react"
import logo from '../logo.svg';

class Title extends React.Component {
    render() {
        return(
            <h1>Weather Reacti<img src={logo} className="App-logo" alt="logo" />n</h1>
        )
    }
}

export default Title