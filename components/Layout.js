import React from 'react'
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BannerHome } from '../components/BannerHome';
import { Banner } from '../components/Banner';

export function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
