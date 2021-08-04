import React from 'react'
import Image from "next/image";
import ArrowLeftIcon from "../public/images/blog/arrow-left-icon.svg";
import { useRouter } from 'next/router'

export function BannerBlog({ title = null, icon, buttonGoBack = null }) {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    }

    return (
        <div className="banner-blog">
            <div className="banner-blog__columnOne">
                {
                    title &&
                    <div className="banner-blog__columnOne__title">
                        <Image src={icon} alt="" />
                        <h1>{title}</h1>
                    </div>
                }
                {
                    buttonGoBack &&
                    <div className="banner-blog__columnOne__containerButton">
                        <div className="banner-blog__columnOne__containerButton__goBack" onClick={handleGoBack}>
                            <Image src={ArrowLeftIcon} alt="" />
                            <p>Volver</p>
                        </div>
                    </div>
                }
            </div>
            <div className="banner-blog__columnTwo">
                <div className="banner-blog__columnTwo__bg"></div>
            </div>
        </div>
    )
}
