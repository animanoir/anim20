/** @jsx jsx */
import { React , useRef } from "react"
import useSiteMetadata from './hooks/use-siteMetadata';
import Helmet from 'react-helmet';

import { Container, Col, Row } from 'react-grid-system';
import { Global, css, jsx } from '@emotion/core';

import { FaTwitter, FaLinkedin, FaGithub, FaFlickr } from 'react-icons/fa';
// import {Canvas, useFrame } from 'react-three-fiber';

import Menu from "./menu"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const mesh = useRef();

  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

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
          background-color: black;
        `}
      >
        {children}
      </main>
      <footer css={css`
        color:white;
        font-family: Open Sans;
        font-size: .7rem;
        `}>
        <Container fluid>
          <Row>
            <Col sm={6} style={{color: 'white'}} >
              <FaTwitter />
              <FaFlickr />
              <FaLinkedin />
              <FaGithub />
            </Col>
            <Col sm={6}>
            <p>por Óscar A. Montiel | 2020</p>
            </Col>
          </Row>
          </Container>
      </footer>
    </div>
  )
}

export default Layout
