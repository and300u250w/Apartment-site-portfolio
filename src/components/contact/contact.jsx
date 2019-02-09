import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';

import './contact.css';

export default class Contact extends Component {

    render() {
        return (
            <section className="contact">
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h5 className="heading-style-5">Phone:</h5>
                            <div className="contact_details">
                                <i className="icons-marker fa fa-phone" href="tel: +48 783 358 551"></i>
                                <a href="tel: +48 783 358 551">
                                    +48 783 358 551</a>
                            </div>
                            <h5 className="heading-style-5">E-mail:</h5>
                            <div className="contact_details">
                                <i className="icons-marker fa fa-envelope" href="mailto:welcomehome@gmail.com"></i>

                                <a href="mailto:welcomehome@gmail.com">welcomehome@gmail.com</a>

                            </div>
                            <div className="contact_details">
                                <img
                                    src={require("../image/_free-icons_png_512_1298722.png")}
                                    alt="Airbnb"
                                    className="contact_details_airbnb"/>
                                <a href="https://airbnb.ru/rooms/14016936?s=51">Airbnb Page</a>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <h5>If you want to book
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commod.</p>

                            <Col>
                                <form action="mailto:andrii.osipov@gmail.com" method="post" enctype="text/plain">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-4">
                                            <input type="text" className="form-control" placeholder="First name" required/>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <input type="text" className="form-control" placeholder="Last name" required/>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-4">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="validationDefault03"
                                                placeholder="Email"
                                                required
                                                aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="validationDefault04"
                                                placeholder="Phone"
                                                required/>

                                        </div>
                                        <small id="emailHelp" className="form-text text-muted">We never share your email or phone number with anyone else.</small>

                                    </div>
                                    <div class="mb-3">
                                        <textarea
                                            className="form-control"
                                            id="validationTextarea"
                                            placeholder="Your Message:"
                                            required></textarea>

                                    </div>
                                    <Row>
                                    <Col md={4}>
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                    </Col>
                                    <Col md={3} >
                                    <button className="btn btn-primary" type="reset" value="Reset">Clear</button>
                                    </Col>
                                    </Row>

                                    
                                </form>
                            </Col>

                        </Col>
                    </Row>

                </Container>

            </section>

        )
    }
}
