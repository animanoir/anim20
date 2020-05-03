/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

const PostLink = styled(Link)`
  color: red;
  text-decoration: none;
  font-family: Open Sans;
  :hover {
    color: white;
  }
`;

const PostPreview = ({ post }) => (
  <article css={css`
    color: white;
  `}
  >
    <PostLink to={post.slug}><h2>{post.title}</h2></PostLink>
    <p
      css={css`
        font-family: Lato;
      `}
    >{post.excerpt}</p>
  </article>
);

export default PostPreview;