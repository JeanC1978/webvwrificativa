import React from 'react'
import { BannerBlog } from '../components/BannerBlog';
import { Layout } from "../components/Layout";
import BlogSec_1 from '../components/BlogSec_1';
import BlogSec_2 from '../components/BlogSec_2';

//images
import NoteIcon from "../public/images/blog/note-icon.svg";

export default function Consultiva(props) {


    return (
        <Layout>
            <BannerBlog title="Ideas, notas y más" icon={NoteIcon} />

            <div className="cotainer-blog">
                <BlogSec_1 />
                <BlogSec_2 titulo='¿Quienes Exponen?' />
            </div>
        </Layout>
    )
}

