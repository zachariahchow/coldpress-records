import React from 'react';
import Artist from './Artist';


const AllArtists = ({ allArtistsData }) => {

    //CSS Classes

    //

    const allArtistEls = allArtistsData.map(artist =>
        <Artist artistData={artist}/>
    )

    return (
        <div className="all-artists__container flex flex-col justify-around items-center mt-6">
            <div className="all-artists__header flex justify-center items-center w-full">
                <h2 className="all-artists__header-text text text-center text-2xl uppercase tracking-widest mb-2 text-black font-bold">
                    Artists
                </h2>
            </div>
            <div className="all-artists__wrapper flex flex-col justify-around items-center w-full sm:flex-row sm:flex-wrap sm:items-around">
                {allArtistEls}
            </div>
        </div>
    );
}

export default AllArtists;