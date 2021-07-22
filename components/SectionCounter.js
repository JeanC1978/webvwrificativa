import React from 'react'
import Image from "next/image";
import CounterImg from "../public/images/counter-img.png";
import { ButtonBlack } from "./ButtonBlack";

export function SectionCounter(props) {


    return (
        <div className="section-counter">
            <div className="section-counter__img">
                <Image src={CounterImg} />
            </div>
            <div className="section-counter__content">
                <div>
                    <h1 className="title-azul cliente-counter"></h1>
                    <p className="text-azul">Clientes</p>
                    <div className="section-counter__content__text">
                        <h1 className="title-azul test-counter"></h1>
                        <h1 className="title-azul">K</h1>
                    </div>
                    <p className="text-azul">Evaluaciones realizadas</p>
                    <div className="section-counter__content__text">
                        <h1 className="title-azul users-counter"></h1>
                        <h1 className="title-azul">M</h1>
                    </div>
                    <p className="text-azul">Servicios satisfechos</p>
                </div>
                <div className="section-counter__content__button">
                    <ButtonBlack>Solicita una demo</ButtonBlack>
                </div>
            </div>
        </div>
    )
}
