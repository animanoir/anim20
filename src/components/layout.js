/** @jsx jsx */
import { React } from "react"
import useSiteMetadata from './hooks/use-siteMetadata';
import Helmet from 'react-helmet';

import { Container, Col, Row } from 'react-grid-system';
import { Global, css, jsx } from '@emotion/core';

import { FaTwitter, FaLinkedin, FaGithub, FaFlickr } from 'react-icons/fa';

import Menu from "./menu"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Global styles={css`
        * {
          box-sizing: box;
          margin: 0;
        }

        /*
        * + * {
          margin-top: 1rem;
        }
        */

        html, body {
          background-color: black;
          margin: 0;
          font-size: 18px;
          line-height: 1.4;

          /*Quita el margin-top del primer div que pone Gatsby.*/
          > div {
            margin-top: 0;
          }
        }

        main {
          min-height: 100%;
          position: relative;
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
        background-color: black;
        height: 100vh;
        width: 100vw;
      `}
    >
      {children}
    </main>
    <footer css={css`
      color:white;
      font-family: Open Sans;
      font-size: .7rem;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2.5rem;
      `}>
      <Container fluid>
        <Row>
          <Col sm={12}
            css={css`
              display: flex;
              justify-content: flex-end;
              align-items: center;
            `}
          >
          <div>
            <a href='https://twitter.com/geosminu' target='_blank' rel="noopener noreferrer"><FaTwitter /></a>
            <a href='https://www.flickr.com/photos/animanoir/' target='_blank' rel="noopener noreferrer"><FaFlickr /></a>
            <a href='https://www.linkedin.com/in/oscaramontiel/' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
            <a href='https://github.com/animanoir' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        </div>
          <p css={css`font-size: .5rem; opacity: 0.3 `}>por Óscar A. Montiel | 2020</p>
          </Col>
        </Row>
        </Container>
    </footer>
  </div>
  );
}

export default Layout
