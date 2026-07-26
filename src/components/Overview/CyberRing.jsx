import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";

export default function CyberRing({
  radius = 2.6,
  tube = 0.02,
  color = "#00F5FF",
  speed = 0.3,
  rotation = [0, 0, 0],
}) {
  const ringRef = useRef();

  useFrame((_, delta) => {
    if (!ringRef.current) return;

    ringRef.current.rotation.x += delta * speed;
    ringRef.current.rotation.y += delta * speed * 0.8;
    ringRef.current.rotation.z += delta * speed * 0.5;
  });

  return (
    <group rotation={rotation}>
      <Torus args={[radius, tube, 16, 180]} ref={ringRef}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.7}
        />
      </Torus>
    </group>
  );
}


