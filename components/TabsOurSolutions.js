import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
//componentes
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { ButtonBlack } from './ButtonBlack';
import { ModalDemo } from '../components/ModalDemo';
import { Title } from '../components/Title';

//images
import FiveSvg from '../public/images/tabs-img/five.svg';
import ConsultivaSvg from '../public/images/tabs-img/consultiva.svg';
import OperativaSvg from '../public/images/tabs-img/operativa.svg';
import VerificacionSvg from '../public/images/tabs-img/verificacion.svg';
import SeleccionSvg from '../public/images/tabs-img/seleccion.svg';
import EvaluativaSvg from '../public/images/tabs-img/evaluativa.svg';
import SeeMoreSvg from '../public/images/tabs-img/ver-mas.svg';

import FiveImg from '../public/images/tabs-img/tab-five-img.png';
import ConsultivaImg from '../public/images/tabs-img/tab-consultiva.png';
import OperativaImg from '../public/images/tabs-img/tab-operativa.png';

export function TabsOurSolutions(props) {
	const [openModal, setOpenModal] = useState(false);

	const imgFive = <Image src={FiveSvg} alt="tab Five" />;
	const imgConsultiva = <Image src={ConsultivaSvg} alt="tab Five" />;
	const imgOperativa = <Image src={OperativaSvg} alt="tab Five" />;

	return (
		<div className="container-our-solutions">
			<h1>Conoce nuestras soluciones</h1>
			<p>Con nuestras herramientas digitales de innovación para HR</p>
			<div className="container-our-solutions__tabs">
				<Tabs defaultActiveKey="five" id="ourSolutions" className="mb-3">
					<Tab eventKey="five" title={imgFive} tabClassName="nav-five">
						<div className="tab-item-content">
							<div className="tab-item-content__description">
								<div className="tab-item-content__description__info">
									<h4>&quot;Creando sinergia entre las personas, el talento y la tecnología&quot;</h4>
									<p>Plataforma digital para tus procesos de selección, verificación y evaluación de personas</p>
									<div className="tab-item-content__description__info__links">
										<Link href="/verificacion" passHref>
											<Image src={VerificacionSvg} alt="tab Five" />
										</Link>
										<Link href="/verificacion" passHref>
											<Image src={SeleccionSvg} alt="tab Five" />
										</Link>
										<Link href="/verificacion" passHref>
											<Image src={EvaluativaSvg} alt="tab Five" />
										</Link>
									</div>
								</div>
								<div className="tab-item-content__description__button">
									<ButtonBlack onClick={() => setOpenModal(true)}>
										Solicita una demo
									</ButtonBlack>
								</div>
							</div>
							<div className="tab-item-content__img">
								<Image src={FiveImg} alt="tab Five" />
							</div>
						</div>
					</Tab>
					<Tab eventKey="consultiva" title={imgConsultiva}>
						<div className="tab-item-content">
							<div className="tab-item-content__description">
								<div className="tab-item-content__description__info">
									<h4>&quot;Tus colaboradores son los embajadores de tu marca&quot;</h4>
									<p>Potenciamos a tu colaboradores, entrenándolos para ser más competitivos sumando valor a tu marca</p>
									<div className="tab-item-content__description__links"></div>
									<Link href="/consultiva" passHref>
										<Image src={SeeMoreSvg} alt="ver más" />
									</Link>
								</div>
								<div className="tab-item-content__description__button">
									<ButtonBlack onClick={() => setOpenModal(true)}>
										Comunícate con un asesor
									</ButtonBlack>
								</div>
							</div>
							<div className="tab-item-content__img">
								<Image src={ConsultivaImg} alt="Consultiva" />
							</div>
						</div>
					</Tab>
					<Tab eventKey="operativa" title={imgOperativa}>
						<div className="tab-item-content">
							<div className="tab-item-content__description">
								<div className="tab-item-content__description__info">
									<h4>&quot;El Match perfecto con tu candidadto ideal&quot;</h4>
									<p>Plataforma tecnológica con IA especializada en reclutamiento masivo de personal operario</p>
									<div className="tab-item-content__description__links"></div>
									<Link href="/consultiva" passHref>
										<Image src={SeeMoreSvg} alt="ver más" />
									</Link>
								</div>
								<div className="tab-item-content__description__button">
									<ButtonBlack onClick={() => setOpenModal(true)}>
										Solicita una demo
									</ButtonBlack>
								</div>
							</div>
							<div className="tab-item-content__img">
								<Image src={OperativaImg} alt="Operativa" />
							</div>
						</div>
					</Tab>
				</Tabs>
			</div>
			<ModalDemo
				showModal={openModal}
				handleClose={() => setOpenModal(false)}
			/>
		</div>
	);
}
