import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Venus = () => {
  const model = useGLTF("./venus/scene.gltf");
  const venusRef = useRef();
  useFrame((state, delta) => {
    venusRef.current.rotation.y += delta / 3;
  });

  return (
    <mesh ref={venusRef} scale={[1, 1, 1]} position={[70, 0, -5]}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default Venus;
