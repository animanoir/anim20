import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import Menu from '../components/menu';

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  return(
  <Layout>
    <h2>proyectos</h2>
    <h2>Estoy trabajando en ello. Mientras tanto, deja que te consuma el tiempo visitando <Link to="/acerca/">Acerca</Link>, o bien, <a target="_blank" href="https://animanoir.com">animanoir.com (viejito)</a></h2>
    <h2>Saludos.</h2>
    <div style={{
      maxWidth: `300px`,
      marginBottom: `1.45rem`
    }}>
      <Image />
    </div>
    <Link to="/acerca/">Acerca</Link>
  </Layout>
  );
}

export default IndexPage
