import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

export function FloatingTorus({ isDarkMode, scrollProgress = 0 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = scrollProgress * Math.PI * 2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(scrollProgress * Math.PI) * 1.5;
    }
  });

  const material = useMemo(() => ({
    color: isDarkMode ? '#088395' : '#7AB2B2',
    emissive: isDarkMode ? '#09637E' : '#088395',
    emissiveIntensity: 0.2,
    roughness: 0.3,
    metalness: 0.7,
  }), [isDarkMode]);

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} scale={1.2}>
        <torusGeometry args={[1, 0.35, 12, 64]} />
        <meshStandardMaterial {...material} />
      </mesh>
    </Float>
  );
}

export function FloatingBox({ isDarkMode, scrollProgress = 0 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = scrollProgress * Math.PI;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
      const scale = 1 + Math.sin(scrollProgress * Math.PI) * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  const material = useMemo(() => ({
    color: isDarkMode ? '#09637E' : '#7AB2B2',
    emissive: isDarkMode ? '#09637E' : '#088395',
    emissiveIntensity: 0.2,
    roughness: 0.2,
    metalness: 0.8,
  }), [isDarkMode]);

  return (
    <Float speed={2} rotationIntensity={0.7} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial {...material} />
      </mesh>
    </Float>
  );
}

export function FloatingSphere({ isDarkMode, scrollProgress = 0 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = scrollProgress * Math.PI * 2;
      meshRef.current.position.x = Math.cos(scrollProgress * Math.PI * 2) * 1.5;
    }
  });

  const material = useMemo(() => ({
    color: isDarkMode ? '#7AB2B2' : '#EBF4F6',
    emissive: isDarkMode ? '#088395' : '#7AB2B2',
    emissiveIntensity: 0.2,
    roughness: 0.1,
    metalness: 0.9,
  }), [isDarkMode]);

  return (
    <Float speed={2.5} rotationIntensity={0.2} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial {...material} />
      </mesh>
    </Float>
  );
}

export function AnimatedRing({ isDarkMode, scrollProgress = 0, position = [0, 0, 0] }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = scrollProgress * Math.PI * 3;
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  const material = useMemo(() => ({
    color: isDarkMode ? '#088395' : '#7AB2B2',
    emissive: isDarkMode ? '#09637E' : '#088395',
    emissiveIntensity: 0.3,
    metalness: 0.8,
    roughness: 0.2,
  }), [isDarkMode]);

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <torusGeometry args={[2, 0.08, 12, 64]} />
        <meshStandardMaterial {...material} />
      </mesh>
    </group>
  );
}