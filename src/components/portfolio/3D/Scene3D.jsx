import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FloatingTorus, FloatingBox, FloatingSphere, AnimatedRing } from './FloatingGeometry';

export default function Scene3D({ isDarkMode, scrollProgress, variant = 'hero' }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (scrollProgress?.on) {
      const unsubscribe = scrollProgress.on('change', (latest) => {
        setProgress(latest || 0);
      });
      return () => unsubscribe?.();
    }
  }, [scrollProgress]);

  const renderScene = useMemo(() => {
    switch (variant) {
      case 'hero':
        return (
          <>
            <FloatingTorus isDarkMode={isDarkMode} scrollProgress={progress} />
            <FloatingSphere isDarkMode={isDarkMode} scrollProgress={progress} />
            <AnimatedRing isDarkMode={isDarkMode} scrollProgress={progress} position={[3, 0, -2]} />
          </>
        );
      case 'about':
        return (
          <>
            <FloatingBox isDarkMode={isDarkMode} scrollProgress={progress} />
            <AnimatedRing isDarkMode={isDarkMode} scrollProgress={progress} position={[0, 0, 0]} />
          </>
        );
      case 'projects':
        return (
          <>
            <FloatingSphere isDarkMode={isDarkMode} scrollProgress={progress} />
            <FloatingTorus isDarkMode={isDarkMode} scrollProgress={progress} />
          </>
        );
      default:
        return <FloatingTorus isDarkMode={isDarkMode} scrollProgress={progress} />;
    }
  }, [variant, isDarkMode, progress]);

  return (
    <Canvas
      className="absolute inset-0 pointer-events-none"
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{
        antialias: false,
        powerPreference: 'high-performance'
      }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-10, -10, -10]} color={isDarkMode ? '#088395' : '#7AB2B2'} intensity={0.3} />

      <Suspense fallback={null}>
        {renderScene}
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        enableDamping={false}
      />
    </Canvas>
  );
}