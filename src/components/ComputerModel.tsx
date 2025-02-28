"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useIsMobile } from "../hooks";
import { Mesh } from "three";

const Scene = () => {
  const { isMobile } = useIsMobile();
  const gltf = useLoader(GLTFLoader, "/computer.glb");
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <ambientLight intensity={4} />
      <spotLight
        position={[5, 10, 7.5]}
        intensity={4}
        angle={0.3}
        penumbra={1}
        color={"#ffffff"}
        castShadow
      />
      <spotLight position={[-3, 10, -7.5]} intensity={2} color={"#ffffff"} />
      <pointLight color={"#f00"} position={[0, 0.6, 0]} distance={1.5} />
      {isMobile ? null : <OrbitControls enableZoom={false} enablePan={false} />}
      <primitive
        object={gltf.scene}
        scale={isMobile ? 2.5 : 1.8}
        ref={ref}
        position={[0, -1.7, 0]}
        castShadow
        receiveShadow
      />
    </>
  );
};

const ComputerModel = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: "100%", height: "100%" }}
      shadows
    >
      <Scene />
    </Canvas>
  );
};

export default dynamic(() => Promise.resolve(ComputerModel), {
  ssr: false,
});
