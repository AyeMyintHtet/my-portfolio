import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js',
  'Next.js', 'Tailwind', 'Three.js', 'Git',
  'HTML', 'CSS', 'SCSS', 'Vite',
  'Redux', 'PostgreSQL', 'SQL'
];

function Word({ children, position, color }) {
  const fontProps = {
    fontSize: 1.2, // Reduced size slightly
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false
  };

  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate scale on hover
    ref.current.scale.lerp(new THREE.Vector3(hovered ? 1.4 : 1, hovered ? 1.4 : 1, 1), 0.1);
    // Animate color
    ref.current.material.color.lerp(new THREE.Color(hovered ? '#088395' : color), 0.1);
  });

  return (
    <Text
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={position}
      {...fontProps}
    >
      {children}
    </Text>
  );
}

function Cloud({ radius = 8 }) { // Reduced radius for better fit
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (skills.length + 1);
    const thetaSpan = (Math.PI * 2) / skills.length;

    for (let i = 0; i < skills.length; i++) {
      // Fibonacci Sphere Algorithm for even distribution
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;

      const vec = new THREE.Vector3();
      vec.setFromSphericalCoords(radius, phi, theta);
      temp.push([vec, skills[i]]);
    }
    return temp;
  }, [radius]);

  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} color={index % 2 === 0 ? '#7AB2B2' : '#4D869C'}>
      {word}
    </Word>
  ));
}

export default function SkillCloud({ isDarkMode }) {
  return (
    <div className="w-full h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 16], fov: 60 }}>
        <fog attach="fog" args={[isDarkMode ? '#020617' : '#ffffff', 10, 30]} />
        <ambientLight intensity={2.5} />
        <pointLight position={[10, 10, 10]} />
        <Cloud radius={6} />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
