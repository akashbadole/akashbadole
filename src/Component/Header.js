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
                    </nav>
                </div>

                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">Hi, Akash S Badole</h1>
                    <p className="textJustify">I am Akash. I have five years of experience in web development. When I first started out in the industry, I built websites with HTML, CSS, Javascript, and PHP. Then I started to learn SEO and digital marketing, skills that are used in companies. Then I started learning about WordPress and Magento. My career began in WordPress. Since then, I've been using WordPress exclusively. I know ReactJS, Python, Django, and Fastapi. basic understanding of cloud technology, including AWS, GCP, and CPanel.</p>
                </div>
            </header>
            </>
        );
    }
}

export default Header;