import React from 'react';
import Image from 'next/image';
import points_iz from '../public/images/slidercliente/points_iz.svg';
import points_der from '../public/images/slidercliente/points_der.svg';
import check from '../public/images/textsolutionsblue/check.svg';

export function Textsolutionsblue(props) {
	return (
		<div className="textcontainerblue">
			<p className="p1b">Conoce nuestra solución</p>
			<p className="p2b">
				Contamos con más de 1&apos;000.000.00 de consultas realizadas a nivel nacional, a través de nuestros Filtros de Verificación.
			</p>
			<div className="containerblue">
				<div className="checks">
					<Image
						src={check}
						alt="check"
						width={100}
						automatically
						provided
						height={100}
					/>
				</div>
				<p className="p4b">
					Nuestros servicios se encuentran contemplados dentro de nuestro Marco Jurídico basado en la{' '}
					<strong>Ley Protección de Datos Personales Nº 29733</strong> como respaldo y garantía para protección de nuestros clientes.
				</p>
			</div>

			<div className="onepointder">
				<Image
					src={points_iz}
					alt="pintizquierda"
					width={120}
					automatically
					provided
					height={130}
				/>
			</div>
			<div className="twopointder">
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
