import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../shered/Footer';
import Header from '../shered/Header';

const DashbordLayout = () => {
    return (
        <div>
          <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default DashbordLayout;