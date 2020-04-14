/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  color: red;
  text-decoration: none;

  &.current-page{
    color: white;
  }

`;

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
    >Animanoir | Òscar A. Montiel</h1>
    <ul>
      <li> <NavLink activeClassName='current-page' to='proyectos'>Proyectos SITIO WEB EN CONSTRUCCIÓN</NavLink> </li>
      <li> <NavLink activeClassName='current-page' to='blog'>Blog</NavLink> </li>
      <li> <NavLink activeClassName='current-page' to='acerca'>Acerca</NavLink> </li>
      <li> <NavLink activeClassName='current-page' to='contacto'>Contacto</NavLink> </li>
    </ul>
  </nav>
  </>

);

export default Menu;
