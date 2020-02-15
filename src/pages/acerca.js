import React from "react"
import Image from "../components/image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Acerca de" />
    <h1>Óscar A. Montiel</h1>
    <Image />
    <p>Sólo soy.</p>
    <Link to="/">Atrás</Link>
  </Layout>
)

export default SecondPage
