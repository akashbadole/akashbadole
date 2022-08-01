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
                <header className='fluid-container'>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                            <div className='container'>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_akash" aria-controls="navbar_akash" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <Link to="/" className="navbar-brand my-2 rightnav">
                                    Akash S Badole
                                </Link>
                                {this.state.links.map(link => {
                                    return (

                                        <div class="collapse navbar-collapse rightdir" id="navbar_akash" >
                                             <ul class="navbar-nav me-auto mb-2 mb-lg-0" key={link.id}>
                                             <li class="nav-item">
                                             <Link class="nav-link active" aria-current="page" to={link.path}>{link.pathName}</Link>
                                              </li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </nav>
                    
                </header>
            </>
        );
    }
}

export default Header;