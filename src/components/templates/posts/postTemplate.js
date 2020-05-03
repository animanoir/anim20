/** @jsx jsx */

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../layout';

import { css, jsx } from '@emotion/core';

import {MDXRenderer} from 'gatsby-plugin-mdx';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}){
      frontmatter{
        title
      }
      body
    }
  }
`
const PostTemplate = ({data: {mdx: post}}) => (
  <Layout>
    <div css={css`
      color: white;
    `
    }>
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer>
        { post.body }
      </MDXRenderer>
    </div>
  </Layout>
);

export default PostTemplate;