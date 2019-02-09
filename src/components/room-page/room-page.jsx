import React, { Component, Fragment } from 'react';
import './room-page.css';
import Galery from './galery';
import Ameneties from './ameneties';
import Description from './description';
import Calendar from './calendar';
import GoogleApiWrapper from '../map/map';


export default class RoomPage extends Component {


    render() {

        const city = this.props.match.path.split("/")[1];
       
        
        
        
        return (
            <Fragment >
                <div id={city}>
                <Ameneties />
                <Description city = {city}/>
                {/* <Calendar /> */}
                <Galery />
                <GoogleApiWrapper city = {city}/>
                </div>

            </Fragment>




        )
    }
}
