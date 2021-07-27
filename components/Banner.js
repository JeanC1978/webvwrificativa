import React, { useState } from 'react'
import Image from 'next/image';
//components
import { Card } from "./Card";

//images
import ArrowDownIcon from '../public/images/consultiva/arrow-down-icon.svg';
import PlusIcon from '../public/images/consultiva/plus-icon.svg';

export function Banner({ title = "Selección", description = text, icon, bannerImg }) {
    const [isActive, setIsActive] = useState(false)

    const classes = isActive ? "banner-main-height" : ""

    return (
        <div className={`${isActive ? "banner-container-height" : ""}`}>
            <div className={`banner-main ${classes}`}>
                <div className="banner-main__columnOne">
                    <div className="banner-main__columnOne__title">
                        <div><Image src={icon} alt="banner" /></div>
                        <h1>{title}</h1>
                    </div>
                    <p>{description}</p>
                    <div><Image src={ArrowDownIcon} /></div>
                </div>
                <div className="banner-main__columnTwo">
                    <div className="banner-main__columnTwo__bg"></div>
                    <div className={`banner-main__columnTwo__img ${classes}`}>
                        <Image src={bannerImg} alt="banner" layout="fill" objectFit="cover" />
                    </div>
                    <div className="banner-main__columnTwo__button" onClick={() => setIsActive(true)}>
                        <h4>Por qué elegirnos</h4>
                        <Image src={PlusIcon} />
                    </div>
                </div>
                {
                    isActive &&
                    <div className="banner-cards">
                        <Card />
                    </div>
                }
            </div>
        </div>
    )
}