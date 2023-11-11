import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Neptune = () => {
  const model = useGLTF("./neptune/scene.gltf");
  const neptuneRef = useRef();
  useFrame((state, delta) => {
    neptuneRef.current.rotation.y += delta / 3;
  });

  return (
    <mesh ref={neptuneRef} scale={2} position={[160, 10, 0]}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default Neptune;
