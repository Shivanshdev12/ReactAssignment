import React, { Component } from 'react';

class ValidationComponent extends Component {
    render() {

        let alertMsg;
        if (this.props.Textlength <= 5) {
            alertMsg = (
                <div>
                    <p>Length:{this.props.Textlength}</p>
                    <p>Must be greater than 5</p>
                </div>
            );
        }
        else {
            alertMsg = (
                <div>
                    <p>Length:{this.props.Textlength}</p>
                    <p>Text Long Enough</p>
                </div>
            );
        }

        return (
            <div>
                {alertMsg}
                <br />
            </div>
        );
    }
}

export default ValidationComponent;