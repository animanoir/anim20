/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {Link} from 'gatsby';

const PostPreview = ({ post }) => (
  <article css={css`
    color: white;
  `}
  >
    <Link to={post.slug}><h2>{post.title}</h2></Link>
    <p>{post.excerpt}</p>
  </article>
);

export default PostPreview;