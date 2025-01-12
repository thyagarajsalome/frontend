import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import "./HeroSection.css";

const HeroSection = () => {
  const Diamond = () => {
    const meshRef = useRef();

    // Rotate the diamond
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.005;
      }
    });

    return (
      <group>
        {/* Glowing diamond */}
        <mesh ref={meshRef} castShadow receiveShadow>
          <octahedronGeometry args={[2, 0]} />
          <meshPhysicalMaterial
            color="#0088ff"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.5}
            transparent={true}
            opacity={1}
          />
        </mesh>

        {/* Glow effect */}
        <mesh scale={[1.2, 1.2, 1.2]}>
          <octahedronGeometry args={[2, 0]} />
          <meshBasicMaterial
            color="#00ffff"
            transparent={true}
            opacity={0.1}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    );
  };

  const Scene = () => {
    return (
      <>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={5} />
        <spotLight
          position={[0, 5, 0]}
          intensity={0.8}
          color="#00ffff"
          angle={0.6}
          penumbra={0.5}
        />

        <Environment preset="sunset" />

        <Diamond />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          minDistance={5}
          maxDistance={20}
          rotateSpeed={0.5}
          autoRotate={true}
          autoRotateSpeed={1}
        />
      </>
    );
  };

  return (
    <div className="hero-section">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 25 }}
        style={{ background: "black" }}
        shadows
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroSection;
