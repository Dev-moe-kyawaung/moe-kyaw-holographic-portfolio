"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Line,
  PerformanceMonitor,
  Sparkles,
  Text,
} from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

type NodeProps = {
  position: [number, number, number];
  color: string;
  label: string;
  quality: number;
};

function Core({ quality }: { quality: number }) {
  const core = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!core.current) return;
    core.current.rotation.x += delta * 0.1;
    core.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={core}>
      <mesh>
        <icosahedronGeometry args={[1.48, quality > 0.65 ? 5 : 3]} />
        <meshPhysicalMaterial
          color="#0b5264"
          emissive="#0ca9bd"
          emissiveIntensity={1.2}
          transparent
          opacity={0.42}
          roughness={0.12}
          metalness={0.4}
          transmission={0.15}
        />
      </mesh>

      <mesh rotation={[0.3, 0.2, 0]}>
        <icosahedronGeometry args={[1.63, 3]} />
        <meshBasicMaterial
          color="#54F5FF"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>

      <mesh rotation={[1.1, 0.4, 0.5]}>
        <sphereGeometry args={[1.82, 24, 24]} />
        <meshBasicMaterial
          color="#9B7BFF"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>
    </group>
  );
}

function Ring({
  radius,
  color,
  rotation,
  speed,
}: {
  radius: number;
  color: string;
  rotation: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.z += delta * speed;
    ref.current.rotation.y += delta * speed * 0.35;
  });

  const points = useMemo(
    () =>
      Array.from({ length: 96 }, (_, index) => {
        const angle = (index / 95) * Math.PI * 2;

        return [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0,
        ] as [number, number, number];
      }),
    [radius],
  );

  return (
    <group ref={ref} rotation={rotation}>
      <Line points={points} color={color} lineWidth={1} transparent opacity={0.7} />

      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function HologramNode({
  position,
  color,
  label,
  quality,
}: NodeProps) {
  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.8}>
      <group position={position}>
        <mesh>
          <sphereGeometry args={[0.13, quality > 0.65 ? 24 : 12, quality > 0.65 ? 24 : 12]} />
          <meshBasicMaterial color={color} />
        </mesh>

        <mesh scale={2}>
          <sphereGeometry args={[0.13, 12, 12]} />
          <meshBasicMaterial color={color} transparent opacity={0.12} />
        </mesh>

        <Text
          position={[0, -0.3, 0]}
          fontSize={0.12}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
}

function Scene() {
  const [quality, setQuality] = useState(1);

  return (
    <>
      <PerformanceMonitor
        bounds={(refreshRate) => [30, refreshRate > 80 ? 120 : 80]}
        onIncline={() => setQuality(1)}
        onDecline={() => setQuality(0.45)}
      />

      <color attach="background" args={["#040610"]} />
      <fog attach="fog" args={["#040610", 5, 13]} />

      <ambientLight intensity={0.25} />
      <pointLight position={[3, 2, 4]} color="#54F5FF" intensity={15} />
      <pointLight position={[-3, -2, 4]} color="#9B7BFF" intensity={12} />

      <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.35}>
        <Core quality={quality} />

        <Ring
          radius={2.1}
          color="#54F5FF"
          rotation={[0.7, 0.2, 0.2]}
          speed={0.25}
        />

        <Ring
          radius={2.55}
          color="#9B7BFF"
          rotation={[1.7, 0.4, 1.1]}
          speed={-0.18}
        />

        <Ring
          radius={2.95}
          color="#79FFD2"
          rotation={[0.2, 1.1, 0.5]}
          speed={0.12}
        />

        <HologramNode
          position={[2.15, 0.3, 0]}
          color="#54F5FF"
          label="ANDROID"
          quality={quality}
        />

        <HologramNode
          position={[-2.2, 0.8, 0.2]}
          color="#9B7BFF"
          label="WEB"
          quality={quality}
        />

        <HologramNode
          position={[0.8, -2.55, 0]}
          color="#79FFD2"
          label="AI"
          quality={quality}
        />
      </Float>

      <Sparkles
        count={quality > 0.65 ? 100 : 45}
        scale={[8, 8, 8]}
        size={1.4}
        speed={0.2}
        color="#54F5FF"
      />
    </>
  );
}

export default function HolographicScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 43 }}
        dpr={[1, 1.7]}
        frameloop="always"
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15 shadow-[0_0_120px_rgba(84,245,255,0.14)]" />
    </div>
  );
}
