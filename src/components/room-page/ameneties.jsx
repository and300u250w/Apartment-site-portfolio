import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';


export default class Ameneties extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={8}>
                        <h1>Loft Style apartment next to Quattro</h1>

                    </Col>
                    <Col xs={2} >
                        <a href="https://www.airbnb.com/users/show/22282395">

                            <img src="https://a0.muscache.com/im/pictures/47fc65fe-1e40-4453-9fad-422979c2bbae.jpg?aki_policy=profile_x_medium" width="60" height="60" className="rounded-circle" alt="Andrii O." />
                            <svg viewBox="0 0 14 24" role="img" aria-label="Andrii — superhost." focusable="false" style={{ height: "32px", width: "32px", display: "block", fill: "currentColor" }}>
                                <path d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823" fill="#fff"></path><path d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z" fill="#ffb400"></path><path d="m12 9.5-5 3.75-5-3.75v-7.5z" fill="#ff5a5f"></path><path d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z" fill="#484848"></path></svg>
                        </a>

                        <div className="name">
                            <a href="https://www.airbnb.com/users/show/22282395">
                                Andrii O.</a>
                            {/* <img src="https://a0.muscache.com/airbnb/static/badges/super_host_50_new-e5e09829e1fc5ffefdb2d7387590c462.png" /> */}

                        </div>
                    </Col>

                </Row>
                <Row>
                    <hr style={{ color: "blue", display: "block" }} />
                </Row>
                <Row>

                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 14, viewBox: "0 0 20 14" }}>
                            <path fillOpacity=".8" fillRule="evenodd" d="M14.5 7C16 7 17 6 17 4.5S16 2 14.5 2a2.5 2.5 0 0 0 0 5zM7 6c1.7 0 3-1.3 3-3S8.7 0 7 0 4 1.3 4 3s1.3 3 3 3zm7.5 3C12.7 9 9 10 9 11.8V14h11v-2.3C20 10 16.3 9 14.5 9zM7 8c-2.3 0-7 1.2-7 3.5V14h7v-2.3c0-.8.3-2.3 2.4-3.4L7 8z"></path>
                        </svg>
                        <div className="title"> 4 people </div>

                    </Col>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" style={{ width: 18, height: 20, viewBox: "0 0 18 20" }}>
                            <path fillOpacity=".8" d="M8 0v2c-2.5.5-4.6 2.5-5 5h12c-.4-2.5-2.5-4.5-5-5V0H8zM2 8v2h14V8H2zm3 4c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zM3 15c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zM1 18c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1z"></path>
                        </svg>

                        <div className="title">
                            1 Bathroom
</div>
                    </Col>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" style={{ width: 20, height: 16 }}>
                            <path fillOpacity=".8" d="M2 0C1 0 0 1 0 2v11h20V2c0-1-1-2-2-2H2zm2 2h3c1 0 2 1 2 2v2H2V4c0-1 1-2 2-2zm9 0h3c1 0 2 1 2 2v2h-7V4c0-1 1-2 2-2zM0 14v2h3v-2H0zm17 0v2h3v-2h-3z"></path>
                        </svg>

                        <div className="title">
                            2 Beds
</div>
                    </Col>

                    <Col >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fillOpacity=".8" d="M4 0L0 3l4 3V4h6v2l4-3-4-3v2H4V0zm13 6l-3 4h2v6h-2l3 4 3-4h-2v-6h2l-3-4zM0 7v13h13V7H0zm2 2h9v9H2V9z"></path>
                        </svg>

                        <div className="title">
                            46 m<sup>2</sup>
                        </div>

                    </Col>
                    <Col >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15">
                            <path fillOpacity=".8" d="M10 0C6.2 0 2.7 1.5 0 3.8l1.3 1.5C3.7 3.3 6.7 2 10 2c3.3 0 6.3 1.3 8.6 3.3L20 3.8C17.3 1.5 13.8 0 10 0zm0 4C7.2 4 4.6 5 2.7 6.8L4 8.3C5.6 7 7.7 6 10 6s4.4 1 6 2.3l1.3-1.5C15.3 5 12.8 4 10 4zm0 4c-1.8 0-3.4.7-4.7 1.8l1.3 1.5c1-.8 2-1.3 3.3-1.3 1.2 0 2.3.5 3.2 1.3l1.3-1.5c-1-1-2.7-1.8-4.5-1.8zm0 4c-.8 0-1.5.3-2 .8l2 2.2 2-2.2a2.8 2.8 0 0 0-2-.8z"></path>
                        </svg>

                        <div className="title">
                            WIFI
</div>
                    </Col>

                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">
                            <path fillOpacity=".8" d="M2 0C1 0 0 1 0 2v15c0 1 1 2 2 2v1h2v-1h10v1h2v-1c1 0 2-1 2-2V2c0-1-1-2-2-2H2zm0 2h6v15H2V2zm8 0h6v15h-6V2zM5 8v4h2V8H5zm6 0v4h2V8h-2z"></path>
                        </svg>

                        <div className="title">
                            Furnished
    </div>

                    </Col>



                </Row>

            </Container >
        )
    }
}
