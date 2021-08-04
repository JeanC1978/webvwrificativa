import Head from 'next/head';
import Image from 'next/image';
import { Card } from '../components/Card';
// import { fetchAPI } from "../lib/api";
import { Layout } from '../components/Layout';
import { SliderCliente } from '../components/Slider_cliente';
import { SliderLogos } from '../components/SliderLogos';
import { SectionCounter } from '../components/SectionCounter';
import { TabsOurSolutions } from '../components/TabsOurSolutions';
import { CarouselHowWork } from '../components/CarouselHowWork';
import { BannerHome } from '../components/BannerHome';

import CircleWhite from "../public/images/evaluativa/circle-white.svg";


export default function Home() {
	// console.log("articles", articles)
	// console.log("categories", categories)
	// console.log("homepage", homepage)
	return (
		<div>
			<Head>
				<title className="title">Verificativa</title>
				<meta name="description" content="verificativa.com" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				{/* <Navbar /> */}
				<BannerHome />
				<div className="section-cards">
					<Card />
					<div className="section-cards__circle">
						<Image src={CircleWhite} alt="" />
					</div>
				</div>
				<TabsOurSolutions />
				<CarouselHowWork />
				<SectionCounter />
				<SliderCliente />

				<SliderLogos />


				{/* <Footer /> */}
			</Layout>

		</div>
	);
}

// export async function getStaticProps() {
//   // Run API calls in parallel
//   const [articles, categories, homepage] = await Promise.all([
//     fetchAPI("/articles"),
//     fetchAPI("/categories"),
//     fetchAPI("/homepage"),
//   ]);

//   return {
//     props: { articles, categories, homepage },
//     revalidate: 1,
//   };
// }
