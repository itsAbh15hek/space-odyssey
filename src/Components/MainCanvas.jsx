import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import StarField from "../ModelComponents/StarField";
import { Loader, OrbitControls, useHelper } from "@react-three/drei";
import Sun from "../ModelComponents/Sun";
import Mercury from "../ModelComponents/Mercury";
import Venus from "../ModelComponents/Venus";
import Earth from "../ModelComponents/Earth";
import Mars from "../ModelComponents/Mars";
import Moon from "../ModelComponents/Moon";
import Jupiter from "../ModelComponents/Jupiter";
import Saturn from "../ModelComponents/Saturn";
import Neptune from "../ModelComponents/Neptune";
import Uranus from "../ModelComponents/Uranus";
import { Perf } from "r3f-perf";
const MainCanvas = () => {
  const directionalLightRef = useRef();

  return (
    <>
      {" "}
      <Canvas>
        <Perf />
        <color attach="background" args={["black"]} />
        <OrbitControls />
        <pointLight
          color={0xffffff}
          distance={0}
          intensity={6}
          decay={0}
          position={[0, 0, 0]}
        />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <group position={[-80, 0, 0]} scale={1.5}>
            <Sun />
            <Mercury />
            <Venus />
            <Earth />
            <Mars />
            <Jupiter />
            <Saturn />
            <Uranus />
            <Neptune />
          </group>
          <StarField />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default MainCanvas;
