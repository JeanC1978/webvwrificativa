import React from 'react'
import Image from 'next/image'
import logo from "../public/images/logo.svg";
import { Menu } from "./Menu";
// import styles from '../styles/Navbar.module.scss'

export function Navbar(props) {


    return (
        <div className="navbar">
            <div className="navbar__columnOne">
            </div>
            <div className="navbar__columnTwo">
            </div>
            <div className="navbar__main">
                <Image
                    src={logo}
                    alt="Verificativa"
                    className="navbar__main__logo"
                />
                <Menu />
            </div>

        </div>
    )
}
