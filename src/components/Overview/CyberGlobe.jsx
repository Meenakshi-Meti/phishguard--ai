import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  Line,
  Points,
  PointMaterial,
} from "@react-three/drei";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import ParticleField from "./ParticleField";
import CyberRing from "./CyberRing";
import DataStreams from "./DataStreams";

function Globe() {
  const globeRef = useRef();
  useFrame((state, delta) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y += delta * 0.12;
    globeRef.current.rotation.x =
      THREE.MathUtils.lerp(
        globeRef.current.rotation.x,
        state.mouse.y * 0.25,
        0.05
      );
    globeRef.current.rotation.z =
      THREE.MathUtils.lerp(
        globeRef.current.rotation.z,
        state.mouse.x * 0.15,
        0.05
      );
  });
  const nodes = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 120; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.05;
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(theta)
        )
      );
    }
    return pts;
  }, []);
  return (
    <group ref={globeRef}>
      <Sphere args={[2, 64, 64]}>
        <meshPhysicalMaterial
          color="#00E5FF"
          transparent
          opacity={0.08}
          roughness={0}
          metalness={1}
          transmission={1}
          clearcoat={1}
        />
      </Sphere>
      <Sphere args={[2.02, 48, 48]}>
        <meshBasicMaterial
          wireframe
          color="#29F6FF"
          transparent
          opacity={0.35}
        />
      </Sphere>
      <Points positions={nodes}>
        <PointMaterial
          size={0.05}
          color="#8EF9FF"
          transparent
          opacity={1}
          depthWrite={false}
        />
      </Points>
      {nodes.slice(0, 35).map((point, i) => (
        <Line
          key={i}
          points={[point, nodes[(i * 3) % nodes.length]]}
          color="#3DDCFF"
          transparent
          opacity={0.25}
          lineWidth={1}
        />
      ))}
    </group>
  );
}
export default function CyberGlobe() {
  return (
    <div className="cyber-globe">
      <Canvas
  camera={{
    position: [0, 0, 6],
    fov: 45,
  }}
>
  <ambientLight intensity={0.6} />

  <directionalLight
    position={[5, 5, 5]}
    intensity={3}
    color="#00E5FF"
  />

  <pointLight
    position={[-5, -5, -5]}
    intensity={4}
    color="#2D7BFF"
  />
  <ParticleField count={900} radius={5} />

<Globe />

<DataStreams />

<CyberRing
  radius={2.5}
  color="#00F5FF"
  speed={0.25}
/>

<CyberRing
  radius={2.9}
  color="#3B82F6"
  speed={-0.18}
  rotation={[Math.PI / 2, 0, 0]}
/>

<CyberRing
  radius={3.3}
  color="#8B5CF6"
  speed={0.12}
  rotation={[0, Math.PI / 2, 0]}
/>

<OrbitControls
  enableZoom={false}
  enablePan={false}
  autoRotate
  autoRotateSpeed={0.3}
/>
</Canvas>
    </div>
  );
}