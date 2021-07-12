import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from "../lib/api";
import styles from '../styles/Home.module.scss'
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
      <Navbar />


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
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