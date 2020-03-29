import { useStaticQuery, graphql } from 'gatsby';

function LatestPostListQuery() {
    const data = useStaticQuery(graphql`
        query LatestPostListQuery {
            allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
                edges {
                    node {
                        frontmatter {
                            date(formatString: "YYYY-MM-DD HH:mm:ss")
                            path
                            title
                        }
                        id
                    }
                }
            }
        }
    `);

    return data;
}

export default LatestPostListQuery;
