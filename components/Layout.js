import React from 'react'
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BannerHome } from '../components/BannerHome';

export function Layout({ bannerHome = null, children }) {
    return (
        <>
            {
                !bannerHome &&
                <BannerHome />
            }
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
