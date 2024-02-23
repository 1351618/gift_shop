"use client";
// frontend\src\components\window_3d\window_3d.tsx

import React, { useEffect, useRef } from "react";
import styles from "./window_3d.module.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./ui/cube/cube";
import Text3d from "./ui/text3d/text3d";

export default function Window3d() {
  return (
    <div className={styles["window_3d"]}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <Cube />
        {/* <Text3d /> */}
      </Canvas>
    </div>
  );
}
