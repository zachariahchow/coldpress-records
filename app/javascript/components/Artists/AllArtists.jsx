import React, { useState } from 'react';
import Artist from './Artist';
import { useTransition, animated } from 'react-spring'

const AllArtists = ({ allArtistsData }) => {

    //Spring

    const [show, set] = useState(false)
    const transitions = useTransition(show, null, {
        from: { transform: 'translateY(200%)' },
        enter: { transform: 'translateY(0)' },
        leave: { transform: 'translateY(200%)' },
    })

    //CSS Classes

    //

    const allArtistEls = allArtistsData.map(artist =>
        <Artist artistData={artist}/>
    )

    return transitions.map(({ item, key, props }) => (

        <animated.div style={props} className="all-artists__container flex flex-col justify-around items-center mt-6">
            <div className="all-artists__header flex justify-center items-center w-full">
                <h2 className="all-artists__header-text text-center text-2xl uppercase tracking-widest mb-2 text-black font-bold">
                    Artists
                </h2>
            </div>
            <div className="all-artists__wrapper flex flex-col justify-around items-center w-full sm:flex-row sm:flex-wrap sm:items-around">
                {allArtistEls}
            </div>
        </animated.div>
    ));
}

export default AllArtists;