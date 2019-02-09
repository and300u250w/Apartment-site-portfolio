import React, { Component, Fragment } from 'react';
import Header from '../header';
import MainCarousel from '../main-carousel';
import Reviews from '../reviews/review';
import CardView from '../card-view';
import AirbnbAPI from '../../service/airbnb';
import RoomPage from '../room-page';
import GoogleApiWrapper from '../map/map';
import Partners from '../partners';
import RODO from '../rodo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from '../contact';
import Footer from '../footer';
import Why from '../why';



export default class App extends Component {


    state = { AirbnbAPI }


    language = navigator.language;



    render() {

        return (
            <Router>
                <Fragment>
                    <Header/>
                   
                    <MainCarousel/>
                    <Why/>
                    <CardView/> 
                    
                    <Reviews getReview  = {this.state.AirbnbAPI}/>

                    <Footer/>


                
                </Fragment>
            </Router>

        )


    }
}

