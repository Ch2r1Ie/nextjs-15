"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const Earth = () => {
  const earthTexture = useTexture("/assets/world-globe.jpg");
  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        map={earthTexture}
        shininess={10}
        specular={new THREE.Color("gray")}
      />
    </mesh>
  );
};

const Globe = () => {
  return (
    <Canvas camera={{ position: [0, 0, -1], fov: 75 }}>
      <ambientLight intensity={3} />
      <directionalLight position={[5, 3, 5]} intensity={0.4} />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>

      <OrbitControls autoRotate minDistance={2} maxDistance={10} />
    </Canvas>
  );
};

export default Globe;
