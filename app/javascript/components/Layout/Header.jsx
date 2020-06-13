import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/coldpress-logo.jpeg';
import logoBanner from '../../images/coldpress-banner-logo.png';
import cartIcon from '../../images/cart-icon.png';
import Nav from './Nav';
import Burger from 'react-css-burger';

import { useOnClickOutside } from '../../custom-hooks/use-on-click-outside';

const Header = ({ isMenuOpen, setIsMenuOpen, toggleMenuHandler }) => {

    const node = useRef();
    useOnClickOutside(node, () => setIsMenuOpen(false));

    //CSS Classes
    const headerClasses = ['w-full', 'py-4', 'flex', 'justify-between', 'items-center', 'z-10'];
    const logoContainerClasses = ['w-1/4', 'h-auto'];
    const logoBannerContainerClasses = ['w-3/4', 'h-auto'];
    //

    return (
        <header className={`header-primary ${headerClasses.join(' ')}`}>
            <div className="logo-burger__container flex flex-col justify-center items-center">
                <div className={"logo__container " + logoContainerClasses.join(' ')}>
                    <Link to="/"><img className="object-contain" src={logo} alt="Cold Press Logo"/></Link>
                </div>
                <div className="burger-nav__ref-container z-20 flex items-center justify-center pb-4" ref={node}>
                    <Burger
                      onClick={toggleMenuHandler}
                      active={isMenuOpen}
                      burger="emphatic"
                      color="black"
                      hoverOpacity={0.8}
                      scale={0.8}
                    />
                    <Nav isMenuOpen={isMenuOpen}/>
                </div>
            </div>
            <div className={"logo-banner__container " + logoBannerContainerClasses.join(' ')}>
                <Link to="/"><img className="object-contain" src={logoBanner} alt="Cold Press Logo"/></Link>
            </div>

            <div className="cart-icon__container flex justify-center items-center px-2 mr-4">
                <Link to="/cart"><img className="object-contain" src={cartIcon} alt="Cart Icon"/></Link>
            </div>
        </header>
    );
}

export default Header;