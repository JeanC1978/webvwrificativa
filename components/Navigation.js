import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import EvaluativaIcon from "../public/images/menu-icons/evaluativa_link.svg";
import VerificacionIcon from "../public/images/menu-icons/verificacion_link.svg";
import SeleccionIcon from "../public/images/menu-icons/seleccion_link.svg";

export function Navigation({ prev, next }) {

    const getNavigation = (data) => {
        switch (data) {
            case "verificacion":
                return <Image src={VerificacionIcon} />
            case "evaluativa":
                return <Image src={EvaluativaIcon} />
            case "seleccion":
                return <Image src={SeleccionIcon} />
            default:
                return "Home"
        }
    }

    return (
        <div className="navigation">
            <Link href={`/${prev}`}>
                <div className="navigation__prev">
                    <h3>{getNavigation(prev)}</h3>
                </div>
            </Link>
            <Link href={`/${next}`}>
                <div className="navigation__next">
                    <h3>{getNavigation(next)}</h3>
                </div>
            </Link>
        </div>
    )
}
