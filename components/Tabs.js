import React from 'react'
import Image from "next/image";
import Link from "next/link";
//componentes
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'

//images
import FiveSvg from "../public/images/tabs-img/five.svg";
import ConsultivaSvg from "../public/images/tabs-img/consultiva.svg";
import OperativaSvg from "../public/images/tabs-img/operativa.svg";

export function CustomTabs({ title = "Selección por tipos de mando", subtitle = "De acuerdo al perfil que necesitas elegimos al mejor talento." }) {

    const imgFive = <Image src={FiveSvg} alt="tab Five" />
    const imgConsultiva = <Image src={ConsultivaSvg} alt="tab Five" />
    const imgOperativa = <Image src={OperativaSvg} alt="tab Five" />

    return (
        <div className="tabs-container">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="tabs-container__main">
                {/* <Tabs defaultActiveKey="five" id="verificativa-tabs" className="mb-3">
                    <Tab eventKey="five" title={imgFive} tabClassName="nav-five">
                        <h1>Hola 1</h1>
                    </Tab>
                    <Tab eventKey="consultiva" title={imgConsultiva}>
                        <h1>Hola 2</h1>
                    </Tab>
                    <Tab eventKey="operativa" title={imgOperativa}>
                        <h1>Hola 3</h1>
                    </Tab>
                </Tabs> */}
            </div>
        </div>
    )
}
