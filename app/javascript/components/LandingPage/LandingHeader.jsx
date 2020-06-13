import React, { useRef } from 'react';
import logo from '../../images/coldpress-logo.jpeg';
import cartIcon from '../../images/cart-icon.png';
import Nav from '../Layout/Nav';
import { Link } from 'react-router-dom';
import Burger from 'react-css-burger';

import { useOnClickOutside } from '../../custom-hooks/use-on-click-outside';

const LandingHeader = ({ isMenuOpen, setIsMenuOpen, toggleMenuHandler }) => {

    const node = useRef();
    useOnClickOutside(node, () => setIsMenuOpen(false));

    //CSS Classes
    const headerClasses = ['w-full', 'py-4', 'flex', 'justify-between', 'items-center', 'z-10', 'py-8'];
    const logoContainerClasses = ['w-1/4', 'h-auto', 'py-6', 'flex', 'justify-center', 'items-center'];
    //

    return (
        <header className={`header-landing ${headerClasses.join(' ')}`} >
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
            <div className={"landing-logo__container " + logoContainerClasses.join(' ')}>
                <Link to="/"><img className="object-contain" src={logo} alt="Cold Press Logo"/></Link>
            </div>
            <div className="cart-icon__container flex justify-center items-center px-2 mr-4">
                <Link to="/cart"><img className="object-contain" src={cartIcon} alt="Cart Icon"/></Link>
            </div>
        </header>
    );
}

export default LandingHeader;