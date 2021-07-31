import React from 'react';
import Image from 'next/image';
import brain from '../public/images/cardbennefits/brain.svg';
import desktop from '../public/images/cardbennefits/desktop.svg';
import human from '../public/images/cardbennefits/human.svg';
import clock from '../public/images/cardbennefits/clock.svg';
import circles from '../public/images/cardbennefits/circles.svg';

export function CardBennefits(props) {
	return (
		<div>
			{/* <div className="circles">
				<Image
					src={circles}
					alt="circles"
					width={200}
					automatically
					provided
					height={200}
					automatically
					provided
				/>
			</div> */}

			<div className="container-cardsbennefits">
				<h1>¿Qué beneficios ofrece Evaluativa?</h1>

				<div className="cardbennefits">
					<div className="ico-card">
						<Image
							src={desktop}
							alt="desktop"
							width={50}
							automatically
							provided
							height={50}
							automatically
							provided
						/>
						<p className="textcard">
							Como herramientas digitales de innovación tecnológica.
						</p>
					</div>
				</div>

				<div className="cardbennefits">
					<div className="ico-card">
						<Image
							src={human}
							alt="human"
							width={50}
							automatically
							provided
							height={50}
							automatically
							provided
						/>
						<p className="textcard">
							Mediante la optimización de nuestros procesos en un entorno
							digital.
						</p>
					</div>
				</div>

				<div className="cardbennefits">
					<div className="ico-card">
						<Image
							src={brain}
							alt="brain"
							width={50}
							automatically
							provided
							height={50}
							automatically
							provided
						/>
						<p className="textcard">
							En base a la ley de datos personales y políticas de
							confidencialidad.
						</p>
					</div>
				</div>

				<div className="cardbennefits">
					<div className="ico-card">
						<Image
							src={clock}
							alt="clock"
							width={50}
							automatically
							provided
							height={50}
							automatically
							provided
						/>
						<p className="textcardbennefits">
							Las 24 horas, soporte técnico y comunicación continua.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
