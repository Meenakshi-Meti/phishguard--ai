import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function randomPoint(radius) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);

  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function Stream({ curve, speed, offset }) {
  const mesh = useRef();

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(curve.getPoints(80));
    return geometry;
  }, [curve]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;

    const t = (clock.elapsedTime * speed + offset) % 1;

    const point = curve.getPointAt(t);

    mesh.current.position.copy(point);

    const pulse = 1 + Math.sin(clock.elapsedTime * 6 + offset * 10) * 0.4;

    mesh.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <>
      <line geometry={lineGeometry}>
        <lineBasicMaterial
          color="#28E7FF"
          transparent
          opacity={0.18}
        />
      </line>

      <mesh ref={mesh}>
        <sphereGeometry args={[0.04, 16, 16]} />

        <meshBasicMaterial
          color="#7CFBFF"
        />
      </mesh>
    </>
  );
}

export default function DataStreams({
  streamCount = 30,
  radius = 2.1,
}) {

  const curves = useMemo(() => {

    const list = [];

    for (let i = 0; i < streamCount; i++) {

      const start = randomPoint(radius);

      const end = randomPoint(radius);

      const control = start
        .clone()
        .add(end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(radius + 0.45);

      list.push(
        new THREE.QuadraticBezierCurve3(
          start,
          control,
          end
        )
      );

    }

    return list;

  }, [streamCount, radius]);

  return (
    <group>
      {curves.map((curve, index) => (

        <Stream
          key={index}
          curve={curve}
          speed={0.12 + Math.random() * 0.12}
          offset={Math.random()}
        />

      ))}
    </group>
  );
}