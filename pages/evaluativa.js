import React from 'react';
import Image from 'next/image';
import { isotipoazul } from '../public/images/dimensiones/isotipoazul.png';
import { Layout } from '../components/Layout';
import { Dimensiones } from '../components/Dimensiones';

export default function Evaluativa(props) {
	return (
		<div>
			<Layout>etiqueta layout</Layout>
			<p>eliminar este espacio luego</p>

			<Dimensiones />
		</div>
	);
}
