import React from 'react';

const ArtistBio = ({ artistData, match }) => {

    //CSS Classes

    //

    return (
        <div className="artist__container my-2">
            <h1>ID: {match.params.id}</h1>
            <h1 className="">{artistData.name}</h1>
        </div>
    );
}

export default ArtistBio;