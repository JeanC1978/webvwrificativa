import React from 'react'
import Image from "next/image";
import Link from "next/link";
//componentes
import Tabs from 'react-bootstrap/Tabs'
import { Title } from './Title'

//CSS:tab_horizontal.scss

export function TabVertical({ title, subtitle = null, defaultActiveKey, children }) {

    return (
        <div className="section-tabs">
            <Title>{title}</Title>
            {subtitle && <p>{subtitle}</p>}
            <div className="section-tabs__container">
                <Tabs defaultActiveKey={defaultActiveKey} id="verificativa-tabs" className="mb-3" fill>
                    {children}
                </Tabs>
            </div>
        </div>
    )
}
