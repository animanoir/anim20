/** @jsx jsx */
import React from "react"
import useSiteMetadata from './hooks/use-siteMetadata';
import Helmet from 'react-helmet';

import { Container, Col, Row } from 'react-grid-system';
import { Global, css, jsx } from '@emotion/core';

import Header from "./header"
import Menu from "./menu"


const Layout = ({ children }) => {

  const { title, description } = useSiteMetadata();

  return (
    <>
    <Global styles={css`
      * {
        box-sizing: box;
        margin: 0;
      }

      * + * {
        margin-top: 1rem;
      }

      html, body {
        background-color: black;
        margin: 0;
        font-size: 18px;
        line-height: 1.4

        /*Quita el margin-top del primer div que pone Gatsby.*/
        > div {
          margin-top: 0;
        }
      }



    `}
    />
    <Helmet>
      <meta charSet="utf-8" />
      <title>{ title }</title>
      <description>{description}</description>
    </Helmet>
    <Menu />
    <main
      css={css`
        background-color: white;
      `}
    >
      {children}
    </main>
    <footer>
      <p>por Óscar A. Montiel</p>
    </footer>
    </>
  )
}

export default Layout
