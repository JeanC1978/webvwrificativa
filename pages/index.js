import Head from 'next/head'
// import { fetchAPI } from "../lib/api";
import { Layout } from "../components/Layout";

import { Navbar } from "../components/Navbar";
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

      </Layout>

    </div>
  )
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