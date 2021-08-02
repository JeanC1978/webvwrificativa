import React from 'react'
import Image from "next/image";
import PointSVG from "../public/images/page-seleccion/point.svg";
import CheckSVG from "../public/images/page-seleccion/check-icon.svg";

export function SectionOurSolutions({ title, subtitle = null, description, card = null }) {


    return (
        <div className={`section-our-solutions ${card ? 'grid-card' : ''}`}>
            <div className="section-our-solutions__pointStart">
                <Image src={PointSVG} />
            </div>
            <div className="section-our-solutions__content">
                <h1>{title}</h1>
                {
                    subtitle &&
                    <h4>{subtitle}</h4>
                }
                <p>{description}</p>
            </div>
            {
                card &&
                <div className="section-our-solutions__card">
                    <div className="section-our-solutions__card__icon">
                        <Image src={CheckSVG} />
                    </div>
                    <div className="section-our-solutions__card__text">
                        <p>Nuestros servicios se encuentran contemplados dentro de nuestro Marco Jurídico basado en la <b>Ley Protección de Datos Personales Nº 29733</b> como respaldo y garantía para protección de nuestros clientes.</p>
                    </div>
                </div>
            }
            <div className="section-our-solutions__pointFinish">
                <Image src={PointSVG} />
            </div>

        </div>
    )
}
