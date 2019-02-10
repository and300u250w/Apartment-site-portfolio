import React, { Component } from 'react';

export class Body extends Component {
    render() {

        return (
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
        )
    }
}
