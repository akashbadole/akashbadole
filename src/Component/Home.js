import React, { Component } from "react";

import Footer from './Footer';
import Header from './Header';

class Home extends Component {
    render() {
        return (
<>  
<Header />
       

 
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div class="card" >
                                <div class="card-header">
                                    Front End Development
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">HTML</li>
                                    <li class="list-group-item">CSS</li>
                                    <li class="list-group-item">Javascript</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div class="card" >
                                <div class="card-header">
                                    Backend Development/CMS
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Python</li>
                                    <li class="list-group-item">PHP</li>
                                    <li class="list-group-item">WordPress</li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div class="card" >
                                <div class="card-header">
                                    Framework
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ReactJS</li>
                                    <li class="list-group-item">Django</li>
                                    <li class="list-group-item">Fastapi</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div class="card" >
                                <div class="card-header">
                                    Other
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">CPanel</li>
                                    <li class="list-group-item">AWS,GCP - Basic Knowledge</li>
                                    <li class="list-group-item">DigitalOcean</li>
                                    <li class="list-group-item">Zendesk</li>
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
