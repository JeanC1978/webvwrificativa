import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';
// import { fetchAPI } from "../lib/api";
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { SliderCliente } from '../components/Slider_cliente';
import { SliderLogos } from '../components/SliderLogos';
import { BannerHome } from '../components/BannerHome';
import { TabsOurSolutions } from '../components/TabsOurSolutions';
import { CarouselHowWork } from '../components/CarouselHowWork';

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

				<Card />
				<CarouselHowWork />
				<TabsOurSolutions />

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
