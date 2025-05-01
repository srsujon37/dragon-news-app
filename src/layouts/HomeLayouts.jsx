import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className="left_nev"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nev"></section>
            </main>
        </div>
    );
};

export default HomeLayouts;