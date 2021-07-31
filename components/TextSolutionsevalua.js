import React from 'react';
import Image from 'next/image';
import points_iz from '../public/images/slidercliente/points_iz.svg';
import points_der from '../public/images/slidercliente/points_der.svg';

export function TextSolutionsevalua(props) {
	return (
		<div className="textcontainer">
			<p className="p1">Conoce nuestra solución</p>
			<p className="p2">
				“La sinergia entre las personas, el talento y la tecnología”
			</p>
			<p className="p3">
				Mediante nuestra Plataforma Evaluativa realizamos el{' '}
				<strong>Test de Integridad y Honestidad, </strong>filtro importante para
				prevenir riesgos de contratación.
			</p>

			<div className="onepointderecha">
				<Image
					src={points_iz}
					alt="pintizquierda"
					width={120}
					automatically
					provided
					height={130}
					automatically
					provided
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
					automatically
					provided
				/>
			</div>
		</div>
	);
}
