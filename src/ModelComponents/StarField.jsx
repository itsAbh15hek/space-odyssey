import React from "react";
import { Stars } from "@react-three/drei";

const StarField = () => {
  return (
    <mesh scale={[1.5, 1.5, 1.5]}>
      <Stars
        radius={100}
        depth={50}
        count={80}
        factor={15}
        saturation={0}
        fade
        speed={0.5}
      />
      <Stars
        radius={100}
        depth={50}
        count={600}
        factor={8}
        saturation={0}
        fade
        speed={1}
      />
      <Stars
        radius={100}
        depth={50}
        count={800}
        factor={3}
        saturation={0}
        fade
        speed={1.2}
      />
    </mesh>
  );
};

export default StarField;
