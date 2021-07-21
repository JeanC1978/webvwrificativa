import React from 'react'
import Image from 'next/image'
import logo from "../public/images/logo.svg";
import { Menu } from "./Menu";
import { Banner } from "./BannerHome";
// import styles from '../styles/Navbar.module.scss'

export function Navbar() {


    return (
        // <div className="navbar">
        <div className="navbar__main">
            <div className="navbar__main__logo">
                <Image
                    src={logo}
                    alt="Verificativa"
                    className="navbar__main__logo"
                />
            </div>
            <div className="navbar__main__menu">
                <Menu />
            </div>
        </div>
        // </div>
    )
}
