import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/homelayout/LeftAside';
import RightAside from '../Component/homelayout/RightAside';

const HomeLayouts = () => {
    return (
        <div className='container mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='mx-auto my-3  grid grid-cols-12 gap-5'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside> 
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;