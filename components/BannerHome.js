import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button'
import { ButtonBlack } from "./ButtonBlack";

//images
import MenBrown from "../public/images/banner-img/men_brown.png";
import MenSky from "../public/images/banner-img/men_sky.png";
import WomenSky from "../public/images/banner-img/women_sky.png";
import banner from '../public/images/banner-img/banner01.png';

export function BannerHome() {

    return (
        <div className="banner">
            <div className="banner__columnOne">
                <div className="banner__columnOne__content">
                    <h1>Elegir personal confiable, no es cuestión de suerte</h1>
                    <ButtonBlack>Solicita una demo</ButtonBlack>
                </div>
            </div>
            <div className="banner__columnTwo">
                <div className="banner__columnTwo__bg"></div>
                <div className="banner__columnTwo__img">
                    <Image src={banner} alt="banner" layout="fill" objectFit="cover" />
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
