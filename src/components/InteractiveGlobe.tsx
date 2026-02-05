"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

const EARTH_RADIUS = 1;

const POIS = [
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Germany", lat: 51.1657, lng: 10.4515 },
  { name: "Malaysia", lat: 4.2105, lng: 101.9758 },
  { name: "Japan", lat: 36.2048, lng: 138.2529 },
  { name: "South Korea", lat: 35.9078, lng: 127.7669 },
  { name: "United Arab Emirates", lat: 23.4241, lng: 53.8478 }
];

const latLngToVector3 = (lat: number, lng: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

function DottedGlobe() {
  const points = useMemo(() => {
    const numPoints = 6500;
    const positions = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const radius = EARTH_RADIUS;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.set([x, z, y], i * 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  return (
    <points geometry={points}>
      <pointsMaterial
        size={0.012}
        color="#2D2F33"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function PoiMarker({ name, lat, lng }: { name: string; lat: number; lng: number }) {
  const position = useMemo(
    () => latLngToVector3(lat, lng, EARTH_RADIUS + 0.02),
    [lat, lng]
  );
  const rippleRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!rippleRef.current) return;
    const t = clock.getElapsedTime();
    const scale = 1 + (Math.sin(t * 2) + 1) * 0.25;
    rippleRef.current.scale.set(scale, scale, scale);
    const material = rippleRef.current.material as THREE.MeshBasicMaterial;
    material.opacity = 0.3 + (Math.sin(t * 2) + 1) * 0.15;
  });

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#005EFF" />
      </mesh>
      <mesh ref={rippleRef}>
        <ringGeometry args={[0.045, 0.07, 32]} />
        <meshBasicMaterial color="#005EFF" transparent opacity={0.35} />
      </mesh>
      <Html
        distanceFactor={12}
        position={[0.12, 0.03, 0]}
        style={{ pointerEvents: "none" }}
      >
        <div className="rounded-full bg-[#005EFF] px-3 py-1 text-xs font-medium text-white shadow-sm">
          {name}
        </div>
      </Html>
      {hovered && (
        <Html distanceFactor={12} position={[0.25, 0.18, 0]}>
          <div className="w-[220px] rounded-2xl border border-white/60 bg-white p-4 text-left text-sm shadow-xl">
            <div className="text-sm font-semibold text-slate-900">
              {name}
            </div>
            <div className="mt-2 text-xs text-slate-500">
              Active business location
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

function GlobeScene() {
  return (
    <group rotation={[0, -0.6, 0]} scale={0.85}>
      <DottedGlobe />
    </group>
  );
}

export default function InteractiveGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.8], fov: 40 }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.8} />
      <GlobeScene />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.6}
      />
    </Canvas>
  );
}
