import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingBanner from './LandingBanner';
import LatestReleases from './LatestReleases';
import LandingHeader from './LandingHeader';
import Carousel from './Carousel';

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
        <div className="content__container w-full flex flex-col justify-around items-center">
            <link rel="stylesheet" href="node_modules/react-responsive-carousel/lib/styles/carousel.min.css"/>
            <div className="header-nav__container flex flex-col justify-around items-center w-full z-10">
                <LandingHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenuHandler={toggleMenuHandler}/>
            </div>
            <div className="landing-carousel__container">

            </div>
            <div className="carousel__container md:mt-8 w-full md:w-3/4">
                <Carousel />
            </div>
            <LatestReleases latestAlbums={latestAlbums}/>
        </div>
    );
}

export default LandingPage;