import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image";
import { ActiveLink } from "./ActiveLink";
import { CustomModal } from "./Modal";
import arrowDown from "../public/images/arrow-down.svg";
import menuIco from "../public/images/hamburger_ico.svg";

const MENU_LIST = [
    { id: "inicio", name: "Inicio", submenu: false, path: "/" },
    { id: "five", name: "Five", submenu: true, path: "/five" },
    { id: "consultiva", name: "Consultiva", submenu: false, path: "/consultiva" },
    { id: "operativa", name: "Operativa", submenu: false, path: "/operativa" },
    { id: "blog", name: "Blog", submenu: false, path: "/blog" },
]

const PATH_FIVE = "/five"

export function Menu() {
    const [showModal, setShowModal] = useState(false)

    const hanldeShowModal = () => {
        setShowModal(true)
    }

    return (
        <div className="container-menuList">
            <ul className="menuList">
                {
                    MENU_LIST.map(item => (
                        <ActiveLink key={item.id} path={item.path}>
                            {
                                item.path === PATH_FIVE ?
                                    <div className="btn_five" onClick={hanldeShowModal}>
                                        <span>{item.name}</span>
                                        <Image
                                            src={arrowDown}
                                            alt="ver submenu">
                                        </Image>
                                    </div>
                                    :
                                    <Link href={item.path}>
                                        <a>{item.name}</a>
                                    </Link>
                            }
                        </ActiveLink>)
                    )
                }
            </ul>
            <span className="btn_menu">
                <Image src={menuIco} alt="Menu">
                </Image>
            </span>
            <CustomModal showModal={showModal} fullscreen="xl-down" handleClose={() => setShowModal(false)} />
        </div>
    )
}
