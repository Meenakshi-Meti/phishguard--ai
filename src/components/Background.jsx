import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles() {
  const particles = useRef();

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y += 0.0008;
      particles.current.rotation.x += 0.0003;
    }
  });

  const particleCount = 2500;

  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 120;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 120;
  }

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#00E5FF"
        size={0.15}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function Background() {
  return (
    <>
      {/* Background Glow */}
      <div className="background-glow"></div>

      {/* 3D Canvas */}
      <Canvas
        className="background-canvas"
        camera={{ position: [0, 0, 25], fov: 70 }}
      >
        <ambientLight intensity={1} />

        <Stars
          radius={120}
          depth={60}
          count={7000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <FloatingParticles />
      </Canvas>

      {/* Cyber Grid */}
      <div className="cyber-grid"></div>
    </>
  );
}