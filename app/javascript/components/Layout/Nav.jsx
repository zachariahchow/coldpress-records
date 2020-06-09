import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <li className="navlink about__link"><Link to="/about">About</Link></li>
            <li className="navlink store__link"><Link to="/store">Store</Link></li>
            <li className="navlink artists__link"><Link to="/artists">Artists</Link></li>
            <li className="navlink news__link"><Link to="/news">News</Link></li>
        </nav>
    );
}

export default Nav;