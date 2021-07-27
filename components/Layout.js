import React from 'react'
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BannerHome } from '../components/BannerHome';
import { Banner } from '../components/Banner';

export function Layout({ children }) {
    return (
        <>
            {/* {
                banner ?
                    <Banner /> :
                    <BannerHome />
            } */}
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
