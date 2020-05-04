/** @jsx jsx */
import { graphql } from 'gatsby';
import Layout from '../../layout';
import { css, jsx } from '@emotion/core';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import { Container, Row, Column, Col } from 'react-grid-system';

//Hace query de los posts.
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
    <Container css={css`
      color: white;
    `}>
  <Row>
    <Col sm={12}>
      <div css={css`margin-top: 10%;`}>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>
        { post.body }
        </MDXRenderer>
        </div>
    </Col>
  </Row>
    </Container>
  </Layout>
);

export default PostTemplate;