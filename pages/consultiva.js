import React from 'react'
//components
import Image from "next/image";
import Tab from 'react-bootstrap/Tab'
import { Layout } from "../components/Layout";
import { Banner } from "../components/Banner";
import { TabVertical } from "../components/TabVertical";
import { TabContainer } from "../components/TabContainer";
import { AvatarWithBg } from "../components/AvatarWithBg";
import { TextSolutionseconsult } from '../components/TextSolutionseconsult';

//Images
import consultivaBanner from "../public/images/consultiva/consultiva-banner.png";
import consultivaIco from "../public/images/consultiva/consultiva-icon.svg";
import AvatarOne from "../public/images/consultiva/avatar-1.png";

import tabImgOne from "../public/images/pages/consultiva-tab-1.png";
import tabImgTwo from "../public/images/pages/consultiva-tab-2.png";
import tabImgThree from "../public/images/pages/consultiva-tab-3.png";
import tabImgFour from "../public/images/pages/consultiva-tab-4.png";
import tabImgFive from "../public/images/pages/consultiva-tab-5.png";

const text = "Capacitaciones y programas con metodologías ágiles diseñados para potenciar el talento de tus colaboradores."

const ATTENTION_CLIENT_ITEMS = [
    { id: "1", eventKey: "first", title: "El dinero nunca duerme", description: "Identificamos y desarrollamos habilidades para lograr la sinergia del equipo y aumentar la productividad.", duracion: "2 horas", img: tabImgFour },
    { id: "2", eventKey: "second", title: "Piensa como cliente", description: "Identificamos y desarrollamos habilidades para lograr la sinergia del equipo y aumentar la productividad.", duracion: "2 horas", img: tabImgFive },
    { id: "3", eventKey: "third", title: "Negociación 360°", subTitle: "Entrenamiento en Atencion al cliente", description: "Identificamos y desarrollamos habilidades para lograr la sinergia del equipo y aumentar la productividad.", duracion: "2 horas", img: tabImgThree },
]

const SOFT_SKILLS_ITEMS = [
    { id: "1", eventKey: "first", title: "Programa CULTUS", description: "Identificamos y desarrollamos habilidades para lograr la sinergia del equipo y aumentar la productividad.", img: tabImgOne },
    { id: "2", eventKey: "second", title: "Lidérate", description: "Identificamos y desarrollamos habilidades para lograr la sinergia del equipo y aumentar la productividad.", img: tabImgTwo },
    { id: "3", eventKey: "third", title: "Todos somos uno", description: "Identificamos y desarrollamos habilidades para lograr la sinergia del equipo y aumentar la productividad.", img: tabImgThree },
]

const WHO_EXPOSE = [
    { name: "Javier Lauz", description: "Fundador del área de Servicio al cliente en Wong.", img: AvatarOne },
    { name: "Patricia Cáceres", description: "Consultora en Cultura organizacional.", img: AvatarOne },
    { name: "Cecilia Rojas", description: "Especialista en Gestion Comercial y ventas.", img: AvatarOne },
    { name: "Melisa Palomino", description: "Especialista en Experiencia de Cliente.", img: AvatarOne },
]

const TITLE = "Entrenamiento en:"

export default function Consultiva() {

    return (
        <Layout>
            <Banner title="Consultiva" icon={consultivaIco} description={text} bannerImg={consultivaBanner} />
            <TextSolutionseconsult />
            <TabVertical title={TITLE} defaultActiveKey="attention">
                <Tab eventKey="attention" title="Atención al Cliente">
                    <div className="attention-client-tab">
                        <TabContainer navItems={ATTENTION_CLIENT_ITEMS} buttonText="Comunícate con un asesor" id="attention-client-tabs" defaultActiveKey="first">
                            {
                                ATTENTION_CLIENT_ITEMS.map(item => (
                                    <Tab.Pane eventKey={item.eventKey} key={item.id}>
                                        <div className="item-card-tab">
                                            <div className="item-card-tab__text">
                                                {
                                                    item?.subTitle &&
                                                    <h2 className="subtitle">{item.subTitle}</h2>
                                                }
                                                <h1>{item.title}</h1>
                                                <p>{item.description}</p>
                                                <p><b>Duracion: </b>{item.duracion}</p>
                                            </div>
                                            <div className="item-card-tab__img">
                                                <Image src={item.img} />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                ))
                            }
                        </TabContainer>
                    </div>
                </Tab>
                <Tab eventKey="skills" title="Habilidades Blandas">
                    <div className="soft-skills-tab">
                        <TabContainer navItems={SOFT_SKILLS_ITEMS} id="soft-skilss-tabs" defaultActiveKey="first">
                            {
                                SOFT_SKILLS_ITEMS.map(item => (
                                    <Tab.Pane eventKey={item.eventKey} key={item.id}>
                                        <div className="item-card-tab">
                                            <div className="item-card-tab__text">
                                                <h1>{item.title}</h1>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="item-card-tab__img">
                                                <Image src={item.img} />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                )
                                )
                            }
                        </TabContainer>
                    </div>
                </Tab>
            </TabVertical>
            <div className="section_who_expose">
                {
                    WHO_EXPOSE.map(item => (
                        <div className="section_who_expose__card" key={item.id}>
                            <AvatarWithBg img={item.img} />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}
