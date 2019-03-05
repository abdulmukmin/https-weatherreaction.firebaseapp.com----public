import React from "react"

class ButtonGroup extends React.Component {
    render() {
        console.log(`button group nih`)
        console.log(this.props)
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick={this.props.showTemperature} className="btn btn-secondary">Temperature</button>
                <button type="button" onClick={this.props.showAirPressure} className="btn btn-secondary">Air Pressure</button>
                <button type="button" onClick={this.props.showWindSpeed} className="btn btn-secondary">Wind Speed</button>
            </div>
        )
    }
}

export default ButtonGroup;