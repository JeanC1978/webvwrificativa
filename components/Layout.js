import React from 'react'
import { Navbar } from "./Navbar";

export function Layout(props) {
    console.log(props)

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}
