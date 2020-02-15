import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import yo from '../images/bobo.gif';



const Image = () => {

  return(
    <img src={yo} alt="Yo." />
  );
}

export default Image
