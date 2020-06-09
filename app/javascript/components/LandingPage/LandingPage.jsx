import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingBanner from './LandingBanner';
import LatestReleases from './LatestReleases';
import LandingHeader from './LandingHeader';

const LandingPage = () => {

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

    //CSS classes

    return (
        <div>
            <div className="header-nav__container flex flex-col justify-around items-center w-full">
                <LandingHeader />
            </div>
            <LandingBanner />
        </div>
    );
}

export default LandingPage;