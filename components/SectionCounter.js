import React, { useRef, useState } from 'react';
import { ModalDemo } from '../components/ModalDemo';

//Components
import Image from "next/image";
import { ButtonBlack } from "./ButtonBlack";

//images
import CounterImg from "../public/images/counter-img.png";

//hooks
import { useIntersectionObserver } from "../lib/hooks/useIntersectionObserver";

export function SectionCounter(props) {
    const [openModal, setOpenModal] = useState(false)
    const elementRef = useRef(null);
    const [inView, entry] = useIntersectionObserver(elementRef, { threshold: 0 });

    const handleClick = () => {
        setOpenModal(true)
    }

    return (
        <div className="section-counter" ref={elementRef}>
            <div className="section-counter__img">
                <Image src={CounterImg} />
            </div>
            <div className="section-counter__content">
                <div >
                    <h1 className={`title-azul ${inView ? 'cliente-counter' : ''}`}></h1>
                    <p className="text-azul">Clientes</p>
                    <div className="section-counter__content__text">
                        <h1 className={`title-azul ${inView ? "test-counter" : ''}`}></h1>
                        <h1 className="title-azul">K</h1>
                    </div>
                    <p className="text-azul">Evaluaciones realizadas</p>
                    <div className="section-counter__content__text">
                        <h1 className={`title-azul ${inView ? "users-counter" : ''}`}></h1>
                        <h1 className="title-azul">M</h1>
                    </div>
                    <p className="text-azul">Servicios satisfechos</p>
                </div>
                <div className="section-counter__content__button">
                    <ButtonBlack onClick={handleClick}>Solicita una demo</ButtonBlack>
                </div>
            </div>
            <ModalDemo showModal={openModal} handleClose={() => setOpenModal(false)} />
        </div>
    )
}
