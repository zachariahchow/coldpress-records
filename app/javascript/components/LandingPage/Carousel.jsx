import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import bannerOne from '../../images/sphaeras-banner-2.jpg';
import bannerTwo from '../../images/suneater-banner.jpg';

class LandingCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false} interval={5000} autoPlay={true} swipeable={true} stopOnHover={true} emulateTouch={true} showStatus={false} useKeyboardArrows={true} infiniteLoop={true} showArrows={false} transitionTime={300}>
                <div>
                    <img className="object-cover" src={bannerOne} />
                </div>
            </Carousel>
        );
    }
};

export default LandingCarousel;