import React, { Fragment, Component } from 'react';

export default class Partners extends Component {
    render() {


        return (
            <Fragment>


                <img src={require("../image/accenture.png")} alt="Accenture" style={{ width: "20%" }} />
                <img src={require("../image/google.png")} alt="Accenture" style={{ width: "20%" }} />
            </Fragment>
        )
    }
}