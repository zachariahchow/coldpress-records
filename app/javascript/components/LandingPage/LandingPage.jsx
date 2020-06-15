import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import LandingBanner from './LandingBanner';
import LatestReleases from './LatestReleases';
import LandingHeader from './LandingHeader';
import Carousel from './Carousel';
import BackgroundLogo from './BackgroundLogo';

import bannerOne from '../../images/sphaeras-banner-1.jpg';
import bannerTwo from '../../images/suneater-banner.jpg';

const LandingPage = ({ isMenuOpen, setIsMenuOpen, toggleMenuHandler }) => {

    //Reducers

    const httpReducer = (httpState, action) => {
        switch (action.type) {
            case 'SEND':
                return { loading: true, error: null };
            case 'RESPONSE':
                return { ...httpState, loading: false };
            case 'ERROR':
                return { ...httpState, error: action.errorMessage };
            case 'CLEAR':
                return { ...httpState, error: null };
            default:
                throw new Error('Bad!');
        }
    }

    //Spring

    const pageFadeInProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 700 } });

    //States

    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        loading: false,
        error: null
    })

    const [latestAlbums, setLatestAlbums] = useState([]);

    const getLatestAlbums = () => {
        fetch('/albums/latest.json', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            return res.json()
        }).then(resData => {
            setLatestAlbums(resData);
        })
    }

    useEffect(() => {
        getLatestAlbums();
    }, []);

    useEffect(() => {
        console.log(latestAlbums);
    }, [latestAlbums]);

    //CSS classes

    const bannerImages = [bannerOne, bannerTwo];

    return (
        <animated.div style={pageFadeInProps} className="content__container w-full flex flex-col justify-around items-center mb-42">
            <link rel="stylesheet" href="node_modules/react-responsive-carousel/lib/styles/carousel.min.css"/>
            <BackgroundLogo />
            <div className="header-nav__container flex flex-col justify-center items-center w-full z-10">
                <LandingHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenuHandler={toggleMenuHandler}/>
            </div>
            <div className="landing-carousel__container">

            </div>
            <div className="carousel__container md:mt-8 w-full md:w-3/4">
                <Carousel />
            </div>
            <LatestReleases latestAlbums={latestAlbums}/>
        </animated.div>
    );
}

export default LandingPage;