import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import "./HeroSection.css";

const Sphere = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smoother rotation using delta time
      meshRef.current.rotation.y += delta * 0.5;
      // Add subtle floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <sphereGeometry args={[2, 32, 32]} />{" "}
      {/* Higher segment count for smoother sphere */}
      <meshPhysicalMaterial
        color="#0088ff"
        metalness={0.9}
        roughness={0.05} // Decreased for more shine
        envMapIntensity={2} // Increased for better reflections
        clearcoat={1}
        clearcoatRoughness={0.1}
        transmission={0.6} // Increased for more transparency
        transparent={true}
        opacity={0.9}
        ior={2.4} // Added index of refraction
        thickness={0.5} // Added material thickness
        attenuationColor="#0088ff" // Added color attenuation
        attenuationDistance={0.5}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.2} />

      {/* Main directional light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Accent lights for better sparkle */}
      <pointLight position={[-10, -10, -5]} intensity={3} color="#0055ff" />
      <spotLight
        position={[0, 5, 0]}
        intensity={0.8}
        color="#00ffff"
        angle={0.6}
        penumbra={0.5}
        distance={20}
      />

      {/* Subtle rim light */}
      <pointLight position={[0, 0, -8]} intensity={0.5} color="#ffffff" />

      <Environment preset="sunset" />

      <Sphere />

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

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 25 }}
        style={{ background: "#1a1a1a" }}
        shadows
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroSection;
