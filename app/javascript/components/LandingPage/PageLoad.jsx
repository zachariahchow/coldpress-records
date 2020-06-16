import React from 'react';
import logo from '../../images/coldpress-logo.png';

const PageLoad = ({ togglePageLoad, setTogglePageLoad, togglePageHandler }) => {


    //CSS Classes

    //

    return (
        <div
            className={`page-load__container h-screen w-screen flex flex-col justify-center items-center fixed z-20 top-0 left-0 bg-black opacity-0 py-8 ${togglePageLoad ? "transform -translate-y-0 ease-in-out duration-1000 opacity-100" : "transform -translate-y-full ease-in-out duration-1000 opacity-0"}`}
        >
            <div className="page-load-logo__container flex justify-center items-center w-auto border-white border-4 mb-4">
                <img className="page-load-logo object-contain" src={logo} alt=""/>
            </div>
            <div className="toggle-page__btn-container flex justify-center items-center">
                <button className="toggle-page__btn border-white border-4 text-white uppercase transform text-center tracking-wider" data-back={"ENTER"} data-front={"Get Juiced"} onClick={()=> {togglePageHandler()}}></button>
            </div>
        </div>
    );
}

export default PageLoad;