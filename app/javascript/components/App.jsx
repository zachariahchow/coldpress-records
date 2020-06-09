import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Layout/Header';
import Nav from './Layout/Nav';

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

    return (
        <main>
            <BrowserRouter >
                <Route path="/" component={Header}/>
                <Route path="/" component={Nav}/>
            </BrowserRouter>
        </main>
    );
}

export default App;