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
            {allArtistEls}
        </div>
    );
}

export default AllArtists;