import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import bannerOne from '../../images/atc-banner-1.jpg';
import bannerTwo from '../../images/kc-banner-1.jpg';
import bannerThree from '../../images/subsonic-eye-banner-1.jpg';
import bannerFour from '../../images/hauste-banner-1.jpg';


class LandingCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false} interval={6000} autoPlay={true} swipeable={true} stopOnHover={true} emulateTouch={true} showStatus={false} useKeyboardArrows={true} infiniteLoop={true} showArrows={false} transitionTime={300} dynamicHeight={true}>
                <div>
                    <img className="object-cover" src={bannerOne} />
                </div>
                <div>
                    <img className="object-cover" src={bannerTwo} />
                </div>
                <div>
                    <img className="object-cover" src={bannerThree} />
                </div>
                <div>
                    <img className="object-cover" src={bannerFour} />
                </div>
            </Carousel>
        );
    }
};

export default LandingCarousel;