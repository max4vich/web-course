import React from 'react';
import './header.styles.css';

const Header = () => {
    return (
        <div className='header'>
        <h2>HeliBUY</h2>
        <div className='nav'>
            <a className='nav' href='/'>Home</a>
            <a className='nav' href='/cart'>Cart</a>
            <a className='nav' href=''>Blog</a>
            <a className='nav' href=''>Contact</a>
        </div>
        <a href ='' className='a_bold'>www.helibuy.org</a>
    </div>
    )
}

export default Header