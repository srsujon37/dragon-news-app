import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/homelayout/LeftAside';
import RightAside from '../Component/homelayout/RightAside';
import Loading from './../pages/Loading';

const HomeLayouts = () => {
    const { state } = useNavigation()
    return (
        <div className='container mx-auto'>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='mx-auto my-3  grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside> 
                </aside>
                <section className="main col-span-6">
                    {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;