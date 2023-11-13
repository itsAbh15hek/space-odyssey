import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";

const ISS = () => {
  const model = useMemo(() => useGLTF("./iss/scene.gltf"));
  const ISSRef = useRef();
  useFrame((state, delta) => {
    ISSRef.current.position.x = Math.sin(state.clock.elapsedTime + 1) * 1;
    ISSRef.current.position.z = Math.cos(state.clock.elapsedTime + 1) * 1;
  });

  return (
    <mesh ref={ISSRef} scale={0.1} position={[0.1, 0.8, 0]}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default React.memo(ISS);
