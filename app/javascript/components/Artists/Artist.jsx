import React from 'react';
import { Link } from 'react-router-dom';

const Artist = ({ artistData }) => {

    //CSS Classes

    //

    return (
        <div className="artist__container my-2">
            <div className="artist-name__container">
                <p className="artist-name text-center"><Link to={`artists/${artistData.id}`}>{artistData.name}</Link></p>
            </div>
            <div className="artist-thumbnail__container mx-4 mb-2 mt-1">
                <img className="artist-thumbnail object-cover" src={artistData.thumbnail_img} alt={artistData.name}/>
            </div>
        </div>
    );
}

export default Artist;