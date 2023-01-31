import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <hr />
            
            <Outlet></Outlet>
            <hr />
            
            <Footer></Footer>
        </div>
    );
};

export default Main;