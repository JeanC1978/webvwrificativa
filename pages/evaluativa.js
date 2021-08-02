import React from 'react';
import Image from "next/image";
import { Layout } from '../components/Layout';
import { Banner } from '../components/Banner';
import { Dimensiones } from '../components/Dimensiones';
import { ButtonBlack } from '../components/ButtonBlack';
import { Navigation } from '../components/Navigation';
import { TextSolutionsevalua } from '../components/TextSolutionsevalua';
import { CardBennefits } from '../components/CardBennefits';
import { SectionOurSolutions } from '../components/SectionOurSolutions';

//imagenes
import evaluativaBanner from "../public/images/pages/evaluativa-banner.png";
import evaluativaIcon from "../public/images/pages/evaluativa-icon.svg";
import operarioIcon from "../public/images/evaluativa/operario-icon.svg";
import personIcon from "../public/images/evaluativa/person-icon.svg";

const SECTION_SOLUTIONS_TITLE = "Conoce nuestra solución"
const SECTION_SOLUTIONS_SUBTITLE = '"La sinergia entre las personas, el talento y la tecnología"'
const SECTION_SOLUTIONS_DESCRIPTION = <>Mediante nuestra Plataforma Evaluativa realizamos el <b>Test de Integridad y Honestidad</b>, filtro importante para prevenir riesgos de contratación.</>;

export default function Evaluativa(props) {
	const text =
		'Plataforma de Evaluaciones On-line orientada a crear una experiencia de evaluación digital para medir diversas áreas de los procesos de selección.';
	return (
		<div>
			<Layout>
				<Banner title="Evaluativa" icon={evaluativaIcon} description={text} bannerImg={evaluativaBanner} />
				<SectionOurSolutions title={SECTION_SOLUTIONS_TITLE} subtitle={SECTION_SOLUTIONS_SUBTITLE} description={SECTION_SOLUTIONS_DESCRIPTION} />
				<div className="section-nivel-test">
					<div className="section-nivel-test__columnOne">
						<h1>Niveles del Test de Ingridad y Honestidad</h1>
						<ButtonBlack>Solicita una demo</ButtonBlack>
					</div>
					<div className="section-nivel-test__columnTwo">
						<Image src={personIcon} />
						<h2>Nivel Ejecutivo</h2>
						<p>Test especializado para candidatos con cargos ejecutivos, mando medio-alto, consta de 57 preguntas.</p>
					</div>
					<div className="section-nivel-test__columnThree">
						<Image src={operarioIcon} />
						<h2>Nivel Operario</h2>
						<p>Test especializado para candidatos con cargos operativos, consta de 40 preguntas.</p>
					</div>
				</div>
				<Dimensiones />
				<CardBennefits />
				<Navigation prev="seleccion" next="verificacion" />
			</Layout>
		</div>
	);
}
