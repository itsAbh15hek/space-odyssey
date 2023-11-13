import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Sun = () => {
  const model = useGLTF("./sun/scene.gltf");
  const sunRef = useRef();
  useFrame((state, delta) => {
    sunRef.current.rotation.y += delta / 50;
  });

  return (
    <mesh castShadow={false} receiveShadow={false} ref={sunRef} scale={5.2}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default React.memo(Sun);
