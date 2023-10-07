import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../pages/Footer';

const Root = () => {
    return (
        <div className='font-josefinSans'>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;