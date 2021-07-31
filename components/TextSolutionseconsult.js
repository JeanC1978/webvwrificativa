import React from 'react';
import Image from 'next/image';
import points_iz from '../public/images/slidercliente/points_iz.svg';
import points_der from '../public/images/slidercliente/points_der.svg';

export function TextSolutionseconsult(props) {
	return (
		<div className="textcontainertsc">
			<p className="tsc1">Conoce nuestra solución</p>
			<p className="tsc2">
				“Tus colaboradores son los Embajadores de tu Marca”
			</p>
			<p className="tsc3">
				Potenciamos tu marca a través de tus colaboradores, entrenándolos para
				ser más competitivos y crear valor diferencial para tus clientes.
			</p>

			<div className="onepointderechatsc">
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
			<div className="twopointderechatsc">
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
