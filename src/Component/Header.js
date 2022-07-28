import React, { Component } from 'react';
import {  Link } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            
            <>

      

            <header>


                <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                    <Link to="/" className="d-flex align-items-center text-dark text-decoration-none logo">
                        Akash S Badole
                    </Link>

                    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        <Link className="me-3 py-2 text-dark text-decoration-none" to="/">Home</Link>

                        <Link className="me-3 py-2 text-dark text-decoration-none" to="/Summary">Summary</Link>
                        <Link className="me-3 py-2 text-dark text-decoration-none" to="/Skill">Skill</Link>
                        <Link className="me-3 py-2 text-dark text-decoration-none" to="/Experience">Experience</Link>
                        <Link className="me-3 py-2 text-dark text-decoration-none" to="/Education">Education</Link>
                        <Link className="me-3 py-2 text-dark text-decoration-none" to="/Contact">Contact</Link>
                    </nav>
                </div>


            </header>
            </>
        );
    }
}

export default Header;