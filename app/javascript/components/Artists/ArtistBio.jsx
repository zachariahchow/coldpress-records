import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'

import fbIcon from '../../images/fb-black-icon.png';
import igIcon from '../../images/ig-black-icon.png';
import ytIcon from '../../images/yt-black-icon.png';
import spIcon from '../../images/spotify-black-icon.png';
import bcIcon from '../../images/bc-black-icon.png';

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
        <animated.div style={props} className="artist__container my-4 flex flex-col justify-around items-center w-full lg:flex-row lg:items-start">
            <div className="artist-info__container flex flex-col justify-around items-center w-full lg:w-1/2 lg:min-h-screen lg:justify-start">
                <div className="artist-name__container flex flex-col justify-center items-center">
                    <p className="artist-name text-center px-2 py-2 mb-2 tracking-wider uppercase text-4xl">{artistData.name}</p>
                </div>

                <div className="artist-icons__container flex mx-4 mb-4">
                    <a href={artistData.facebook_url} target="_blank" className="artist-icon__link fb-artist-link mx-2"><img src={fbIcon} alt="" className="artist-link__icon"/></a>
                    <a href={artistData.instagram_url} target="_blank" className="artist-icon__link ig-artist-link mx-2"><img src={igIcon} alt="" className="artist-link__icon"/></a>
                    <a href={artistData.spotify_url} target="_blank" className="artist-icon__link sp-artist-link mx-2"><img src={spIcon} alt="" className="artist-link__icon"/></a>
                    <a href={artistData.youtube_url} target="_blank" className="artist-icon__link yt-artist-link mx-2"><img src={ytIcon} alt="" className="artist-link__icon"/></a>
                    <a href={artistData.bandcamp_url} target="_blank" className="artist-icon__link bc-artist-link mx-2"><img src={bcIcon} alt="" className="artist-link__icon"/></a>
                </div>

                <div className="artist-thumbnail__container mx-4 my-4 flex flex-col justify-center items-center">
                    <img className="artist-thumbnail object-cover" src={artistData.thumbnail_img} alt={artistData.name}/>
                </div>
                <div className="artist-bio__container flex flex-col justify-center items-center p-2 w-10/12">
                    <p className="artist-bio__text font-serif w-full my-2">{artistData.bio}</p>
                </div>
                <div className="artist-page__iframe-container w-full lg:w-3/4 my-6">
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                      src={`https://www.youtube.com/embed/${artistData.youtube_url.split('=')[1]}?autoplay=1`}
                      frameborder="0" allow="autoplay; encrypted-media"></iframe>
                      {artistData.youtube_url}
                </div>
            </div>
                <div className="artist-releases__container flex flex-col justify-around items-center w-full lg:w-1/2 lg:min-h-screen lg:justify-start lg:border-l-2">
                        <h2 className="artist-bio-discography__headertext-center px-2 py-2 mb-2 tracking-wider uppercase text-xl">Releases</h2>
                    <div className="artist-albums__container px-2 w-full flex md:flex-row md:justify-center md:items-end flex-col flex-wrap justify-around items-center">

                    {artistAlbums.map(album =>
                        <div
                            className="album-container flex flex-col justify-center items-center w-5/12 lg:w-auto mx-4 mb-6 transform hover:scale-105 "
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