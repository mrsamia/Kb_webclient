import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import ProductCard from '../ProductCard/ProductCard';
import Sidebar from '../Sidebar/Sidebar';
import Styles from '../Sidebar/sidebar.module.css'

function WebsiteLayout(props) {
    return (
        <>
            <Nav />
            <main>
                <div >
                <Sidebar/>
                </div>
                <div className="flex-grow md:ml-0 xl:ml-72 ">
                    <div className="bg-slate-50">
                        {props.children}
                    </div>
                    <Footer />

                </div>
            </main>
        </>
    );
}

export default WebsiteLayout;