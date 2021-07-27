import React from 'react';
import { Layout } from '../components/Layout';
import { Banner } from '../components/Banner';
import { Textsolutions } from '../components/TextSolutions';
import seleccionBanner from '../public/images/pages/seleccion-banner.png';
import seleccionIcon from '../public/images/pages/seleccion-icon.svg';

export default function Seleccion(props) {
	const text =
		'Elige al mejor talento, optimizando procesos con nuestras plataformas de innovación tecnológica.';
	return (
		<Layout>
			<Banner
				title="Selección"
				icon={seleccionIcon}
				description={text}
				bannerImg={seleccionBanner}
			/>
			<Textsolutions> ASKJHGKJD</Textsolutions>
		</Layout>
	);
}
