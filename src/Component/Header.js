import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    return (
        <header className="border-b p-3 flex justify-between item-center">
            <a href="/" alt="" className='font-bold'>HiApp</a>
            <Navigation />
        </header>
    );
}

export default Header;