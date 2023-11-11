import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Moon from "./Moon";
import ISS from "./ISS";

const Earth = () => {
  const model = useGLTF("./earth/scene.gltf");
  const moonModel = useGLTF("./moon/scene.gltf");
  const earthRef = useRef();
  useFrame((state, delta) => {
    earthRef.current.rotation.y += delta / 3;
  });

  return (
    <group position={[80, 10, 10]}>
      <mesh ref={earthRef} scale={4} position={[0, 0, 0]}>
        <primitive object={model.scene} />
      </mesh>
      <Moon />
      <ISS />
    </group>
  );
};

export default Earth;
