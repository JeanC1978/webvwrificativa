import React from 'react'
import Image from "next/image";
import Tab from 'react-bootstrap/Tab';
import { Layout } from "../components/Layout";
import { Banner } from "../components/Banner";
import { TabVertical } from "../components/TabVertical";
import { ButtonBlack } from "../components/ButtonBlack";

//imagenes
import seleccionBanner from "../public/images/pages/seleccion-banner.png";
import seleccionIcon from "../public/images/pages/seleccion-icon.svg";
import CheckIcon from "../public/images/pages/check.svg";
import ImgOne from "../public/images/pages/seleccion-tab-1.png";
import ImgTwo from "../public/images/pages/seleccion-tab-2.png";
import ImgThree from "../public/images/pages/seleccion-tab-3.png";

//CSS: page_seleccion.scss

const TITLE = "Selección por tipos de mando";
const SUBTITLE = "De acuerdo al perfil que necesitas elegimos al mejor talento";
const text = "Elige al mejor talento, optimizando procesos con nuestras plataformas de innovación tecnológica."


const SELECTION_TYPE_COMMAND_TAB = [
    {
        id: "1", eventKey: "first", title: "Gerenciales Head Hunting", description: "Enfocado en la búsqueda directa de ejecutivos de alta gerencia, jefaturas y posiciones especializadas.", img: ImgOne,
        list: [
            { text: "Análisis del perfil del puesto" },
            { text: "Entendimiento de la cultura organizacional" },
            { text: "Reclutamiento 4.0" },
            { text: "Verificación de personal" },
            { text: "Assessment center" },
            { text: "Entrevista por competencias" },
            { text: "Informe de terna final" },
        ]
    },
    {
        id: "2", eventKey: "second", title: "Mandos Medios", description: "Dirigido a la búsqueda del mejor talento para puestos de mando medio, técnicos especializados y personal de soporte.", img: ImgTwo,
        list: [
            { text: "Levantamiento cultural y de perfil" },
            { text: "Reclutamiento 4.0" },
            { text: "Verificación de personal" },
            { text: "Entrevista por competencias" },
            { text: "Entrevista técnica" },
            { text: "Entrevista Evaluaciones on-line" },
            { text: "Presentación de terna final y Onboarding" },
        ]
    },
    {
        id: "3", eventKey: "third", title: "Masivos Operarios", description: "Cubrimos la necesidad de reclutamiento masivo-continuo de operarios bajo un “esquema cíclico”, ágil y seguro.", img: ImgThree,
        list: [
            { text: "Levantamiento de perfil del puesto" },
            { text: "Reclutamiento de personal" },
            { text: "Verificación de personal" },
            { text: "Concocatoria de candidatos" },
            { text: "Evalauciones on-line" },
            { text: "Informe y presentacion de candidatos" },
        ]
    },
]

export default function Seleccion(props) {

    return (
        <Layout>
            <Banner title="Selección" icon={seleccionIcon} description={text} bannerImg={seleccionBanner} />
            {/* <div className="section-tab"> */}
            <div className="seleccion-tab-container">
                <TabVertical title={TITLE} subtitle={SUBTITLE} defaultActiveKey="first">
                    {
                        SELECTION_TYPE_COMMAND_TAB.map(item => (
                            <Tab eventKey={item.eventKey} title={item.title} key={item.id}>
                                <div className="seleccion-tab-item">
                                    <div className="seleccion-tab-item__columnOne">
                                        <p>{item.description}</p>
                                        <ButtonBlack>Comunícate con un asesor</ButtonBlack>
                                    </div>
                                    <div className="seleccion-tab-item__columnTwo">
                                        <div className="seleccion-tab-item__columnTwo__list">
                                            {item.list.map((subItem) => (
                                                <div className="item-list">
                                                    <Image src={CheckIcon} />
                                                    <p>{subItem.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="seleccion-tab-item__columnTwo__img">
                                            <Image src={item.img} />
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        ))
                    }
                </TabVertical>
            </div>
            {/* </div> */}
        </Layout>
    )
}