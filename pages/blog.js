import React from 'react'
import { BannerBlog } from '../components/BannerBlog';
import { Layout } from "../components/Layout";
// import BlogSec_1 from '../components/BlogPostMain';
import { BlogPostMain } from '../components/BlogPostMain';
import { BlogPostList } from '../components/BlogPostList';

//images
import NoteIcon from "../public/images/blog/note-icon.svg";

export default function Consultiva(props) {


    return (
        <Layout>
            <BannerBlog title="Ideas, notas y más" icon={NoteIcon} />
            <div className="container-blog-posts">
                <BlogPostMain />
                {/* <BlogSec_2 titulo='¿Quienes Exponen?' /> */}
            </div>
            <BlogPostList title="¿Quiénes exponen?" />
        </Layout>
    )
}

