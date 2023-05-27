"use client";

import { Canvas } from "@react-three/fiber";

const Page = () => {
  return (
    <div className="p-4 border h-full">
      <Canvas>
        <mesh>
          <sphereGeometry args={[1.5, 16, 16]} />
          <meshBasicMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Page;
