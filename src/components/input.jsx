import React from 'react'

const inputStyle = {
    width: "20rem",

}

class Input extends React.Component {
    render(){
        return (
            <div className="d-flex justify-content-center">
                <div className="input-group mb-3" style={inputStyle}>
                    <input onChange={this.props.handleChange} value={this.props.value} type="text" className="form-control" placeholder="Insert City" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button onClick={this.props.getCity} className="btn btn-outline-secondary" type="button" id="button-addon2">Add City</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Input;