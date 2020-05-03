/** @jsx jsx */
import Layout from "../components/layout";
import Menu from '../components/menu';
import { Canvas } from 'react-three-fiber';
import {  css, jsx } from '@emotion/core';
import { OrbitControls } from 'drei'

function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[0, 0, 0]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}

function Sphere() {
  return (
    <mesh
      visible
      userData={{ test: "hello" }}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
    >
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
}

const IndexPage = () => {
  return(
    <Layout>
    <Menu />
      <Canvas
      id="#three"
      onCreated={() => console.info("Se creó el canvas.")}
      css={css`
          background: green;
          height: 100%
        `}
      camera={{ position: [0, 0, -5] }}>
      <RimLight brightness={54} color={"#fff"} />
        <Sphere />
        <OrbitControls />
      </Canvas>
  </Layout>
  );
}

export default IndexPage
