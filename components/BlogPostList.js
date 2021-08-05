import Image from "next/image";
import { Title } from "./Title";
import { AuthorData } from "./AuthorData";
import { BLOG_POST_LIST } from "../data/BlogData";



export const BlogPostList = ({ title }) => {

    return (
        <div className="section-card-posts">
            <Title>{title}</Title>
            <div className="card-posts">
                {BLOG_POST_LIST.map((item) => (
                    <div className="card-posts__item" key={item.id}>
                        <div className="card-posts__item__img">
                            <Image src={item.image} alt="Thumbnail" layout="fill" objectFit="cover" />
                        </div>
                        <h4>{item.title}</h4>
                        <AuthorData avatar={item.avatar} name={item.name} date={item.date} color="black" />
                    </div>
                )
                )}
            </div>
        </div>
    )
}

