import React, { useState } from "react"
// import {  Link } from "gatsby"
import Layout from "../components/layout"
import { Canvas } from "react-three-fiber"

const IndexPage = () => {

  const [hovered, setHovered] = useState(false);

  return(
    <Layout>
      <div>
        <h1>Welcome to Animanoir.</h1>
      </div>
      <div>
      <Canvas>
        <mesh
        onPointerOver={ () => setHovered(true) }
        onPointerOut={ () => setHovered(false) }>
          <boxBufferGeometry
            attach="geometry"
            arcs={[6, 6, 6]}
          />
          <meshBasicMaterial attach="material" color={ hovered ? "red" : "blue" } />
        </mesh>
      </Canvas>

      </div>
    </Layout>
    )
}

export default IndexPage
