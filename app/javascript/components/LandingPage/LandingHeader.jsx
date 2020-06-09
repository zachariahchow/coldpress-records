import React from 'react';
import logo from '../../images/coldpress-logo.jpeg';
import Nav from '../Layout/Nav';

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
                <a href="/"><img className="object-contain" src={logo} alt="Cold Press Logo"/></a>
            </div>
        </header>
    );
}

export default LandingHeader;