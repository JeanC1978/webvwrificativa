import React from 'react'
import Image from "next/image";
import Tab from 'react-bootstrap/Tab'
import { Layout } from "../components/Layout";
import { Banner } from "../components/Banner";
import { TabContainer } from "../components/TabContainer";

//Images
import verificacionBanner from "../public/images/pages/verificacion-banner.png";
import verificacionIcon from "../public/images/pages/verificacion-icon.svg";
import tabImgOne from "../public/images/pages/verificacion-tab-1.png";
import tabImgTwo from "../public/images/pages/verificacion-tab-2.png";
import tabImgThree from "../public/images/pages/verificacion-tab-3.png";
import tabImgFour from "../public/images/pages/verificacion-tab-4.png";
import tabImgFive from "../public/images/pages/verificacion-tab-5.png";

//CSS: verificacion.scss

const SERVICE_VERIFICATIONS_ITEMS = [
    { id: "1", eventKey: "first", title: "Filtros Personales a Nivel Nacional", description: "Verifica los datos personales de tus postulantes y colaboradores, generando reportes con estimaciones de riesgos, responsabilidad y confiabilidad, para evitar cualquier tipo de contingencia a través de un proceso seguro.", duracion: "2 horas", img: tabImgOne },
    { id: "2", eventKey: "second", title: "Domiciliarias a Nivel Nacional", description: "Verifica la existencia del inmueble confirmando si la persona habita en la dirección consignada en sus datos, con alcance de visitas y muestras fotográficas realizadas en Lima y provincias.", duracion: "2 horas", img: tabImgTwo },
    { id: "3", eventKey: "third", title: "Laborales y Académicas", description: "Orientada a verificar los datos consignados por el postulante, generando reportes de información laboral y académica, como score de desempeño, títulos y otros complementarios.", duracion: "2 horas", img: tabImgThree },
    { id: "4", eventKey: "four", title: "Crediticias y Financiara", description: "Consigna toda la información del comportamiento crediticio y comercial, a nivel personal o empresarial, mediante reporte financiero y otros complementarios en Lima y provincias.", duracion: "2 horas", img: tabImgFour },
    { id: "5", eventKey: "five", title: "PLAFT", description: "Orientada a determinar operaciones sospechosas para oficiales de cumplimiento y funcionarios dentro de sus responsabilidades", duracion: "2 horas", img: tabImgFive },
]

export default function Verificacion() {

    const text = "Valida la información de tus postulantes y colaboradores con nuestras verificaciones de personal."
    return (
        <Layout>
            <Banner title="Selección" icon={verificacionIcon} description={text} bannerImg={verificacionBanner} />
            <div className="verification-tab-container">
                <div className="verification-tab-container__content">
                    <h1>Servicio de Verificaciones</h1>
                    <TabContainer navItems={SERVICE_VERIFICATIONS_ITEMS} buttonText="Solicita una demo" id="service-verification-tabs" defaultActiveKey="first">
                        {
                            SERVICE_VERIFICATIONS_ITEMS.map(item => (
                                <Tab.Pane eventKey={item.eventKey} key={item.id}>
                                    <div className="verificacion-tab-item">
                                        <h2>Verificaciónes {item.id == 1 ? "de" : ""}</h2>
                                        <h1>{item.title}</h1>
                                        <div>
                                            <Image src={item.img} />
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                </Tab.Pane>
                            ))
                        }
                    </TabContainer>
                </div>
            </div>
        </Layout>
    )
}