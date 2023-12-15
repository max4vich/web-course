import React from 'react';
import './header.styles.css';

const Header = () => {
    return (
        <div className='header'>
        <h2>HeliBUY</h2>
        <div className='nav'>
            <a href=''>Home</a>
            <a href=''>Shop</a>
            <a href=''>Blog</a>
            <a href=''>Contact</a>
        </div>
        <a href ='' className='a_bold'>www.helibuy.org</a>
    </div>
    )
}

export default Header