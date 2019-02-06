import React, { Component, Fragment } from 'react';
import './room-page.css';
import Galery from './galery';
import Ameneties from './ameneties';
import Description from './description';
import Calendar from './calendar';


export default class RoomPage extends Component {


    state = {
        WRO: "./images/WRO/5. Sofa.jpg"
    }
    render() {

        const { WRO } = this.state;

        return (
            <Fragment>
                <Ameneties />
                <Description />
                <Calendar />
                <Galery />



            </Fragment>




        )
    }
}
