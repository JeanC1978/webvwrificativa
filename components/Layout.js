import React from 'react'
import { Navbar } from "./Navbar";

export function Layout(props) {

    return (
        <Navbar>
            {props.children}
        </Navbar>
    )
}
