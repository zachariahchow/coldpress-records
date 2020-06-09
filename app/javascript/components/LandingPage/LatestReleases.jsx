import React from 'react';

const LatestReleases = ({ latestAlbums }) => {

    //CSS classes

    const latestAlbumsEls = latestAlbums.map(album =>
        <div className="album-name__header">
            <p className="album-name__text">{album.name}</p>
            <iframe className="latest-albums__iframe" src="https://bandcamp.com/EmbeddedPlayer/album=160009397/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href={album.bandcamp_url}>Moirai</a></iframe>
        </div>
    )

    return (
        <div className="latest-releases__container">
            <h2 className="latest-releases__header">
                <p className="latest-releases__header-text">Latest Releases</p>
            </h2>
            <div className="latest-releases-albums__container">
                {latestAlbumsEls}
            </div>
        </div>
    );
}

export default LatestReleases;