"use client";

import { Canvas } from "@react-three/fiber";

const Page = () => {
  return (
    <div className="p-4 border h-full">
      <Canvas>
        <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Page;
