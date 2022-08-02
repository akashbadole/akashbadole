import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';


class Skill extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <div className="container py-4">
                    <div className="row">
                        <h3 className='heading py-3'>My Skill</h3>
                        <div className="col-md-12 py-3">
                            <h4>Front End Development</h4>
                            <ul>
                                <li>HTML, CSS, Javascript </li>
                            </ul>
                        </div>

                        <div className="col-md-12 py-3">
                            <h4>Backend Development/CMS</h4>
                            <ul>
                                <li>Python, PHP, WordPress </li>
                            </ul>
                        </div>

                        <div className="col-md-12 py-3">
                            <h4>Framework</h4>
                            <ul>
                                <li>ReactJS, Django, Fastapi </li>
                            </ul>
                        </div>
                        <div className="col-md-12 py-3">
                            <h4>Other</h4>
                            <ul>
                                <li>AWS,GCP - Basic Knowledge, CPanel, DigitalOcean, Zendesk , Git</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Skill;