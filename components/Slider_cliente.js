import React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import points_iz from '../public/images/slidercliente/points_iz.svg';
import points_der from '../public/images/slidercliente/points_der.svg';
import miriam2 from '../public/images/slidercliente/miriam2.png';
import luisa2 from '../public/images/slidercliente/luisa2.png';
import nextSvg from '../public/images/slidercliente/next.svg';
import prevSvg from '../public/images/slidercliente/prev.svg';
import comilla1 from '../public/images/slidercliente/comilla1.svg';
import comilla2 from '../public/images/slidercliente/comilla2.svg';

export function SliderCliente(props) {
	const nextIcon = <Image src={nextSvg} alt="siguiente" />;
	const previewIcon = <Image src={prevSvg} alt="atras" />;

	return (
		<div className="content-slider-cliente">
			<div className="grid-content-slider">
				<div className="pointiz">
					<Image
						src={points_iz}
						alt="pintizquierda"
						width={100}
						automatically
						provided
						height={100}
					/>
				</div>

				<div className="pointder">
					<Image
						src={points_der}
						alt="pointder"
						width={100}
						automatically
						provided
						height={100}
					/>
				</div>

				<div className="Texclient">
					<h3>Qué hablan de nosotros</h3>
				</div>
				<div className="comilla1">
					<Image
						src={comilla1}
						alt="comilla1"
						width={100}
						automatically
						provided
						height={100}
					/>
				</div>
				<div className="comilla2">
					<Image
						src={comilla2}
						alt="comilla2"
						width={100}
						automatically
						provided
						height={100}
					/>
				</div>

				<div className="Carrouselc">
					<Carousel
						fade
						nextIcon={nextIcon}
						nextLabel={null}
						prevIcon={previewIcon}
						prevLabel={null}
					// bsPrefix="carrousel-comments"
					>
						<Carousel.Item>
							<div className="carrousel-main">
								<div className="carrousel-main__avatar">
									<Image src={miriam2} alt="dasd" />
								</div>
								<div className="carrousel-main__description">
									<h3>Miriam Linares Tello</h3>
									<h4>Reclutamiento y selección en Prosegur</h4>
									<p>
										La rapidez de los datos y la facilidad de interpretación es
										una herramienta muy ágil que <br></br>facilita la
										información para la toma de decisiones y accionar
										oportunamente.
									</p>
								</div>
							</div>

							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<div className="carrousel-main">
								<div className="carrousel-main__avatar">
									<Image src={luisa2} alt="dasd" />
								</div>
								<div className="carrousel-main__description">
									<h3>Miriam Linares Tello</h3>
									<h4>Reclutamiento y selección en Prosegur</h4>
									<p>
										La rapidez de los datos y la facilidad de interpretación es
										una herramienta muy ágil que <br></br>facilita la
										información para la toma de decisiones y accionar
										oportunamente.
									</p>
								</div>
							</div>

							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		</div>
	);
}
