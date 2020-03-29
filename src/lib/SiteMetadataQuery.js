import { useStaticQuery, graphql } from 'gatsby';

function SiteMetadataQuery() {
    const data = useStaticQuery(graphql`
        query SiteMetadataQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);

    return data;
}

export default SiteMetadataQuery;
