import React from 'react';

const LatestReleases = ({ latestAlbums }) => {

    //CSS classes

    const latestAlbumsEls = latestAlbums.map(album =>
        <div className="album-container flex flex-col justify-center items-center w-1/2 lg:w-auto mx-4">
            <p className="album-name__text text-center my-2 flex flex-col justify-center items-center"><span className="italic">{album.name}</span> <span className="font-bold">{album.artist_name}</span></p>
            <iframe className="latest-albums__iframe" src={`https://bandcamp.com/EmbeddedPlayer/${album.bandcamp_album_code}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`} seamless><a href={album.bandcamp_url}>{album.name}</a></iframe>
        </div>
    )

    return (
        <div className="latest-releases__container w-full flex flex-col justify-around items-center py-2">
            <h2 className="latest-releases__header w-1/2 text-xl tracking-wider text-center">
                <p className="latest-releases__header-text text-center text-2xl uppercase tracking-widest py-4 mb-2">Latest Releases</p>
            </h2>
            <div className="latest-releases-albums__container px-2 w-full flex sm:flex-row sm:justify-around sm:items-around flex-col flex-wrap justify-around items-center">
                {latestAlbumsEls}
            </div>
        </div>
    );
}

export default LatestReleases;