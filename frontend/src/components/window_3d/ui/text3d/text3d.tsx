"use client";
//! https://www.youtube.com/watch?v=l7K9AMnesJQ

import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { extend } from "@react-three/fiber";
import { Image, Text3D } from "@react-three/drei";
import { easing, geometry } from "maath";

export default function Text3d() {
  const textOptions = {
    size: 2,
  };
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
    <Text3D font={"d9464-arkhip_font.ttf"} {...textOptions}>
      Hello world!
      <meshNormalMaterial />
    </Text3D>
  );
}
