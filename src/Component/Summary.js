import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Intro from './Intro';


class Summary extends Component {
    render() {
        return (
            <div>
                <Header />
                <Intro />
                <Footer />
            </div>
        );
    }
}

export default Summary;