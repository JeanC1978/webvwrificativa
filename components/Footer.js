import React from 'react'
import Image from 'next/image'
import fb from '../public/images/fb.svg'
import linkedin from '../public/images/lnkin.svg'
import youtube from '../public/images/youtube.svg'
import logo_foot from '../public/images/logo_foot.svg'
import call_ico from '../public/images/call_ico.svg'
import home_ico from '../public/images/home_ico.svg'
import mail_ico from '../public/images/mail_ico.svg'
export function Footer(props) {


    return (


        <div className="footer">
            <div className="logo-f">

                <Image
                    src={logo_foot}
                    alt="verificativa"
                    width={100} automatically provided
                    height={50} automatically provided
                />

            </div>

            <div className="slogan">Elegir personal confiable, no es <br></br> cuestión de suerte</div>
            <div className="redes">
                <Image
                    src={fb}
                    alt="facebook"
                    width={50} automatically provided
                    height={50} automatically provided

                />

                <Image
                    src={linkedin}
                    alt="linkedin"
                    width={50} automatically provided
                    height={50} automatically provided
                />

                <Image
                    src={youtube}
                    alt="youtube"
                    width={50} automatically provided
                    height={50} automatically provided
                />

            </div>
            <div className="containersecciones">
                <ul className="secciones">
                    <li className="Ini">Inicio</li>
                    <li className="Five">Five

                        <ul className="t-thin">Selección</ul>
                        <ul className="t-thin">Verificación</ul>
                        <ul className="t-thin">Evaluativa</ul>

                    </li>
                    <li className="Cons">Consultiva</li>
                    <li className="t-bold">Operativa</li>
                    <li className="t-bold">Blog</li>
                </ul>
            </div>

            <div className="contactoymail">

                <li className="dcontact">Datos de contacto
                    <div className="ico_inline">
                        <Image
                            src={call_ico}
                            alt="call_ico"
                            width={25} automatically provided
                            height={25} automatically provided
                        />

                        <ul className="t-thin">
                            (01) 247-2829 / 923 890 165</ul>

                    </div>

                    <div className="ico_inline">
                        <Image className="margin_ico"
                            src={home_ico}
                            alt="home_ico"
                            width={25} automatically provided
                            height={25} automatically provided
                        />

                        <ul className="t-thin">Jr. Alfonso Ugarte 235, Of.103, Barranco</ul>
                    </div>
                </li>


                <div className="mail">
                    <div className="ico_inline">
                        <Image
                            src={mail_ico}
                            alt="mail_ico"
                            width={25} automatically provided
                            height={25} automatically provided
                        />

                        <ul className="t-thin">comercial@verificativa.com</ul>
                    </div>
                </div>
            </div>
        </div>


    )
}



