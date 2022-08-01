import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <footer className="mt-auto bg-dark text-white">
                <div className='py-4 centerdiv container'>
                <p className=' leftdir'><b>Digital CV </b>- <u>Akash Badole</u></p>
                <a href='https://github.com/akashbadole' target="__blank" className='rightdir'>Github</a>
                </div>
                
            </footer>

        );
    }
}

export default Footer;