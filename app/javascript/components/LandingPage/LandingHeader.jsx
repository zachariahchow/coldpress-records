import React, { useRef } from 'react';
import logo from '../../images/coldpress-logo.png';
import logoTan from '../../images/coldpress-tan.jpeg';
import cartIcon from '../../images/cart-icon.png';
import fbIcon from '../../images/facebook-icon.png';
import bcIcon from '../../images/bandcamp-icon.png';
import Nav from '../Layout/Nav';
import TopNav from '../Layout/TopNav';
import { Link } from 'react-router-dom';
import Burger from 'react-css-burger';
import { useSpring, animated } from 'react-spring';

import { useOnClickOutside } from '../../custom-hooks/use-on-click-outside';


const LandingHeader = ({ isMenuOpen, setIsMenuOpen, toggleMenuHandler }) => {

    //Spring
    const calc = (x, y) => [-(y - window.innerHeight / 4) / 30, (x - window.innerWidth / 2) / 30, 1.1];
    const trans = (x, y, s) => `perspective(30rem) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const [springProps, setSpringProps] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
    }));

    //onClickOutside Custom Hook

    const node = useRef();
    useOnClickOutside(node, () => setIsMenuOpen(false));

    //CSS Classes
    const headerClasses = ['w-full', 'flex', 'justify-center', 'items-center', 'z-10'];
    const logoContainerClasses = ['w-full', 'h-auto', 'px-2', 'py-12', 'flex', 'justify-center', 'items-center p-8 sm:p-0 mt-8 sm:mt-12 mb-8'];
    //

    return (
        <header className={`header-landing ${headerClasses.join(' ')}`}
            onMouseMove={({ clientX: x, clientY: y }) => setSpringProps({ xys: calc(x, y) })}
            onMouseLeave={() => setSpringProps({ xys: [0, 0, 1] })}
        >
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
            <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        </div>
            <animated.div
                style={{transform: springProps.xys.interpolate(trans)}}
                className={"landing-logo__container " + logoContainerClasses.join(' ')}
            >
                <Link to="/"><img className="object-contain" src={logo} alt="Cold Press Logo"/></Link>
            </animated.div>
            <div className="icons__container absolute top-0 right-0 flex flex-col justify-center items-center px-5 pt-4">
                <Link to="/cart"><img className="landing-icon object-contain mb-2" src={cartIcon} alt="Cart Icon"/></Link>
                <a target="_blank" href="https://www.facebook.com/coldpressrecs/"><img className="landing-icon object-contain mb-3" src={fbIcon} alt="Facebook Icon"/></a>
                <a target="_blank" href="https://coldpressrecords.bandcamp.com/"><img className="landing-icon object-contain mb-2" src={bcIcon} alt="Bandcamp Icon"/></a>
            </div>
        </header>
    );
}

export default LandingHeader;