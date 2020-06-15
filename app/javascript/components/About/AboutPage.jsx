import React from 'react';
import { useSpring, animated } from 'react-spring';

const AboutPage = () => {

    //Spring

    const pageTranslateProps = useSpring({ from: { transform: 'translateY(200%)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' }, config: { duration: 800 } });


    //CSS Classes

    //

    return (
        <animated.div style={pageTranslateProps} className="about-page__container flex flex-col justify-around items-center mt-12">
            <div className="about-page__header flex flex-col justify-center items-center w-full px-6 lg:hidden">
                <div className="about-page__header-wrapper">
                    <h2 className="about-page__header-text-small text-center text-4xl uppercase tracking-widest mb-2 text-black font-bold">
                        Coldpress
                    </h2>
                    <h2 className="about-page__header-text-small text-center text-4xl uppercase tracking-widest mb-2 text-black font-bold">Records</h2>
                </div>
            </div>
            <div className="about-page__video-body-container w-11/12 px-4 flex flex-col justify-around items-center lg:items-start lg:flex-row lg:flex-wrap lg:justify-center">
                <div className="about-page__iframe-container w-3/4 lg:w-2/5 my-6">
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                      src="https://www.youtube.com/embed/uBRYm4LIfkU?autoplay=1"
                      frameborder="0" allow="autoplay; encrypted-media"></iframe>
                </div>
                <div className="about-page__body flex w-11/12 sm:w-1/2 md:px-8 py-2 justify-around lg:border-r-2">
                    <div className="about-page__header flex flex-col justify-center items-center w-full px-6 hidden lg:block my-4">
                        <div className="about-page__header-wrapper flex flex-col justify-center items-center">
                            <h2 className="about-page__header-text text-center text-4xl uppercase tracking-widest mb-2 text-black font-bold">
                                Coldpress
                            </h2>
                            <h2 className="about-page__header-text transform rotate-180 text-center text-4xl uppercase tracking-widest mb-2 text-black font-bold ">Records \</h2>
                        </div>
                    </div>
                    <p className="about-page__paragraph py-4">
                        Coldpress Records is a passion project by the folks at 65 Spectrums, a Singaporean video collective dedicated to the documentation and archiving of local/regional independent music.

                        <br/>
                        <br/>

                           Although it's still early days here at Coldpress, and the recent pandemic has proven to be more than just a bump in the road, we remain steadfastly committed to our vision of helping our local independent bands blow their trumpets. Having spent the past several years shooting music videos and live sessions for artists that span a myriad of music genres, we can assure you that the Singaporean independent music community is livelier than it has ever been.
                    <br/>
                    <br/>

                           We are strongly aligned with the DIY ethos - much of the brilliant work that you see performed at the outdoor stages of the Esplanade - these are not the results of a handsomely paid marketing team or irrelevant tie-ups with musically-disinterested corporate sponsors. To us, what makes so much of this genuinely interesting, is the raw grit and passion that goes into these works, propped up only by the generosity of the community in a framework laid out by those who came before us (and for which we are grateful).
                   <br/>
                   <br/>
                           If you are an artist who likewise shares our belief in the spirit of independent music, please reach out to us - we may be a match made in heaven.
                    </p>
                </div>
            </div>
        </animated.div>

    );
}

export default AboutPage;