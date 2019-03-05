import React from "react"

class Alert extends React.Component {
    render() {
        return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Uuuppss pardon me!</strong> {this.props.alertMsg}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}

export default Alert