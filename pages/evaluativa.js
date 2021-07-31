import React from 'react';
import { Layout } from '../components/Layout';
import { Banner } from '../components/Banner';
import { Dimensiones } from '../components/Dimensiones';
import { TextSolutionsevalua } from '../components/TextSolutionsevalua';
import evaluativaBanner from '../public/images/pages/evaluativa-banner.png';
import evaluativaIcon from '../public/images/pages/evaluativa-icon.svg';

export default function Evaluativa(props) {
	const text =
		'Plataforma de Evaluaciones On-line orientada a crear una experiencia de evaluación digital para medir diversas áreas de los procesos de selección.';
	return (
		<div>
			<Layout>
				<Banner
					title="Evaluativa"
					icon={evaluativaIcon}
					description={text}
					bannerImg={evaluativaBanner}
				/>
				<TextSolutionsevalua />
				<Dimensiones />
			</Layout>
		</div>
	);
}
