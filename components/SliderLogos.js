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
						<Image src={bmw} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={citibank} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={jockey} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={ripley} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={sodexo} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={alicorp} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={bmw} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={citibank} alt="" />
					</div>

					{/* doubled */}

					<div className="logos-continuo">
						<Image src={alicorp} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={bmw} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={citibank} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={jockey} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={ripley} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={sodexo} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={alicorp} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={bmw} alt="" />
					</div>
					<div className="logos-continuo">
						<Image src={citibank} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
