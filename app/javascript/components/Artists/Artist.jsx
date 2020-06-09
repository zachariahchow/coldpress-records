import React from 'react';

const Artist = ({ artistData }) => {

    //CSS Classes

    //

    return (
        <div className="artist__container my-2">
            <div className="artist-name__container">
                <p className="artist-name text-center"><a href={`artists/${artistData.id}`}>{artistData.name}</a></p>
            </div>
            <div className="artist-thumbnail__container mx-4 mb-2 mt-1">
                <img className="artist-thumbnail object-cover" src={artistData.thumbnail_img} alt={artistData.name}/>
            </div>
        </div>
    );
}

export default Artist;