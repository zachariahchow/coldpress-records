import React from 'react';

const Artist = ({ artistData }) => {

    //CSS Classes

    //

    return (
        <div className="artist__container">
            <div className="artist-name__container">
                <p className="artist-name">{artistData.name}</p>
            </div>
        </div>
    );
}

export default Artist;