import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import "./HeroSection.css";

const Octahedron = () => {
  const meshRef = useRef();
  const [scale, setScale] = useState(2);

  // Adjust scale based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setScale(1.2);
      } else if (width <= 768) {
        setScale(1.5);
      } else if (width <= 1024) {
        setScale(1.8);
      } else {
        setScale(2);
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <octahedronGeometry args={[scale, 0]} />
      <meshPhysicalMaterial
        color="#0088ff"
        metalness={0.8}
        roughness={0.1}
        envMapIntensity={1.5}
        clearcoat={0.8}
        clearcoatRoughness={0.2}
        transmission={0.4}
        transparent={true}
        opacity={0.9}
        ior={1.8}
        thickness={0.8}
        attenuationColor="#0088ff"
        attenuationDistance={0.8}
      />
    </mesh>
  );
};

const Scene = () => {
  const [lightIntensity, setLightIntensity] = useState(1.5);

  // Adjust light intensity based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setLightIntensity(1.2);
      } else if (width <= 768) {
        setLightIntensity(1.3);
      } else {
        setLightIntensity(1.5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={lightIntensity}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-10, -10, -5]} intensity={2.5} color="#0055ff" />
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
      <Octahedron />
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
  const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);
  const [fov, setFov] = useState(25);

  // Adjust camera settings based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setCameraPosition([0, 0, 8]);
        setFov(30);
      } else if (width <= 768) {
        setCameraPosition([0, 0, 9]);
        setFov(27);
      } else {
        setCameraPosition([0, 0, 10]);
        setFov(25);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-section">
      <Canvas
        camera={{ position: cameraPosition, fov: fov }}
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
