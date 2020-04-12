/** @jsx jsx */
import React from 'react';
import { css, jsx  } from '@emotion/core';

export const Menu = () => (

  <>
  <nav
    css={css`
      position: absolute;
      color: white;
    `}
  >
    <h1
      css={css`
        color: white;
        font-family: Open Sans;
      `}
    >Animanoir | Òscar A. Montiel (el sitio està en construcciòn, nene.</h1>
    <ul>
      <li>Proyectos</li>
      <li>Blog</li>
      <li>Acerca</li>
      <li>Contacto</li>
    </ul>
  </nav>
  </>

);

export default Menu;
