/** @jsx jsx */
import {useRef} from 'react';
import Layout from "../components/layout";
import Menu from '../components/menu';
import { Canvas, useFrame } from 'react-three-fiber';
import {  css, jsx } from '@emotion/core';
import { OrbitControls } from 'drei'



function RimLight({ brightness, color }) {
  const rectAreaLight = useRef();
  useFrame(() => (rectAreaLight.current.rotation.x = rectAreaLight.current.rotation.y += .03));
  return (
    <rectAreaLight
      ref={rectAreaLight}
      width={100}
      height={100}
      intensity={brightness}
      color={color}
      position={[0, 0, 0]}
      rotation={[0, 360, 0]}
    />
  );
}

function Sphere() {
  return (
    <mesh
      visible
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      color={0xffff00}
    >
      <sphereGeometry attach="geometry" args={[1, 3, 16]} />
      <meshStandardMaterial
        wireframe={true}
        attach="material"
        color="red"
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
          height: 100%
        `}
      camera={{ position: [0, 0, -1] }}>
      <RimLight brightness={100} color={"#fff"} />
        <Sphere  />
        <OrbitControls />
      </Canvas>
  </Layout>
  );
}

export default IndexPage
