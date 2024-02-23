"use client";
// frontend\src\components\window_3d\window_3d.tsx

import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Cube() {
  const color3dObj = "#5dc0b4";
  const mesh = useRef<any>(null);
  useFrame((state, delta) => {
    if (mesh.current) {
      // mesh.current.rotation.x += delta * 0.1;
      mesh.current.rotation.y += delta * 0.1;
      // mesh.current.rotation.z += delta * 0.1;
    }
  });
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color={color3dObj} />
    </mesh>
  );
}
