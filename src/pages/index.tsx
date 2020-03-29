import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LatestPostListQuery from '../lib/LatestPostListQuery';

const IndexPage = () => {
    console.log(LatestPostListQuery());
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Gatsby로 제작한 블로그</h1>
        </Layout>
    );
};

export default IndexPage;
