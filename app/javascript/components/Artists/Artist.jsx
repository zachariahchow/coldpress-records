import React from 'react';
import { Link } from 'react-router-dom';

const Artist = ({ artistData }) => {

    //CSS Classes

    //


    return (
        <div className="artist__container my-2 w-full sm:w-auto flex flex-col justify-around items-center">
            <div className="artist-name__container">
                <p className="artist-name text-center px-2 py-2 border-b-2 mb-2 tracking-wider uppercase hover:text-gray-700 hover:border-gray-600"><Link to={`artists/${artistData.id}`}>{artistData.name}</Link></p>
            </div>
            <div className="artist-thumbnail__container mx-4 mb-2 mt-1 w-auto h-auto">
                <img className="artist-thumbnail object-cover" src={artistData.thumbnail_img} alt={artistData.name}/>
            </div>
        </div>
    );
}

export default Artist;