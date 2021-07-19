import React from 'react'
import Image from 'next/image'
import laptop_ico from '../public/images/laptop_ico.svg'
import upgrade_ico from '../public/images/upgrade_ico.svg'
import protect_ico from '../public/images/protect_ico.svg'
import brinda_ico from '../public/images/brinda_ico.svg'
export function Card(props) {
    return (
        <div className="container-cards">

            <div className="card">
                <div className="ico-card">
                    <Image
                        src={laptop_ico}
                        alt="laptop_ico"
                        width={50} automatically provided
                        height={50} automatically provided
                    />
                    <h2>
                        Usamos plataformas ágiles
                    </h2>
                    <p>
                        Como herramientas digitales de innovación tecnológica.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="ico-card">
                    <Image
                        src={upgrade_ico}
                        alt="upgrade_ico"
                        width={50} automatically provided
                        height={50} automatically provided
                    />
                    <h2>
                        Reducimos <br></br> tiempo y<br></br>
                        costos
                    </h2>
                    <p>
                        Mediante la optimización de nuestros procesos en un entorno digital.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="ico-card">
                    <Image
                        src={protect_ico}
                        alt="protect_ico"
                        width={50} automatically provided
                        height={50} automatically provided
                    />
                    <h2>
                        Protegemos el<br></br>
                        uso de información
                    </h2>
                    <p>
                        En base a la ley de datos personales y políticas de confidencialidad.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="ico-card">
                    <Image
                        src={brinda_ico}
                        alt="brinda_ico"
                        width={50} automatically provided
                        height={50} automatically provided
                    />
                    <h2>
                        Brindamos soporte y <br></br>atención
                    </h2>
                    <p>
                        Las 24 horas, soporte técnico y comunicación continua.
                    </p>
                </div>
            </div>

        </div>





    )
}