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
import {CSSTransition, TransitionGroup} from 'react-transition-group';



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
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition
                            key={location.key}
                            timeout={450}
                            classNames='fade'>
                            <Switch location={location}>
                                <Route path="/krk" component={RoomPage}/>
                                <Route path="/wro" component={RoomPage}/>
                            </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                        
                        
    
                    ) }/>
                    <Reviews getReview  = {this.state.AirbnbAPI}/>

                    <Footer/>
                
                </Fragment>
            </Router>

        )


    }
}

