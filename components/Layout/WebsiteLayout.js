import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import ProductCard from '../ProductCard/ProductCard';
import Sidebar from '../Sidebar/Sidebar';
import Styles from '../Sidebar/sidebar.module.css'

function WebsiteLayout(props) {
    const [showSidebar, setShowSidebar] = useState(false);
    const [windowSize, setWindowSize] = useState(null)

    useEffect(() => {
        setWindowSize(window.innerWidth);
        const handleResize = () => {
            setWindowSize(window.innerWidth);
            console.log(window.innerWidth);
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    function showSideBarHandler() {
        console.log('called');
        setShowSidebar(!showSidebar);
    }

    return (
        <>
            <Nav showSideBarHandler={showSideBarHandler} />
            <main>
                <div >
                    <Sidebar showSidebar={showSidebar} windowSize={windowSize} />
                </div>
                <div className=" md:ml-0 xl:ml-60 ">
                    <div className="">
                        {props.children}
                    </div>
                    <Footer />

                </div>
            </main>
        </>
    );
}

export default WebsiteLayout;