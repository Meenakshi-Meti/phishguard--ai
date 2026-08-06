import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  Stars,
  Float,
  Ring,
} from "@react-three/drei";

function Earth() {
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={0.8}
    >
      <Sphere ref={earthRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={1}
          wireframe
        />
      </Sphere>
    </Float>
  );
}

function OrbitRings() {
  return (
    <>
      <Ring
        args={[2.4, 2.5, 64]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.4}
        />
      </Ring>

      <Ring
        args={[2.8, 2.9, 64]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshBasicMaterial
          color="#7C3AED"
          transparent
          opacity={0.25}
        />
      </Ring>
    </>
  );
}

function GlobeScene() {
  return (
    <>
      <ambientLight intensity={1.2} />

      <pointLight
        position={[5, 5, 5]}
        intensity={3}
        color="#00E5FF"
      />

      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={4}
        fade
      />

      <Earth />

      <OrbitRings />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </>
  );
}

function Globe() {
  return (
    <div className="globe-wrapper">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
      >
        <GlobeScene />
      </Canvas>
    </div>
  );
}

export default Globe;