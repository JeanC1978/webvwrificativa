// import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import BlogDetalle from "../../components/BlogDetalle";
import { Layout } from "../../components/Layout";
import { BannerBlog } from "../../components/BannerBlog";

const Article = () => {
    // console.log("article", article)
    // console.log("categories", categories)
    // const imageUrl = getStrapiMedia(article.image);

    // const seo = {
    //     metaTitle: article.title,
    //     metaDescription: article.description,
    //     shareImage: article.image,
    //     article: true,
    // };
    return (
        <Layout>
            <BannerBlog buttonGoBack />
            <BlogDetalle />
        </Layout>
    )
}


// export async function getStaticPaths() {
//     const articles = await fetchAPI("/articles");

//     return {
//         paths: articles.map((article) => ({
//             params: {
//                 slug: article.slug,
//             },
//         })),
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }) {
//     const articles = await fetchAPI(
//         `/articles?slug=${params.slug}`
//     );
//     const categories = await fetchAPI("/categories");

//     return {
//         props: { article: articles[0], categories },
//         revalidate: 1,
//     };
// }

export default Article;
