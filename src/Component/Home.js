import React, { Component } from "react";

import Footer from './Footer';
import Header from './Header';
import Intro from "./Intro";

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Intro />
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card" >
                                <div className="card-header">
                                    Front End Development
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">HTML</li>
                                    <li className="list-group-item">CSS</li>
                                    <li className="list-group-item">Javascript</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" >
                                <div className="card-header">
                                    Backend Development/CMS
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Python</li>
                                    <li className="list-group-item">PHP</li>
                                    <li className="list-group-item">WordPress</li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" >
                                <div className="card-header">
                                    Framework
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">ReactJS</li>
                                    <li className="list-group-item">Django</li>
                                    <li className="list-group-item">Fastapi</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card" >
                                <div className="card-header">
                                    Other
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">CPanel</li>
                                    <li className="list-group-item">AWS,GCP - Basic Knowledge</li>
                                    <li className="list-group-item">DigitalOcean</li>
                                    <li className="list-group-item">Zendesk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;
