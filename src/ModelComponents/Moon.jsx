import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Moon = () => {
  const model = useGLTF("./moon/scene.gltf");
  const moonRef = useRef();
  useFrame((state, delta) => {
    moonRef.current.rotation.y += delta / 3;
    moonRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
    moonRef.current.position.z = Math.cos(state.clock.elapsedTime) * 1.8;
  });

  return (
    <mesh ref={moonRef} scale={0.005} position={[2.5, 0, 0]}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default React.memo(Moon);
