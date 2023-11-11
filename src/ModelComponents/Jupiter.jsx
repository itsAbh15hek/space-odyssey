import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Jupiter = () => {
  const model = useGLTF("./jupiter/scene.gltf");
  const jupiterRef = useRef();
  useFrame((state, delta) => {
    jupiterRef.current.rotation.y += delta / 3;
  });

  return (
    <mesh ref={jupiterRef} scale={0.06} position={[105, 0, -50]}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default Jupiter;
