import React from 'react'
import { useRouter } from 'next/router'

const PATH_FIVE = "/five"
const SUB_MENU_FIVE = ["/evaluativa", "/seleccion", "/verificacion"]

export function ActiveLink({ children, path, ...props }) {
    const router = useRouter()

    const classes = () => {
        if (SUB_MENU_FIVE.includes(router.asPath) && path === PATH_FIVE) {
            return "active_link"
        }
        else if (router.asPath === path) return "active_link"
        else return ""
    }

    return (
        <li className={`menuList__item ${classes()}`} {...props}>
            {children}
        </li>
    )
}
