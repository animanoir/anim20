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
  <React.Fragment>
    <nav
      css={css`
        position: absolute;
        padding-top: 1rem;
        padding-left: 1rem;
        color: white;
        z-index: 2;
      `}
    >
      <h1
        css={css`
          color: white;
          font-family: Open Sans;
          padding-bottom: .3rem;
          font-size: 1rem;
        `}
      > <span css={css`:hover {color: red}`} > <NavLink to=''>Animanoir (sitio en construcción) </NavLink></span> | <span css={css`font-weight: normal`}>Óscar A. Montiel</span></h1>
      <ul
        css={css`
          list-style-type: none;
          display: flex;
          justify-content: space-between;
          font-family: Lato;
          font-size: 0.8rem;
          line-height: 1.6rem;
        `}
      >
        <li> <NavLink activeClassName='current-page' to='blog'>.blog</NavLink></li>
        <li> <NavLink activeClassName='current-page' to='proyectos'>.proyectos</NavLink> </li>
        <li> <NavLink activeClassName='current-page' to='acerca'>.acerca</NavLink></li>
        <li> <NavLink activeClassName='current-page' to='contacto'>.contacto</NavLink></li>
      </ul>
    </nav>
  </React.Fragment>
);

export default Menu;
