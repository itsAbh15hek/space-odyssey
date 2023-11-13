import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Saturn = () => {
  const model = useGLTF("./saturn/scene.gltf");
  const saturnRef = useRef();
  useFrame((state, delta) => {
    saturnRef.current.rotation.y += delta / 3;
    saturnRef.current.rotation.z = 50;
  });

  return (
    <mesh
      rotation={[0, 2, 0]}
      ref={saturnRef}
      scale={0.03}
      position={[130, 0, 0]}
    >
      <primitive object={model.scene} />
    </mesh>
  );
};

export default React.memo(Saturn);
