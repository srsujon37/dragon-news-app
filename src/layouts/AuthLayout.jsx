import React from 'react';
import Header from '../Component/Header';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='container mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='container mx-auto'>
                <Outlet></Outlet>

            </main>
        </div>
    );
};

export default AuthLayout;