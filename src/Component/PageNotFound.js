import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <>
        <Header />
            <div className='container py-4'>
                <img src='404.jpg' alt='404 page' className='FourStyle' />
            <h1 className='text-center py-2'>404 Error</h1>
            <h2 className='text-center py-2'>Page Not Found </h2>
            
            
            <div className='text-center'>
            <Link to="/" className='textCenter TextColorChange  py-4'>Go Home</Link>
            </div>
            
            </div>
            <Footer />
        </>
    );
}

export default PageNotFound;