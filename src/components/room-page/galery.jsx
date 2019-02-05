import React, { Component, Fragment } from 'react';
import './galery.css';

export default class Galery extends Component {

    state = {
        WRO: ["1. Building", "1.1 Entrance", "2. Hall", "3 Bathroom", "3.1 Bath", "3.4 BATH", "4. Bar", "5.1 Sofa-Balcony"
        ],
        KRK: ["../images/KRK/2.1.jpg",
            "../images/KRK/3.1 Bathroom.jpg",
            "../images/KRK/3.3 Bathroom .jpg",
            "../images/KRK/4.5.jpeg",
            "../images/KRK/5.3 Dinning table.jpg",
            "../images/KRK/6.1 Sofa.jpg",
            "../images/KRK/6.4.jpg",
            "../images/KRK/Plan.jpg"
        ]
    }

    //     {
    //     $(document).ready(function () {
    //         $(".fancybox").fancybox({
    //             openEffect: "none",
    //             closeEffect: "none"
    //         });

    //         $(".zoom").hover(function () {

    //             $(this).addClass('transition');
    //         }, function () {

    //             $(this).removeClass('transition');
    //         });
    //     });
    // }

    update = (x) => {
        console.log(x.target.value)
    }
    render() {

        const { KRK, WRO } = this.state;

        return (
            <div className="container page-top">
                <h1 style={{ textAlign: "center" }}> Galery</h1>
                <div className="row">
                    {
                        WRO.map((item) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-xs-6 thumb " key={item}>
                                    <img src={require(`../image/WRO/${item}.jpg`)} className="zoom img-fluid " value={item} alt="" onMouseOver={this.update
                                    } />
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

// <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
//     <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
//     <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


//     <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />
//     <script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>



