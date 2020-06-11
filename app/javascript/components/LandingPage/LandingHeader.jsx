import React from 'react';
import logo from '../../images/coldpress-logo.jpeg';
import cartIcon from '../../images/cart-icon.png';
import Nav from '../Layout/Nav';
import { Link } from 'react-router-dom';

const LandingHeader = () => {

    //CSS Classes
    const headerClasses = ['w-full', 'py-4', 'flex', 'justify-between', 'items-center', 'bg-gray-200'];
    const logoContainerClasses = ['w-1/4', 'h-auto'];
    //

    return (
        <header className={headerClasses.join(' ')}>
            <Nav />
            <div className="landing-header__content flex justify-center items-center">
                <p className="landing-header__text text-center text-2xl tracking-widest uppercase">Cold Press Records</p>
            </div>
            <div className={"landing-logo__container " + logoContainerClasses.join(' ')}>
                <Link to="/"><img className="object-contain" src={logo} alt="Cold Press Logo"/></Link>
            </div>
            <div className="cart-icon__container">
                <Link to="/cart"><img className="object-contain" src={cartIcon} alt="Cart Icon"/></Link>
            </div>
        </header>
    );
}

export default LandingHeader;