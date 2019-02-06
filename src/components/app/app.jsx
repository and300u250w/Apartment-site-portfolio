import React, { Component, Fragment } from 'react';
import Header from '../header';
import MainCarousel from '../main-carousel';
import ImageAvatars from '../reviews';
import Reviews from '../reviews/testimony';
import CardView from '../card-view';
import AirbnbAPI from '../../service/airbnb';
import RoomPage from '../room-page';
import GoogleApiWrapper from '../map/map';
import Partners from '../partners';
import RODO from '../rodo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



export default class App extends Component {


    state = { AirbnbAPI }


    language = navigator.language;



    render() {

        return (
            <Router>
                {/* <Fragment>
                    <Header
                        pastReviews={<Reviews reviewData={this.state} />}
                        partners={<Partners />}
                        rodo={<Route path='/rodo' component={RODO} />}
                    >
                    </Header>
                    <Route path='/krk' component={RoomPage} />
                </Fragment> */}

                <RoomPage />

            </Router>

        )





    }
}

