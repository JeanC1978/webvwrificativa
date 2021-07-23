import React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import alicorp from '../public/images/logo-clientes/alicorp.png';
import bmw from '../public/images/logo-clientes/bmw.png';
import citibank from '../public/images/logo-clientes/citibank.png';
import jockey from '../public/images/logo-clientes/jockey.png';
import ripley from '../public/images/logo-clientes/ripley.png';
import sodexo from '../public/images/logo-clientes/sodexo.png';

export function SliderLogos(props) {
	return (
		<div className="caja">
			<div className="f1"></div>
			<div className="f2"></div>
			<div className="slider">
				<div className="slide-track">
					<div className="logos-continuo">
						<Image src={alicorp} alt="alicorp" />
					</div>
					<div className="logos-continuo">
						<Image src={bmw} />
					</div>
					<div className="logos-continuo">
						<Image src={citibank} />
					</div>
					<div className="logos-continuo">
						<Image src={jockey} />
					</div>
					<div className="logos-continuo">
						<Image src={ripley} />
					</div>
					<div className="logos-continuo">
						<Image src={sodexo} />
					</div>
					<div className="logos-continuo">
						<Image src={alicorp} />
					</div>
					<div className="logos-continuo">
						<Image src={bmw} />
					</div>
					<div className="logos-continuo">
						<Image src={citibank} />
					</div>

					{/* doubled */}

					<div className="logos-continuo">
						<Image src={alicorp} />
					</div>
					<div className="logos-continuo">
						<Image src={bmw} />
					</div>
					<div className="logos-continuo">
						<Image src={citibank} />
					</div>
					<div className="logos-continuo">
						<Image src={jockey} />
					</div>
					<div className="logos-continuo">
						<Image src={ripley} />
					</div>
					<div className="logos-continuo">
						<Image src={sodexo} />
					</div>
					<div className="logos-continuo">
						<Image src={alicorp} />
					</div>
					<div className="logos-continuo">
						<Image src={bmw} />
					</div>
					<div className="logos-continuo">
						<Image src={citibank} />
					</div>
				</div>
			</div>
		</div>
	);
}
