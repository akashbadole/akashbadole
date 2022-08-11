import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navigation() {

    const [showMenu, setMenuShow] = useState(false);

    const menuName = [
        {
            id: 1,
            name: 'Home',
            url: '/',
        },
        {
            id: 2,
            name: 'About',
            url: '/about',
        },
        {
            id: 3,
            name: 'Contact',
            url: '/Contact',
        },
    ]

    let menu;
    let menuMask;
    if (showMenu) {
        menu = <div className='fixed p-5 bg-white mts-5 top-0 left-0 w-4/5 h-full shadow '>

            {/* <img src='https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' /> */}

            {
                menuName.map((menuNames, index) => {
                   return (
                    <ul key={index}>
                    <li className='bold uppercase text-red mb-5'><a href={menuNames.url} alt="">{menuNames.name} </a></li>
                </ul>
                   )
                })
            }
        </div>

        menuMask = <div className='black-t-50 fixed top-0 left-0 w-full h-full z-50'
            onClick={() => setMenuShow(false)}
        >

        </div>
    }




    return (
        <nav>
            <span className='text-xl'>
                <FontAwesomeIcon icon={faBars}
                    onClick={() => setMenuShow(!showMenu)}
                />
            </span>
            {menu}
            {menuMask}


        </nav>
    );
}

export default Navigation;