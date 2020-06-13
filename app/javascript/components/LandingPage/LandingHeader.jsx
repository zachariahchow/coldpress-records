import React, { useRef } from 'react';
import logo from '../../images/coldpress-logo.png';
import logoTan from '../../images/coldpress-tan.jpeg';
import cartIcon from '../../images/cart-icon.png';
import Nav from '../Layout/Nav';
import TopNav from '../Layout/TopNav';
import { Link } from 'react-router-dom';
import Burger from 'react-css-burger';

import { useOnClickOutside } from '../../custom-hooks/use-on-click-outside';


const LandingHeader = ({ isMenuOpen, setIsMenuOpen, toggleMenuHandler }) => {

    const node = useRef();
    useOnClickOutside(node, () => setIsMenuOpen(false));

    //CSS Classes
    const headerClasses = ['w-full', 'flex', 'justify-center', 'items-center', 'z-10'];
    const logoContainerClasses = ['w-full', 'h-auto', 'px-2', 'py-12', 'flex', 'justify-center', 'items-center p-8 sm:p-0 mt-8 sm:mt-12 mb-8'];
    //

    return (
        <header className={`header-landing ${headerClasses.join(' ')}`} >
        <TopNav />
        <div className="burger-nav__ref-container z-20 flex items-center justify-center pb-4 md:invisible" ref={node}>
            <Burger
              onClick={toggleMenuHandler}
              active={isMenuOpen}
              burger="emphatic"
              color="white"
              hoverOpacity={0.8}
              scale={0.8}
            />
            <Nav isMenuOpen={isMenuOpen}/>
        </div>
            <div className={"landing-logo__container " + logoContainerClasses.join(' ')}>
                <Link to="/"><img className="object-contain" src={logo} alt="Cold Press Logo"/></Link>
            </div>
            <div className="cart-icon__container absolute top-0 right-0 flex justify-center items-center px-4 py-6">
                <Link to="/cart"><img className="object-contain" src={cartIcon} alt="Cart Icon"/></Link>
            </div>
        </header>
    );
}

export default LandingHeader;