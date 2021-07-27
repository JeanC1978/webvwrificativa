import React from 'react'
import { Layout } from "../components/Layout";
import { Banner } from "../components/Banner";
import { CustomTabs } from "../components/Tabs";
import consultivaBanner from "../public/images/consultiva/consultiva-banner.png";
import consultivaIco from "../public/images/consultiva/consultiva-icon.svg";

export default function Consultiva(props) {

    const text = "Capacitaciones y programas con metodologías ágiles diseñados para potenciar el talento de tus colaboradores."
    return (
        <Layout>
            <Banner title="Consultiva" icon={consultivaIco} description={text} bannerImg={consultivaBanner} />
            <CustomTabs />
        </Layout>
    )
}
