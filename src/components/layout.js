import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

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
      <Header siteTitle="Animanoir" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>

          {children}
          <h1>Ghosts, spectres and ethereal entities.</h1>
        </main>

        <footer>
          <small>por Óscar A. Montiel | 2020</small>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
