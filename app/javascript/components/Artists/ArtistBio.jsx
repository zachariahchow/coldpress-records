import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'

const ArtistBio = ({ artistData, match }) => {

    //Spring

    const [show, set] = useState(false)
    const transitions = useTransition(show, null, {
        from: { transform: 'translateY(100%)' },
        enter: { transform: 'translateY(0)' },
        leave: { transform: 'translateY(100%)' },
    })

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


    return transitions.map(({ item, key, props }) => (
        <animated.div style={props} className="artist__container my-2 flex flex-col justify-around items-center w-full">
            <div className="artist-name__container">
                <p className="artist-name text-center px-2 py-2 mb-2 tracking-wider uppercase text-xl">{artistData.name}</p>
            </div>

            <div className="artist-thumbnail__container mx-4 mb-2 mt-1">
                <img className="artist-thumbnail object-cover" src={artistData.thumbnail_img} alt={artistData.name}/>
            </div>
            <div className="artist-bio__container flex flex-col justify-around items-center p-2 w-10/12 sm:w-1/2">
            <p className="artist-bio__text font-serif text-center w-11/12 my-2">{artistData.bio}</p>
            </div>
            <div className="artist-bio-discography__container flex flex-col justify-around items-center p-2 w-full">
                <h2 className="artist-bio-discography__header my-8 text-xl tracking-widest">Releases</h2>
            <div className="artist-albums__container px-2 w-11/12 flex md:flex-row md:justify-center md:items-around flex-col flex-wrap justify-around items-center">
                {artistAlbums.map(album =>
                    <div
                        className="album-container flex flex-col justify-center items-center w-1/2 lg:w-auto mx-4 mb-6 transform hover:scale-105 "
                        key={artistAlbums.indexOf(album) + 999}
                    >
                        <p className="album-name__text text-center py-4 flex flex-col justify-center items-center"><span className="uppercase text-xl tracking-wider font-semibold">{album.name}</span> <span className="font-bold border-b-2 border-white">{album.artist_name}</span></p>
                        <iframe className="latest-albums__iframe" src={`https://bandcamp.com/EmbeddedPlayer/${album.bandcamp_album_code}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`}
                            seamless>
                            <a href={album.bandcamp_url}>{album.name}</a>
                        </iframe>
                    </div>
                )}
            </div>

            </div>
        </animated.div>
    ));
}

export default ArtistBio;