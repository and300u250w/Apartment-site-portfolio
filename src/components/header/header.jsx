import React, { Component, Fragment } from 'react';
import MainCarousel from '../main-carousel';
import CardView from '../card-view';

import { Link } from "react-router-dom";



export default class Header extends Component {

    render() {
        return (

            <Fragment>
                <nav id="navbar-example2" className="navbar navbar-light fixed-top" style={{ backgroundColor: "rgb(0,0,0,.7)" }}>
                    <a className="navbar-brand" href="#" style={{ color: "white" }}>Welcome Home</a>
                    <ul className="nav nav-pills">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Apartments</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#krk">Krakow</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#wro">Wroclaw</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reviews">Guest Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#partners">Our Partners</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                    <MainCarousel />
                    <CardView id="apartments" />

                    <h4 id="reviews">Guest Reviews</h4>
                    {this.props.pastReviews}
                    <h4 id="partners">Our Partners</h4>
                    {this.props.partners}

                    <h4 id="contact">Contact</h4>
                    <p>...</p>
                </div>

                {/* <!-- Footer --> */}
                <footer class="page-footer font-small cyan darken-3">

                    <div class="container">

                        <div class="row">

                            {/* <!-- Grid column --> */}
                            <div class="col-md-12 py-5">
                                <div class="mb-5 flex-center">

                                    {/* <!-- Facebook --> */}
                                    <a class="fb-ic" href="https://www.facebook.com/andrii.osipov">
                                        <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    {/* <!-- Twitter --> */}
                                    <a class="tw-ic" href="https://twitter.com/and300u250w">
                                        <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>

                                    {/* <!--Linkedin --> */}
                                    <a className="li-ic" href="https://www.linkedin.com/in/andrii-osipov/">
                                        <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    {/* <!--Instagram--> */}
                                    <a class="ins-ic" href="https://www.instagram.com/andrii_runs/">
                                        <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Grid column --> */}

                        </div>
                        {/* <!-- Grid row--> */}

                    </div>
                    {/* <!-- Footer Elements --> */}

                    {/* <!-- Copyright --> */}
                    <div class="footer-copyright text-center py-3">© 2019 All rights are reserved.
                    <Link to="rodo" >Privacy Policy </Link>

                    </div>
                    {/* <!-- Copyright --> */}
                </footer>

            </Fragment>


        )
    }
}






