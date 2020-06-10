import React, { useState, useEffect } from 'react';

const ArtistBio = ({ artistData, match }) => {

    const [artistAlbums, setArtistAlbums] = useState([]);

    // let artistAlbums;

    const getArtist = () => {
        fetch(`/artists/${match.params.id}.json`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            return res.json()
        }).then(resData => {
            setArtistAlbums(resData.albums);
            console.log(resData.albums);

            // artistAlbums = artist.albums.map(album =>
            //     <div className="artist-bio-album__container">
            //         <div className="album-container flex flex-col justify-center items-center w-auto mx-4">
            //             <p className="album-name__text text-center my-2 flex flex-col justify-center items-center"><span className="italic">{album.name}</span> <span className="font-bold">{album.artist_name}</span></p>
            //             <iframe className="latest-albums__iframe" src={`https://bandcamp.com/EmbeddedPlayer/album=${album.bandcamp_album_code}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`} seamless><a href={album.bandcamp_url}>{album.name}</a></iframe>
            //         </div>
            //     </div>
            // )
        })
    }

    useEffect(() => {
        getArtist();
    }, []);

    useEffect(() => {
        console.log(artistAlbums);
    }, [artistAlbums]);

    //CSS Classes

    //


    return (
        <div className="artist__container my-2">
            <div className="artist-name__container">
                <p className="artist-name text-center">{artistData.name}</p>
            </div>
            <div className="artist-thumbnail__container mx-4 mb-2 mt-1">
                <img className="artist-thumbnail object-cover" src={artistData.thumbnail_img} alt={artistData.name}/>
            </div>
            <div className="artist-bio__container flex flex-col justify-around items-center p-2 w-full">
            <h2 className="artist-bio__header mb-2 text-xl tracking-wider">About</h2>
            <p className="artist-bio__text">{artistData.bio}</p>
            </div>
            <div className="artist-bio-discography__container flex flex-col justify-around items-center p-2 w-full">
                <h2 className="artist-bio-discography__header">Releases</h2>

            {artistAlbums.map(album =>
                <div className="artist-bio-album__container">
                    <div className="album-container flex flex-col justify-center items-center w-auto mx-4">
                        <p className="album-name__text text-center my-2 flex flex-col justify-center items-center"><span className="italic">{album.name}</span> <span className="font-bold">{album.artist_name}</span></p>
                        <iframe className="latest-albums__iframe" src={`https://bandcamp.com/EmbeddedPlayer/${album.bandcamp_album_code}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`} seamless><a href={album.bandcamp_url}>{album.name}</a></iframe>
                    </div>
                </div>
            )}

            </div>
        </div>
    );
}

export default ArtistBio;