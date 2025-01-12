import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import "./HeroSection.css";

const CustomShape = () => {
  const groupRef = useRef();
  const twistedTorusRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate the entire group
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x += delta * 0.1;
    }
    if (twistedTorusRef.current) {
      // Add pulsing effect to the inner shape
      twistedTorusRef.current.scale.x =
        1 + Math.sin(state.clock.elapsedTime) * 0.1;
      twistedTorusRef.current.scale.y =
        1 + Math.cos(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer ring */}
      <mesh
        castShadow
        receiveShadow
        position={[0, 0, 0]}
        rotation={[Math.PI / 4, 0, 0]}
      >
        <torusGeometry args={[2.5, 0.2, 16, 100]} />
        <meshPhysicalMaterial
          color="#4444ff"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={2}
          clearcoat={1}
          transmission={0.5}
          transparent={true}
          opacity={0.9}
        />
      </mesh>

      {/* Inner twisted torus */}
      <mesh
        ref={twistedTorusRef}
        castShadow
        receiveShadow
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <torusKnotGeometry args={[1.5, 0.3, 100, 16, 2, 3]} />
        <meshPhysicalMaterial
          color="#00ffff"
          metalness={0.8}
          roughness={0.05}
          envMapIntensity={3}
          clearcoat={1}
          transmission={0.6}
          transparent={true}
          opacity={0.8}
          ior={2.4}
          thickness={0.5}
          attenuationColor="#00ffff"
          attenuationDistance={0.5}
        />
      </mesh>

      {/* Decorative spheres */}
      {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, index) => (
        <mesh
          key={index}
          position={[Math.cos(angle) * 2.5, Math.sin(angle) * 2.5, 0]}
          castShadow
          receiveShadow
        >
          <dodecahedronGeometry args={[0.3, 1]} />
          <meshPhysicalMaterial
            color="#0088ff"
            metalness={1}
            roughness={0}
            envMapIntensity={2}
            clearcoat={1}
          />
        </mesh>
      ))}
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-10, -10, -5]} intensity={3} color="#0055ff" />
      <spotLight
        position={[0, 5, 0]}
        intensity={0.8}
        color="#00ffff"
        angle={0.6}
        penumbra={0.5}
        distance={20}
      />
      <pointLight position={[0, 0, -8]} intensity={0.5} color="#ffffff" />

      <Environment preset="sunset" />

      <CustomShape />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
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
