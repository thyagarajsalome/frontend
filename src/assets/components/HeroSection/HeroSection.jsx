import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import "./HeroSection.css";

const HeroSection = () => {
  // Material definitions with corrected properties
  const materials = {
    wood: {
      roughness: 0.8,
      metalness: 0.0,
      color: "#945A3C",
    },
    metal: {
      roughness: 0.2,
      metalness: 0.8,
      color: "#A0A0A0",
      envMapIntensity: 1,
    },
    glass: {
      roughness: 0,
      metalness: 0.1,
      transmission: 0.9,
      transparent: true,
      color: "#FFFFFF",
      clearcoat: 1,
      clearcoatRoughness: 0,
    },
    copper: {
      roughness: 0.3,
      metalness: 1,
      color: "#B87333",
      envMapIntensity: 1,
    },
  };

  const shapes = [
    { name: "Square-based Pyramid", position: [-3, 1, 1], material: "metal" },
    { name: "Triangular Prism", position: [-1, 1, 0], material: "wood" },
    { name: "Cone", position: [1, 1, 0], material: "glass" },
    { name: "Cuboid", position: [3, 1, 0], material: "copper" },
    { name: "Tetrahedron", position: [-3, -1, 0], material: "metal" },
    { name: "Cube", position: [-1, -1, 0], material: "glass" },
    { name: "Cylinder", position: [1, -1, 0], material: "wood" },
    { name: "Sphere", position: [3, -1, 0], material: "copper" },
  ];

  const Scene = () => {
    return (
      <>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={1} />
        <hemisphereLight intensity={0.3} groundColor="#000000" />

        <Environment preset="sunset" />

        {shapes.map((shape, index) => {
          const materialProps = materials[shape.material];

          return (
            <group key={index} position={shape.position}>
              {shape.name === "Square-based Pyramid" && (
                <mesh rotation={[0, 0, Math.PI]} castShadow receiveShadow>
                  <coneGeometry args={[1, 1.5, 4]} />
                  <meshPhysicalMaterial {...materialProps} />
                </mesh>
              )}

              {shape.name === "Triangular Prism" && (
                <mesh
                  rotation={[Math.PI / 2, Math.PI / 6, 0]}
                  castShadow
                  receiveShadow
                >
                  <cylinderGeometry args={[0.7, 0.7, 1.5, 3]} />
                  <meshPhysicalMaterial {...materialProps} />
                </mesh>
              )}

              {shape.name === "Cone" && (
                <mesh rotation={[0, 0, Math.PI]} castShadow receiveShadow>
                  <coneGeometry args={[0.7, 1.5, 32]} />
                  <meshPhysicalMaterial {...materialProps} />
                </mesh>
              )}

              {shape.name === "Cuboid" && (
                <mesh castShadow receiveShadow>
                  <boxGeometry args={[2, 0.8, 0.8]} />
                  <meshPhysicalMaterial {...materialProps} />
                </mesh>
              )}

              {shape.name === "Tetrahedron" && (
                <mesh rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
                  <tetrahedronGeometry args={[0.8]} />
                  <meshPhysicalMaterial {...materialProps} />
                </mesh>
              )}

              {shape.name === "Cube" && (
                <mesh
                  rotation={[Math.PI / 4, Math.PI / 4, 0]}
                  castShadow
                  receiveShadow
                >
                  <boxGeometry args={[1, 1, 1]} />
                  <meshPhysicalMaterial {...materialProps} />
                </mesh>
              )}

              {shape.name === "Cylinder" && (
                <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                  <cylinderGeometry args={[0.7, 0.7, 1.5, 32]} />
                  <meshPhysicalMaterial {...materialProps} />
                </mesh>
              )}

              {shape.name === "Sphere" && (
                <mesh castShadow receiveShadow>
                  <sphereGeometry args={[0.7, 32, 32]} />
                  <meshPhysicalMaterial {...materialProps} />
                </mesh>
              )}
            </group>
          );
        })}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          minDistance={5}
          maxDistance={20}
          rotateSpeed={0.5}
        />
      </>
    );
  };

  return (
    <div className="hero-section">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 20 }}
        style={{ background: "#f5f5f5" }}
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
