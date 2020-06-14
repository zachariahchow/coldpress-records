import React from 'react';

const AboutPage = ({ allArtistsData }) => {

    //CSS Classes

    //

    const allArtistEls = allArtistsData.map(artist =>
        <Artist artistData={artist}/>
    )

    return (
        <div className="about-page__container flex flex-col justify-around items-center mt-6">
            <div className="about-page__header flex justify-center items-center w-full">
                <h2 className="about-page__header-text text text-center text-2xl uppercase tracking-widest mb-2 text-black font-bold">
                    About Coldpress Records
                </h2>
            </div>
        </div>
    );
}

export default AboutPage;