import React from 'react';
import Image from 'next/image';
import { Title } from "./Title";

import desktop from '../public/images/cardbennefits/desktop.svg';
import human from '../public/images/cardbennefits/human.svg';
import brain from '../public/images/cardbennefits/brain.svg';
import clock from '../public/images/cardbennefits/clock.svg';
import circles from '../public/images/cardbennefits/circles.svg';

const CARDS = [
	{ id: 0, icon: desktop, description: "Acceso en cualquier momento, por teléfono, celular o pc." },
	{ id: 0, icon: human, description: "Evaluaciones por adecuaciones de perfil o puesto." },
	{ id: 0, icon: brain, description: "Reducción de hasta 70% del proceso de trabajo operativo." },
	{ id: 0, icon: clock, description: "Asistencia y soporte a disposición online las 24 horas." },
]

export function CardBennefits(props) {
	return (
		<div className="section-bennefits">
			<Title>¿Qué beneficios ofrece Evaluativa?</Title>
			<div className="container-cards-bennefits">
				{
					CARDS.map(item => (
						<div className="container-cards-bennefits__card" key={item.id}>
							<div className="card-ico">
								<Image src={item.icon} alt="icon" />
							</div>
							<p className="card-description">{item.description}</p>
						</div>
					))
				}
			</div>
		</div>

	);
}
