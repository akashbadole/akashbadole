import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';


class Experience extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='container py-4'>
                <h3 className='heading py-3'>My Experience</h3>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {/* 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            ANI TECHNOLOGIES PVT LTD— WordPress Developer, Front End Developer, Zendesk
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <p className='py-2'>April 2021 - July 2022</p>
                                <ul>
                                    <li>Managing company foreign WordPress sites.</li>
                                    <li>Security and Backup implementation</li>
                                    <li>Zendesk Administrator and working on theme, Slack Administrator & Figma</li>
                                    <li>Landing Page created for Internal Company Website</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            SA TECHNOLOGIES, PUNE— WordPress Developer & Front End Developer,
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <p className='py-2'>October 2020 - April 2021</p>
                                <ul>
                                    <li>Design Company Website and Client website</li>
                                    <li>ReactJS Website Created</li>
                                    <li>Backup, Security implementation</li>
                                    <li>Landing Page creation for Campaign</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            SMARTCOOKIE REWARD PVT LTD, PUNE— WordPress Developer & Front End Developer,
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <p className='py-2'>August 2019 - October 2020</p>
                                <ul>
                                    <li>Designed, developed, and deployed company WordPress site.</li>
                                    <li>Developed WordPress E-Commerce (Woocommerce) Website.</li>
                                    <li>Created Digital Marketing Campaign for Smartcookie Project and other projects.</li>
                                    <li>Customized WordPress plugin.</li>
                                    <li>Form CRM Management, Mailchimp to store</li>
                                    <li>Startupworld pages design - Redesign Website</li>
                                    <li>Email Templates Making</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 4 */}

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            CLIDE MANAGEMENT CONSULTANCY PVT LTD , Nagpur — WordPress Developer & Front End Developer,
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <p className='py-2'>May 2018 - August 2019</p>
                                <ul>
                                    <li>Developed WordPress Woocommerce Website with Moodle.</li>
                                    <li>Making a Digital Marketing Campaign for an E-Commerce Website.</li>
                                    <li>Deployed company WordPress site using Cpanel and Digital Ocean, VPS.</li>
                                    <li>Customized WordPress plugins and built new custom plugins.</li>
                                    <li>Work on an android development (Screen), React Native (For Design), React JS Website.</li>
                                    <li>Worked on Chabot</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 5 */}

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            THREE TECH, Nagpur — Web Developer
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                            <p className='py-2'>OCT 2017 - MAY 2018</p>
                                <ul>
                                    <li>Assist in website traffic and performance monitoring.</li>
                                    <li>Created websites in PHP, JavaScript, HTML and CSS.</li>
                                    <li>Customize themes to meet clients’ requirements.</li>
                                    <li>SEO, email marketing, and AdWords for small sized ecommerce sites.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            KVORAGE , Nagpur — Web Developer And Digital Marketing
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p className='py-2'>Jan 2017 - OCT 2017</p>
                                <ul>
                                    <li>Build websites using WordPress.</li>
                                    <li>Build websites using HTML5, CSS3, and Bootstrap.</li>
                                    <li>Managing and Maintaining Website.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Experience;