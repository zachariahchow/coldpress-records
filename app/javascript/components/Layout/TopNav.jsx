import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {

    //CSS classes
    const linkClasses = ['h-4 w:auto py-2 px-2 text-center uppercase tracking-widest'];

    return (
        <nav className={`h:auto px-8 py-4 w-full absolute top-0 flex justify-around items-center fixed z-10 top-0 left-0 invisible md:visible text-white text-xl`}>
            <li className={`navlink about__link ${linkClasses.join(' ')}`}><Link to="/about">About</Link></li>
            <li className={`navlink store__link ${linkClasses.join(' ')}`}><Link to="/store">Store</Link></li>
            <li className={`navlink artists__link ${linkClasses.join(' ')}`}><Link to="/artists">Artists</Link></li>
            <li className={`navlink news__link ${linkClasses.join(' ')}`}><Link to="/news">News</Link></li>
        </nav>
    );
}

export default TopNav;