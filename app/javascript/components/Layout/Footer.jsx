import React from 'react';
import { Link } from 'react-router-dom';
import fbIcon from '../../images/footer-facebook.png';
import igIcon from '../../images/footer-instagram.png';
import twIcon from '../../images/footer-twitter.png';

const Footer = () => {

    //CSS classes
    //

    return (
        <footer className="h-42 bg-black w-full text-white flex flex-col justify-center items-center py-4">
            <ul className="footer-icons__container flex justify-center-items-center mb-4">
                <a href="" className="footer__link fb-footer-link mx-4"><img src={fbIcon} alt="" className="footer-link__icon"/></a>
                <a href="" className="footer__link ig-footer-link mx-4"><img src={igIcon} alt="" className="footer-link__icon"/></a>
                <a href="" className="footer__link tw-footer-link mx-4"><img src={twIcon} alt="" className="footer-link__icon"/></a>
            </ul>
            <ul className="footer-links__container flex justify-center-items-center mb-4">
                <Link to="" className="footer__link terms-footer-link mx-4">Terms of Use</Link>
                <Link to="" className="footer__link privacy-footer-link mx-4">Privacy Policy</Link>
            </ul>
            <div className="footer-copyright__container">
                <p className="footer-copyright">
                    © Coldpress Records 2020, All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;