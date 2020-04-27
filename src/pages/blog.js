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
    <SEO title="Blog de" />
  </Layout>
  );
}

export default IndexPage
