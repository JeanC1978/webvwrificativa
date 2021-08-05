import Image from "next/image";
import { BLOG_POST_MAIN } from "../data/BlogData";
import { AuthorData } from "../components/AuthorData";

//CSS: blog_post_main.scss

export const BlogPostMain = () => {
  return (
    <section className="blog-post-main">
      {
        BLOG_POST_MAIN.map(item => (
          <div className={`blog-post-main__item blog-post-${item.id}`} key={item.id}>
            <h4>{item.title}</h4>
            <AuthorData avatar={item.avatar} name={item.author} date={item.date} />
            <Image src={item.mainImg} alt="Thumbnail" layout="fill" objectFit="cover" className="blog-post__img" />
          </div>
        ))
      }
    </section>
  )
}
