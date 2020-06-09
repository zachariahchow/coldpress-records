import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header';
import LandingBanner from './LandingPage/LandingBanner';
import LandingPage from './LandingPage/LandingPage';

const App = () => {

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
    const mainClasses = ['min-h-screen', 'w-full', 'flex', 'flex-col', 'justify-start', 'items-center'];

    return (
        <main className={mainClasses.join(' ')}>
            <BrowserRouter >
                <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/" component={Header}/>
                </Switch>
            </BrowserRouter>
        </main>
    );
}

export default App;