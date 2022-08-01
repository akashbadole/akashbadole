import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {

    state = {
        links: [
            { id: '1', path: '/', pathName: 'Home' },
            { id: '2', path: '/Summary', pathName: 'Summary' },
            { id: '3', path: '/Skill', pathName: 'Skill' },
            { id: '4', path: '/Experience', pathName: 'Experience' },
            { id: '5', path: '/Education', pathName: 'Education' },
            { id: '6', path: '/Blog', pathName: 'Blog' },
            { id: '7', path: '/Contact', pathName: 'Contact' },
        ]
    }


    render() {
        return (

            <>
                <header>

                    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                        <Link to="/" className="d-flex align-items-center text-dark text-decoration-none logo">
                            Akash S Badole
                        </Link>
                        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto" >


                            {this.state.links.map(link => {
                                return (

                                    <Link className="me-3 py-2 text-dark text-decoration-none" key={link.id} to={link.path}>{link.pathName}</Link>

                                )
                            })}


                            {/* 
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/Summary">Summary</Link>
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/Skill">Skill</Link>
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/Experience">Experience</Link>
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/Education">Education</Link>
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/Blog">Blog</Link>
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/Contact">Contact</Link>
                        < */}

                        </nav>
                    </div>


                </header>
            </>
        );
    }
}

export default Header;