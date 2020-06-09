import React from 'react';
import Artist from './Artist';


const AllArtists = ({ allArtistsData }) => {

    //CSS Classes

    //

    const allArtistEls = allArtistsData.map(artist =>
        <Artist artistData={artist}/>
    )

    return (
        <div className="all-artists__container">
            <div className="all-artists__header flex justify-center items-center w-full">
                <h2 className="all-artists__header-text uppercase tracking-widest text-2xl py-2">
                    Artists
                </h2>
            </div>
            {allArtistEls}
        </div>
    );
}

export default AllArtists;