import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { FaTwitter } from "react-icons/fa";

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
    <Helmet>
      <html lang="en" />
      <title>Animanoir</title>
      <meta name="description" content="site description" />
    </Helmet>

      <div
      className="layout"
        style={{
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>

          {children}
        </main>

        <footer>
          <small>por Óscar A. Montiel | 2020 | </small>
          <FaTwitter />@geosminu
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
