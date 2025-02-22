// "use client";

// import { Canvas, useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// const ComputerModel = () => {
//   const myModel = useLoader(GLTFLoader, "/computer.glb");

//   return (
//     <Canvas style={{ height: "500px", width: "100%" }}>
//       <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={5000} />
//       <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000} />
//       <primitive object={myModel.scene} />
//     </Canvas>
//   );
// };

// export default ComputerModel;

// "use client";

// import { useFrame, useLoader } from "@react-three/fiber";
// import { useRef } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { useIsMobile } from "../hooks";
// import dynamic from "next/dynamic";

// const OrbitControls = dynamic(
//   () => import("@react-three/drei").then((mod) => mod.OrbitControls),
//   { ssr: false }
// );

// const ComputerModel = () => {
//   const { isMobile } = useIsMobile();
//   const gltf = useLoader(GLTFLoader, "/computer.glb");
//   const ref = useRef();

//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y += 0.002;
//     }
//   });
//   return (
//     <canvas>
//       <spotLight position={[5, 10, 7.5]} />
//       <spotLight position={[-3, 10, -7.5]} />
//       <pointLight color={"#f00"} position={[0, 0.6, 0]} distance={1.5} />
//       {isMobile ? null : <OrbitControls enableZoom={false} enablePan={false} />}
//       <primitive object={gltf.scene} scale={isMobile ? 2 : 1.2} ref={ref} />
//     </canvas>
//   );
// };

// export default dynamic(() => Promise.resolve(ComputerModel), {
//   ssr: false,
// });

"use client";

import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useIsMobile } from "../hooks";

const Scene = () => {
  const { isMobile } = useIsMobile();
  const gltf = useLoader(GLTFLoader, "/computer.glb");
  const ref = useRef();

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
        scale={isMobile ? 2.5 : 2}
        ref={ref}
        position={[0, -1.5, 0]}
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

// Export with no SSR
export default dynamic(() => Promise.resolve(ComputerModel), {
  ssr: false,
});
