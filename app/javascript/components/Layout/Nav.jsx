import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ isMenuOpen, setIsMenuOpen }) => {

    //CSS classes
    const linkClasses = ['h-4', 'w-3/4', 'py-4', 'px-2', 'my-6',
        'text-center', 'text-3xl', 'tracking-wider', 'uppercase', 'font-bold', 'hover:tracking-widest', 'hover:underline'
    ];

    return (
        <nav className={`h-screen flex flex-col justify-center items-center fixed z-10 top-0 left-0 w-full md:w-1/2 bg-gray-300 opacity-75 ${isMenuOpen ? "transform -translate-x-0 ease-in-out duration-700" : "transform -translate-x-full ease-in-out duration-700"}`}>
            <li className={`navlink about__link ${linkClasses.join(' ')}`} onClick={()=>setIsMenuOpen()}><Link to="/about">About</Link></li>
            <li className={`navlink store__link ${linkClasses.join(' ')}`} onClick={()=>setIsMenuOpen()}><Link to="/store">Store</Link></li>
            <li className={`navlink artists__link ${linkClasses.join(' ')}`} onClick={()=>setIsMenuOpen()}><Link to="/artists">Artists</Link></li>
            <li className={`navlink news__link ${linkClasses.join(' ')}`} onClick={()=>setIsMenuOpen()}><Link to="/news">News</Link></li>
        </nav>
    );
}

export default Nav;