import {graphql, useStaticQuery} from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          excerpt
        }
      }
    }
  }
  `);

  return data.allMdx.nodes.map(post => ({

    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    excerpt: post.frontmatter.excerpt
  }))
}

export default usePosts;
