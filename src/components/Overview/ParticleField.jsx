import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleField({
  count = 800,
  radius = 5,
}) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = radius + Math.random() * 3;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      array[i * 3] =
        r * Math.sin(phi) * Math.cos(theta);

      array[i * 3 + 1] =
        r * Math.cos(phi);

      array[i * 3 + 2] =
        r * Math.sin(phi) * Math.sin(theta);
    }

    return array;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += delta * 0.02;

    pointsRef.current.rotation.x += delta * 0.005;

    pointsRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.035}
        color="#66F3FF"
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}