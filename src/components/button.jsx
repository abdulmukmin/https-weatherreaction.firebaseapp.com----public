import React from 'react'

class Button extends React.Component {
    render(){
        return (
            <button 
                type="button" 
                className="btn btn-outline-info ml-2 mr-2 mb-2" 
                onClick={this.props.clickDetail}
            >{this.props.btnName}</button>
        )
    }
}

export default Button