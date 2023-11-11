import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Mercury = () => {
  const model = useGLTF("./mercury/scene.gltf");
  const mercuryRef = useRef();
  // useFrame((state, delta) => {
  //   mercuryRef.current.rotation.y += delta / 3;
  // });

  return (
    <mesh ref={mercuryRef} scale={0.8} position={[60, 0, 20]}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default Mercury;
