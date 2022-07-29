import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Blog extends Component {
    render() {
        return (
            <div>
                <Header />
                <h3 className='heading py-3'>Blog</h3>
                <div className='container py-4'>
                    <p>Coming Soon</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Blog;