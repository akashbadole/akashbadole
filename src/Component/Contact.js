import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='container py-4'>
                <p className='py-4'>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" >
                       For Contact 
                    </a>

                </p>
                <div className="collapse py-4" id="collapseExample">
                    <div className="card card-body">
                       Please sent Email On badoleakash [at] Gmail.com
                    </div>
                </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Contact;