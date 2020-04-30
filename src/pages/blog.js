/** @jsx jsx */

import React from "react"
import Layout from "../components/layout";
import {  css, jsx } from '@emotion/core';
import PostPreview from '../components/post-preview';
import usePosts from '../components/hooks/use-posts';
import SEO from "../components/seo"

const IndexPage = () => {

  const posts = usePosts();

  return(
  <Layout>
    <SEO title="Blog de" />
    <div
      css={css`
      position: absolute;
      top: 50%;
      left: 50%;
      /*El translate hace que el punto de anclaje esté en el centro.*/
      transform: translate(-50%, -50%);
      `
      }
    >
      {
        posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))
      }
    </div>
    </Layout>
  );
}

export default IndexPage
