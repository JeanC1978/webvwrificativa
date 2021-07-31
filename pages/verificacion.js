import React from 'react';
import { Layout } from '../components/Layout';
import { Banner } from '../components/Banner';
import verificacionBanner from '../public/images/pages/verificacion-banner.png';
import verificacionIcon from '../public/images/pages/verificacion-icon.svg';
import { Textsolutionsblue } from '../components/Textsolutionsblue';

export default function Verificacion(props) {
	const text =
		'"Valida la información de tus postulantes y colaboradores con nuestras verificaciones de personal."';
	return (
		<Layout>
			<Banner
				title="Selección"
				icon={verificacionIcon}
				description={text}
				bannerImg={verificacionBanner}
			/>

			<Textsolutionsblue />
		</Layout>
	);
}
