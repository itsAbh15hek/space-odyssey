import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Uranus = () => {
  const model = useGLTF("./uranus/scene.gltf");
  const uranusRef = useRef();
  useFrame((state, delta) => {
    uranusRef.current.rotation.y += delta / 3;
  });

  return (
    <mesh ref={uranusRef} scale={0.03} position={[150, 10, 20]}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default React.memo(Uranus);
