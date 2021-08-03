import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import logo from "../public/images/logo.svg";
import { Menu } from "./Menu";
// import styles from '../styles/Navbar.module.scss'

export function Navbar() {
    const router = useRouter()

    const handleGoHome = () => {
        router.push("/")
    }

    return (
        // <div className="navbar">
        <div className="navbar__main">
            <div className="navbar__main__logo">
                <Image
                    src={logo}
                    alt="Verificativa"
                    className="navbar__main__logo"
                    onClick={handleGoHome}
                />
            </div>
            <div className="navbar__main__menu">
                <Menu />
            </div>
        </div>
        // </div>
    )
}
