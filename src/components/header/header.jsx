import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {

    render() {
        return (

            <header >
                <nav id="navbar-example2" className="navbar navbar-light fixed-top" >
                         <a href="#" >
                <img src={require('../image/Logo.png')} alt="" width="50"
        height="50" />
                </a>
             
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
          
            </header>


        )
    }
}






