import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ isMenuOpen }) => {

    //CSS classes
    const linkClasses = ['h-4 w-3/4 py-4 px-2 my-6 text-center'];

    return (
        <nav className={`h-screen flex flex-col justify-center items-center fixed z-10 top-0 left-0 w-full md:w-1/2 bg-gray-200 opacity-75 ${isMenuOpen ? "transform -translate-x-0 ease-in-out duration-500" : "transform -translate-x-full ease-in-out duration-500"}`}>
            <li className={`navlink about__link ${linkClasses.join(' ')}`}><Link to="/about">About</Link></li>
            <li className={`navlink store__link ${linkClasses.join(' ')}`}><Link to="/store">Store</Link></li>
            <li className={`navlink artists__link ${linkClasses.join(' ')}`}><Link to="/artists">Artists</Link></li>
            <li className={`navlink news__link ${linkClasses.join(' ')}`}><Link to="/news">News</Link></li>
        </nav>
    );
}

export default Nav;