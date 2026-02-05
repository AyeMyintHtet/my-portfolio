import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export default function ProjectCard3D({ position, rotation, isDarkMode, hovered, index }) {
  const meshRef = useRef();
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime + index) * 0.2;

      // Rotation animation
      meshRef.current.rotation.y += 0.005;

      // Hover effect
      if (hovered) {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, 0.2, 0.1);
        meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 1.2, 0.1));
      } else {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, rotation[0], 0.1);
        meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 1, 0.1));
      }
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[1.5, 2, 0.2]}
      radius={0.1}
      smoothness={4}
      position={position}
      rotation={rotation}
    >
      <meshStandardMaterial
        color={isDarkMode ? '#1e293b' : '#f8fafc'}
        emissive={hovered ? (isDarkMode ? '#8b5cf6' : '#a78bfa') : '#000000'}
        emissiveIntensity={hovered ? 0.3 : 0}
        metalness={0.3}
        roughness={0.4}
      />
    </RoundedBox>
  );
}