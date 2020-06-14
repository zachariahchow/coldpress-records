import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/coldpress-logo.png';
import logoBanner from '../../images/coldpress-banner-logo.png';
import cartIcon from '../../images/cart-black.png';
import Nav from './Nav';
import Burger from 'react-css-burger';

import { useOnClickOutside } from '../../custom-hooks/use-on-click-outside';

const Header = ({ isMenuOpen, setIsMenuOpen, toggleMenuHandler }) => {

    const node = useRef();
    useOnClickOutside(node, () => setIsMenuOpen(false));

    //CSS Classes
    const headerClasses = ['w-full', 'py-4', 'flex', 'justify-center', 'items-center', 'z-10', 'border-b-2', 'border-gray-500'];
    const logoContainerClasses = ['w-1/4', 'h-auto'];
    //

    return (
        <header className={`header-primary ${headerClasses.join(' ')}`}>
            <div className="logo-burger__container flex flex-col justify-center items-center">
                <div className="burger-nav__ref-container z-20 flex items-center justify-center absolute top-0 left-0" ref={node}>
                    <Burger
                      onClick={toggleMenuHandler}
                      active={isMenuOpen}
                      burger="emphatic"
                      color="black"
                      hoverOpacity={0.8}
                      scale={0.8}
                    />
                    <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                </div>
            </div>
            <div className={"logo__container " + logoContainerClasses.join(' ')}>
                <Link to="/"><img className="object-contain" src={logo} alt="Cold Press Logo"/></Link>
            </div>
            <div className="cart-icon__default-container flex justify-center items-center px-4 absolute top-0 right-0">
                <Link to="/cart"><img className="cart-icon__default object-contain pt-2" src={cartIcon} alt="Cart Icon"/></Link>
            </div>

        </header>
    );
}

export default Header;