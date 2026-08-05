import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
  Stars,
  Ring
} from "@react-three/drei";

function Earth() {
  const earth = useRef();

  useFrame(() => {
    earth.current.rotation.y += 0.002;
    earth.current.rotation.x += 0.0004;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1.2}
    >
      <Sphere
        ref={earth}
        args={[2.2, 128, 128]}
      >
        <MeshDistortMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={1.2}
          distort={0.15}
          speed={1.5}
          roughness={0.15}
          metalness={1}
          wireframe
        />
      </Sphere>
    </Float>
  );
}

function Rings() {
  return (
    <>
      <Ring args={[2.6, 2.8, 64]}>
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.25}
          side={2}
        />
      </Ring>

      <Ring
        rotation={[Math.PI / 2, 0, 0]}
        args={[3, 3.15, 64]}
      >
        <meshBasicMaterial
          color="#7C3AED"
          transparent
          opacity={0.18}
          side={2}
        />
      </Ring>

      <Ring
        rotation={[0, Math.PI / 2, 0]}
        args={[3.5, 3.65, 64]}
      >
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.15}
          side={2}
        />
      </Ring>
    </>
  );
}

export default function Globe() {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
      >
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <pointLight
          position={[-5, -5, -5]}
          intensity={2}
          color="#00E5FF"
        />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          fade
        />

        <Earth />

        <Rings />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}