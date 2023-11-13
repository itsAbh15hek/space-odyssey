import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Mars = () => {
  const model = useGLTF("./mars/scene.gltf");
  const marsRef = useRef();
  useFrame((state, delta) => {
    marsRef.current.rotation.y += delta / 3;
  });

  return (
    <mesh ref={marsRef} scale={0.5} position={[90, -10, -20]}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default React.memo(Mars);
