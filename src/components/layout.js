import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { FaTwitter, FaHeartBroken } from "react-icons/fa";

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
    <div id='grain'>
      <main>
        {children}
      </main>

      <footer>
        <small>por Óscar A. Montiel <FaHeartBroken /> 2020 <FaHeartBroken /> <FaTwitter /> @geosminu </small>
      </footer>

    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
