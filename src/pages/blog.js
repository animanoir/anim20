import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import Menu from '../components/menu';
import usePosts from '../components/hooks/use-posts';
import PostPreview from '../components/post-preview';


import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  const posts = usePosts();

  return(
  <Layout>
    <h2>BLOG</h2>
    <h2>Estoy trabajando en ello. Mientras tanto, deja que te consuma el tiempo visitando <Link to="/acerca/">Acerca</Link>, o bien, <a target="_blank" href="https://animanoir.com">animanoir.com (viejito)</a></h2>
    <h2>Saludos.</h2>
    <div style={{
      maxWidth: `300px`,
      marginBottom: `1.45rem`
    }}>

    {posts.map(post => (
      <PostPreview key={post.slug} post={post} />
    ))}

    </div>
    <Link to="/acerca/">Acerca</Link>
  </Layout>
  );
}

export default IndexPage
