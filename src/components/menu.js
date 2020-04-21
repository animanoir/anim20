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

  :hover {
    color: white;
  }

`;

export const Menu = () => (

  <>
  <nav
    css={css`
      position: absolute;
      padding-top: 1rem;
      padding-left: 1rem;
      color: white;
    `}
  >
    <h1
      css={css`
        color: white;
        font-family: Open Sans;
        padding-bottom: 1rem;
        font-size: 1rem;
      `}
    > <span css={css`:hover {color: red}`} > <NavLink to=''>Animanoir (sitio en construcción) </NavLink></span> | <span css={css`font-weight: normal`}>Óscar A. Montiel</span></h1>
    <ul
      css={css`
        list-style-type: none;
        font-family: Lato;
        font-size: 0.8rem;
      `}
    >
      <li> <NavLink activeClassName='current-page' to='proyectos'>.proyectos</NavLink> </li>
      <li> <NavLink activeClassName='current-page' to='blog'>.blog</NavLink></li>
      <li> <NavLink activeClassName='current-page' to='acerca'>.acerca</NavLink></li>
      <li> <NavLink activeClassName='current-page' to='contacto'>.contacto</NavLink></li>
    </ul>
  </nav>
  </>

);

export default Menu;
