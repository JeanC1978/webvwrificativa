import React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import points_iz from '../public/images/points_iz.svg';
import points_der from '../public/images/points_der.svg';
import miriam2 from '../public/images/miriam2.png';
import luisa2 from '../public/images/luisa2.png';
import nextSvg from '../public/images/next.svg';
import prevSvg from '../public/images/prev.svg';
import fgrissv from '../public/images/fgrissv.svg';

// import { fgris } from '../public/images/fgrissv.png';

// const DATA = [{name:"Manria", cargo:"Supervisroa", description:"la rapidez ....", img:mariam}]

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
						automatically
						provided
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
						automatically
						provided
					/>
				</div>

				<div className="Texclient">
					<p>Qué hablan de nosotros</p>
				</div>
				<div className="comilla1">
					<Image
						src="/images/comilla1.png"
						alt="comilla1"
						width={100}
						automatically
						provided
						height={100}
						automatically
						provided
					/>
				</div>
				<div className="comilla2">
					<Image
						src="/images/comilla2.png"
						alt="comilla2"
						width={100}
						automatically
						provided
						height={100}
						automatically
						provided
					/>
				</div>

				<div className="Carrousel">
					<Carousel
						fade
						nextIcon={nextIcon}
						nextLabel={null}
						prevIcon={previewIcon}
						prevLabel={null}
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

							{/* <div className="moverfoto">
								<img
									src="/images/miriam2.png"
									alt="aure"
									// width={180}
									// automatically
									// provided
									// height={180}
									// automatically
									// provided
								/>

									Lucia Linares Tello <br></br>
									<span>Reclutamiento y selección en Prosegur</span>
								</h3>

								<h3>
								<p>
									La rapidez de los datos y la facilidad de interpretación es
									una herramienta muy ágil que <br></br>facilita la información
									para la toma de decisiones y accionar oportunamente.
								</p>
							</div> */}

							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item>
						{/* <Carousel.Item>
							<Image
								src="/images/luisa2.png"
								alt="aure"
								width={180}
								automatically
								provided
								height={180}
								automatically
								provided
							/>

							<h3>
								Luisa Cornejo Rojas <br></br>
								<span>Reclutamiento y selección en Prosegur</span>
							</h3>

							<p>
								La rapidez de los datos y la facilidad de interpretación es una
								herramienta muy ágil que <br></br>facilita la información para
								la toma de decisiones y accionar oportunamente.
							</p>

							<Carousel.Caption></Carousel.Caption>
						</Carousel.Item> */}
					</Carousel>
				</div>
			</div>
		</div>
	);
}
