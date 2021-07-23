import React from 'react';
import Image from 'next/image';

import isotipoazul from '../public/images/dimensiones/isotipoazul.png';
import man from '../public/images/dimensiones/man.png';
import girl from '../public/images/dimensiones/girl.png';

export function Dimensiones(props) {
	return (
		<div className="dimension">
			<div className="grilla-dimension">
				<div className="isotipo">
					<Image src={isotipoazul} alt="isotipo" />
				</div>
				<div className="man">
					<Image src={man} alt="man" />
				</div>
				<div className="girl">
					<Image src={girl} alt="girl" />
				</div>
				<div className="circle2"></div>
				<div className="circle1"></div>

				<div className="circle3"></div>
				<div className="titulo0">
					<h1>Dimensiones del test</h1>
				</div>
				<div className="titulo titulo1">
					<h1>1</h1>
					<p>Nivel de honestidad</p>
				</div>
				<div className="titulo titulo2">
					<h1>2</h1>
					<p>Riesgo de hurto</p>
				</div>
				<div className="titulo titulo3">
					<h1>3</h1>
					<p>Cumplimiento de normas</p>
				</div>
				<div className="titulo titulo4">
					<h1>4</h1>
					<p>Nivel de lealtad</p>
				</div>
				<div className="titulo titulo5">
					<h1>5</h1>
					<p>Grado de violencia</p>
				</div>
				<div className="titulo titulo6">
					<h1>6</h1>
					<p>Consumo de sustancias</p>
				</div>
			</div>
		</div>
	);
}
