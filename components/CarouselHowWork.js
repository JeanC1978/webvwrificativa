import React from 'react'
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel'

import SliderImg from "../public/images/carousel-how-work/slider-static.png";
import CircleSvg from "../public/images/carousel-how-work/circle_white.svg";
import VerificaIcon from "../public/images/carousel-how-work/verifica-icon.svg";
import ReclutaIcon from "../public/images/carousel-how-work/recluta-icon.svg";
import ArrowLeftIcon from "../public/images/carousel-how-work/arrow-left.svg";
import ArrowRightIcon from "../public/images/carousel-how-work/arrow-right.svg";


export function CarouselHowWork(props) {


    return (
        <div className="carousel-how-work">
            <div className="carousel-how-work__content">
                <Carousel
                    fade
                    nextLabel={null}
                    prevLabel={null}
                    indicators={true}
                    nextIcon={<div className="next-icon"><Image src={ArrowRightIcon} /></div>}
                    prevIcon={<div className="prev-icon"><Image src={ArrowLeftIcon} /></div>}
                >
                    <Carousel.Item>
                        <div className="carousel-item-content">
                            <div className="carousel-item-content__partOne">
                                <div className="carousel-item-content__partOne__circleImg">
                                    <Image src={CircleSvg} />
                                </div>
                                <div className="carousel-item-content__partOne__content">
                                    <div className="carousel-item-content__partOne__content__text">
                                        <h1 className="text-l margin-0">Cómo trabajamos</h1>
                                        <p>Optimiza tus procesos de verificación, selección y evaluación de personas.</p>
                                    </div>
                                    <div className="carousel-item-content__partOne__content__number">
                                        <h1 className="number-xl margin-0">1</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item-content__partTwo">
                                <div className="carousel-item-content__partTwo__logo">
                                    <Image src={VerificaIcon} />
                                </div>
                                <div className="carousel-item-content__partTwo__text">
                                    <h2>Verifica datos</h2>
                                    <p>Valida la información de tus candidatos o colaboradores con nuestro informe de Verificación de Personal</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item-content">
                            <div className="carousel-item-content__partOne">
                                <div className="carousel-item-content__partOne__circleImg">
                                    <Image src={CircleSvg} />
                                </div>
                                <div className="carousel-item-content__partOne__content">
                                    <div className="carousel-item-content__partOne__content__text">
                                        <h1 className="text-l margin-0">Cómo trabajamos</h1>
                                        <p>Optimiza tus procesos de verificación, selección y evaluación de personas</p>
                                    </div>
                                    <div className="carousel-item-content__partOne__content__number">
                                        <h1 className="number-xl margin-0">2</h1>
                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item-content__partTwo">
                                <div className="carousel-item-content__partTwo__logo">
                                    <Image src={ReclutaIcon} />
                                </div>
                                <div className="carousel-item-content__partTwo__text">
                                    <h2>Recluta y selecciona</h2>
                                    <p>Elige al mejor talento con nuestras plataformas digitales, optimizando tu proceso de selección.</p>
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item-content">
                            <div className="carousel-item-content__partOne">
                                <div className="carousel-item-content__partOne__circleImg">
                                    <Image src={CircleSvg} />
                                </div>
                                <div className="carousel-item-content__partOne__content">
                                    <div className="carousel-item-content__partOne__content__text">
                                        <h1 className="text-l margin-0">Cómo trabajamos</h1>
                                        <p>Optimiza tus procesos de verificación, selección y evaluación de personas</p>
                                    </div>
                                    <div className="carousel-item-content__partOne__content__number">
                                        <h1 className="number-xl margin-0">3</h1>
                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item-content__partTwo">
                                <div className="carousel-item-content__partTwo__logo">
                                    <Image src={ReclutaIcon} />
                                </div>
                                <div className="carousel-item-content__partTwo__text">
                                    <h2>Evalúa por áreas</h2>
                                    <p>Mide la tendencia de tus candidatos a involucrarse en actos deshonestos con nuestro Test de Honestidad.</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="carousel-how-work__img">
                <Image src={SliderImg} alt="banner" layout="fill" objectFit="cover" />
            </div>

        </div>
    )
}

function CarouselHowWorkItem() {
    console.log("hello")
    return (
        <Carousel.Item>
            <div className="carousel-item-content">
                <div className="carousel-item-content__partOne">

                </div>
                <div className="carousel-item-content__partTwo">

                </div>

            </div>
        </Carousel.Item>
    )
}
