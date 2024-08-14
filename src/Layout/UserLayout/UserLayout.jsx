import React from 'react';
import Navber from '../../Component/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Footer';

const UserLayout = () => {
    return (
       <>
       
         <Navber/>
        <div className='min-h-screen '>
        <Outlet/>
        </div>
         <Footer/>
       
       </>
    );
};

export default UserLayout;