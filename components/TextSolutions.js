import React from 'react';
import Image from 'next/image';
import points_iz from '../public/images/slidercliente/points_iz.svg';
import points_der from '../public/images/slidercliente/points_der.svg';

export function Textsolutions(props) {
	return (
		<div className="textcontainer">
			<p className="p1">Conoce nuestra solución</p>
			<p className="p2">“Potenciamos tu recurso humano con el mejor talento”</p>
			<p className="p3">
				Desarrollamos soluciones innovadoras optimizando tus procesos de
				reclutamiento y selección a través de la experiencia de nuestro equipo
				de consultores y nuestras plataformas de innovación tecnológica para
				elegir al mejor talento.
			</p>

			<div className="onepointderecha">
				<Image
					src={points_iz}
					alt="pintizquierda"
					width={120}
					automatically
					provided
					height={130}
				/>
			</div>
			<div className="twopointderecha">
				<Image
					src={points_der}
					alt="pointder"
					width={120}
					automatically
					provided
					height={130}
				/>
			</div>
		</div>
	);
}
