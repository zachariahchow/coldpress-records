import React from 'react';
import { uid } from 'react-uid';

const LatestReleases = ({ latestAlbums }) => {


    //CSS classes

    const latestAlbumsEls = latestAlbums.map((album, index) =>
        <div
            className="album-container flex flex-col justify-center items-center w-1/2 lg:w-auto mx-4 mb-6 transform hover:scale-105 "
            key={uid(album, index)}
        >
            <p className="album-name__text text-center py-4 flex flex-col justify-center items-center"><span className="uppercase text-xl tracking-wider font-semibold">{album.name}</span> <span className="font-bold border-b-2 border-white">{album.artist_name}</span></p>
            <iframe className="latest-albums__iframe" src={`https://bandcamp.com/EmbeddedPlayer/${album.bandcamp_album_code}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`}
                seamless>
                <a href={album.bandcamp_url}>{album.name}</a>
            </iframe>
        </div>
    )

    return (
        <div className="latest-releases__container w-full flex flex-col justify-around items-center py-2 mt-4">
            <h2 className="latest-releases__header w-auto sm:w-1/4 text-xl tracking-wider text-center border-black border-transparent sm:border-white sm:border-8 px-4 py-6 mb-4 sm:mb-8">
                <p className="latest-releases__header-text text-center text-2xl uppercase tracking-widest font-bold text-black sm:text-white ">Latest Releases</p>
            </h2>
            <div className="latest-releases-albums__container px-2 w-full flex md:flex-row md:justify-around md:items-around flex-col flex-wrap justify-around items-center">
                {latestAlbumsEls}
            </div>
        </div>
    );
}

export default LatestReleases;