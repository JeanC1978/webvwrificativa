import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button'
import MenBrown from "../public/images/banner-img/men_brown.png";
import MenSky from "../public/images/banner-img/men_sky.png";
import WomenSky from "../public/images/banner-img/women_sky.png";
import CicleSvg from "../public/images/banner-img/circle.svg";

export function Banner({ img }) {

    return (
        <div className="banner">
            <div className="banner__columnOne">
                <div className="banner__columnOne__content">
                    <h1>Elegir personal confiable, no es cuestión de suerte</h1>
                    <Button variant="primary">Solicita una demo</Button>
                </div>
            </div>
            <div className="banner__columnTwo">
                <div className="banner__columnTwo__bg"></div>
                <div className="banner__columnTwo__img">
                    <Image src={img} alt="banner" />
                </div>
                <div className="banner__columnTwo__peopleImgs">
                    <div className="peopleImg__one">
                        <Image src={MenBrown} alt="men brow" />
                    </div>
                    <div className="peopleImg__two">
                        <Image src={WomenSky} alt="women sky" />
                    </div>
                    <div className="peopleImg__three">
                        <Image src={MenSky} alt="men sky" />
                    </div>
                    {/* <div className="circleImg__four">
                        <Image src={CicleSvg} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
