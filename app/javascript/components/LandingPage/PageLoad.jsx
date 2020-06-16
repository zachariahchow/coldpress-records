import React from 'react';
import logo from '../../images/coldpress-logo.png';
import fbLogo from '../../images/footer-facebook.png';
import igLogo from '../../images/footer-instagram.png';
import bcLogo from '../../images/bandcamp-icon.png';
import ytLogo from '../../images/youtube-white-icon.png';

const PageLoad = ({ togglePageLoad, setTogglePageLoad, togglePageHandler }) => {


    //CSS Classes

    //

    return (
        <div
            className={`page-load__container h-screen w-screen flex flex-col justify-center items-center fixed z-20 top-0 left-0 bg-black opacity-0 py-8 ${togglePageLoad ? "transform -translate-y-0 ease-in-out duration-1000 opacity-100" : "transform -translate-y-full ease-in-out duration-1000 opacity-0"}`}
        >
            <div className="bubbles__container fixed top-0 left-0 right-0 bottom-0 opacity-50">
                <div className="bubbles bubble-one"></div>
                <div className="bubbles bubble-two"></div>
                <div className="bubbles bubble-three"></div>
                <div className="bubbles bubble-four"></div>
                <div className="bubbles bubble-five"></div>
                <div className="bubbles bubble-six"></div>
            </div>
            <div className="page-load-logo__container flex justify-center items-center w-auto border-white border-4 mb-6 z-10">
                <img className="page-load-logo object-contain" src={logo} alt=""/>
            </div>
            <div className="toggle-page__btn-container flex justify-center items-center mb-6 z-10">
                <button className="toggle-page__btn border-white border-4 text-white uppercase transform text-center tracking-wider" data-back={"ENTER"} data-front={"Get Juiced"} onClick={()=> {togglePageHandler()}}></button>
            </div>
            <div className="page-load-icons__conatiner flex justify-center-items-center z-10">
                <a href="https://www.facebook.com/65spectrums/" className="page-load__link fb-page-load-link mx-4"><img src={fbLogo} alt="" className="page-load-link__icon"/></a>
                <a href="https://www.instagram.com/65spectrums" className="page-load__link ig-page-load-link mx-4"><img src={igLogo} alt="" className="page-load-link__icon"/></a>
                <a href="https://coldpressrecords.bandcamp.com/" className="page-load__link bc-page-load-link mx-4"><img src={bcLogo} alt="" className="page-load-link__icon"/></a>
                <a href="https://www.youtube.com/channel/UCntpQV12ZfAar4eoXCS7PVw" className="page-load__link yt-page-load-link mx-4"><img src={ytLogo} alt="" className="page-load-link__icon"/></a>
            </div>
        </div>
    );
}

export default PageLoad;