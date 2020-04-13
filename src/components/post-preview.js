/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {Link} from 'gatsby';

const PostPreview = ({ post }) => (
  <article css={css`
    color: white;
  `}
  >
    <h3>{post.title}</h3>
    <p>{post.excerpt}</p>
    <Link to={post.slug}>ir al post</Link>
  </article>
);

export default PostPreview;