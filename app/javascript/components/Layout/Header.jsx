import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/coldpress-logo.jpeg';
import cartIcon from '../../images/cart-icon.png';
import Nav from './Nav';
import Burger from 'react-css-burger';

import { useOnClickOutside } from '../../custom-hooks/use-on-click-outside';

const Header = ({ isMenuOpen, setIsMenuOpen, toggleMenuHandler }) => {

    const node = useRef();
    useOnClickOutside(node, () => setIsMenuOpen(false));

    //CSS Classes
    const headerClasses = ['w-full', 'py-4', 'flex', 'justify-between', 'items-center', 'bg-gray-200 z-10'];
    const logoContainerClasses = ['w-1/4', 'h-auto'];
    //

    return (
        <header className={headerClasses.join(' ')}>
            <div className="burger__container px-2 z-50">
            <div className="burger-nav__ref-container" ref={node}>
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
            <div className="header__content flex justify-center items-center">
                <p className="header__text text-center text-2xl tracking-widest uppercase">Cold Press Records</p>
            </div>
            <div className={"logo__container " + logoContainerClasses.join(' ')}>
                <a href="/"><img className="object-contain" src={logo} alt="Cold Press Logo"/></a>
            </div>
            <div className="cart-icon__container">
                <Link to="/cart"><img className="object-contain" src={cartIcon} alt="Cart Icon"/></Link>
            </div>
        </header>
    );
}

export default Header;