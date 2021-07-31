import React from 'react'
import { BannerHome } from '../components/BannerHome';
import { Layout } from "../components/Layout";
import BlogSec_1 from '../components/BlogSec_1';
import BlogSec_2 from '../components/BlogSec_2';
import BlogDetalle from '../components/BlogDetalle';

export default function Consultiva(props) {


    return (
        <Layout>
            <BannerHome />
            
            <div className="cotainer-blog">
                <BlogSec_1 />
                <BlogSec_2 titulo='¿Quienes Exponen?'/>
            </div>
           {/*  <BlogDetalle/> */}
        </Layout>
    )
}

