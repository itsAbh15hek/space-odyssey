import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import StarField from "../ModelComponents/StarField";
import {
  Loader,
  OrbitControls,
  useHelper,
  ScrollControls,
  useScroll,
  Scroll,
} from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import {
  editable as e,
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
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
import HomeTextPageContainer from "../AnimatedComponents/HomeTextPageContainer";
import prodAni from "../assets/Scroll Animation-theatr.json";
const MainCanvas = () => {
  const sheet = getProject("Production Animation", {
    state: prodAni,
  }).sheet("Scene");

  return (
    <>
      {" "}
      <Canvas
        gl={{ physicallyCorrectLights: true, preserveDrawingBuffer: true }}
      >
        {/* <Perf /> */}
        <ScrollControls pages={10}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
          <Scroll html>
            <HomeTextPageContainer />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Loader />
    </>
  );
};

export default MainCanvas;

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });
  return (
    <>
      <color attach="background" args={["black"]} />
      {/* <OrbitControls /> */}
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={90}
      />
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
    </>
  );
};
