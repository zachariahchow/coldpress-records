import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header';
import LandingBanner from './LandingPage/LandingBanner';
import LandingPage from './LandingPage/LandingPage';
import AllArtists from './Artists/AllArtists';

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

    const [allArtists, setAllArtists] = useState([]);

    const getAllArtists = () => {
        fetch('/artists.json', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            return res.json()
        }).then(resData => {
            setAllArtists(resData);
        })
    }

    useEffect(() => {
        getAllArtists();
    }, []);

    useEffect(() => {
        console.log(`All Artists: ${allArtists}`);
    }, [allArtists]);


    //CSS classes
    const mainClasses = ['min-h-screen', 'w-full', 'flex', 'flex-col', 'justify-start', 'items-center'];

    return (
        <main className={mainClasses.join(' ')}>
            <BrowserRouter >
                <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/" component={Header}/>
                </Switch>
                <Route path="/artists" exact render={(props) => <AllArtists {...props} allArtistsData={allArtists}/>} />
            </BrowserRouter>
        </main>
    );
}

export default App;