import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Canvas, useFrame } from "@react-three/fiber";

import { Float, Environment } from "@react-three/drei";

import * as THREE from "three";

import "../styles/design.css";

// ========================================
// RIBBON COMPONENT
// ========================================

const Ribbon = ({ color, points, rotation = [0, 0, 0] }) => {
  const curve = new THREE.CatmullRomCurve3(
    points.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
  );

  return (
    <mesh rotation={rotation}>
      <tubeGeometry args={[curve, 100, 0.12, 14, false]} />

      <meshStandardMaterial color={color} roughness={0.2} metalness={0.65} />
    </mesh>
  );
};

// ========================================
// 3D DESIGN OBJECT
// ========================================

const DesignObject = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;

    // Smooth rotation

    groupRef.current.rotation.y = Math.sin(time * 0.35) * 0.35;

    groupRef.current.rotation.x = Math.sin(time * 0.25) * 0.15;

    // Floating movement

    groupRef.current.position.y = Math.sin(time * 0.8) * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <group ref={groupRef}>
        {/* =================================
                    BLUE FLOWING RIBBON
                ================================= */}

        <Ribbon
          color="#5FA7B5"
          points={[
            [-1.7, -0.9, 0],

            [-1.1, -0.2, 0.4],

            [-0.3, 0.8, -0.2],

            [0.7, 1.1, 0.3],

            [1.5, 0.2, -0.1],

            [0.9, -0.9, 0.4],

            [-0.2, -1.1, -0.3],

            [-1.4, -0.3, 0],
          ]}
        />

        {/* =================================
                    GOLD FLOWING RIBBON
                ================================= */}

        <Ribbon
          color="#D9A326"
          rotation={[0.3, 0.4, 0.2]}
          points={[
            [-1.4, 0.6, 0.5],

            [-0.6, 1.2, -0.2],

            [0.5, 0.7, 0.3],

            [1.5, -0.2, -0.2],

            [0.8, -1.1, 0.2],

            [-0.4, -0.8, -0.4],

            [-1.5, 0.1, 0.2],
          ]}
        />

        {/* =================================
                    CENTRAL GLASS OBJECT
                ================================= */}

        <mesh position={[0, 0, 0.3]}>
          <octahedronGeometry args={[0.65, 1]} />

          <meshStandardMaterial
            color="#FFFFFF"
            transparent
            opacity={0.78}
            roughness={0.08}
            metalness={0.35}
          />
        </mesh>

        {/* =================================
                    GREEN FLOATING ELEMENT
                ================================= */}

        <mesh position={[-1.8, 0.8, 0.2]} scale={0.13}>
          <boxGeometry />

          <meshStandardMaterial
            color="#86C957"
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* =================================
                    GOLD FLOATING ELEMENT
                ================================= */}

        <mesh position={[1.7, 0.9, -0.2]} scale={0.18}>
          <octahedronGeometry />

          <meshStandardMaterial
            color="#E5AA28"
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* =================================
                    BLUE FLOATING ELEMENT
                ================================= */}

        <mesh position={[1.5, -0.9, 0.4]} scale={0.1}>
          <boxGeometry />

          <meshStandardMaterial
            color="#5FA7B5"
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        {/* =================================
                    SMALL WHITE ELEMENT
                ================================= */}

        <mesh position={[-1.5, -0.8, 0.3]} scale={0.09}>
          <sphereGeometry args={[1, 16, 16]} />

          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.15}
            metalness={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
};

// ========================================
// DESIGN PAGE
// ========================================

const Design = () => {
  return (
    <div className="design-page">
      {/* =================================
                BACKGROUND
            ================================= */}

      <div className="design-glow glow-one" />

      <div className="design-glow glow-two" />

      {/* =================================
                NAVBAR
            ================================= */}

      <nav className="design-nav">
        {/* Back */}

        <Link to="/" className="back-button">
          <ArrowLeft size={18} />

          <span>Back</span>
        </Link>

        {/* Logo */}

        <div className="design-logo">INNOVATIVE BLOSSOM</div>
      </nav>

      {/* =================================
                HERO
            ================================= */}

      <main className="design-hero">
        {/* =================================
                    LEFT CONTENT
                ================================= */}

        <section className="design-content">
          {/* Small label */}

          <div className="design-number">01 — BEAUTIFUL DESIGN</div>

          {/* Heading */}

          <h1>
            We create
            <span>beautiful</span>
            digital experiences.
          </h1>

          {/* Description */}

          <p>
            We combine creativity, technology and thoughtful interaction to
            create digital experiences that people remember.
          </p>

          {/* Actions */}

          <div className="design-actions">
            <Link to="/contact" className="innovation-cta">
              Let's innovate
              <ArrowUpRight size={20} />
            </Link>
            <span className="scroll-text">Scroll to explore</span>
          </div>
        </section>

        {/* =================================
                    3D MODEL
                ================================= */}

        <section className="design-model">
          <Canvas
            camera={{
              position: [0, 0, 6],
              fov: 45,
            }}
          >
            {/* Ambient light */}

            <ambientLight intensity={1.5} />

            {/* Main light */}

            <directionalLight position={[3, 3, 4]} intensity={3} />

            {/* Soft green light */}

            <pointLight position={[-3, -2, 2]} intensity={3} color="#86C957" />

            {/* Warm light */}

            <pointLight position={[3, 1, 2]} intensity={2} color="#E5AA28" />

            {/* 3D Object */}

            <DesignObject />

            {/* Environment */}

            <Environment preset="city" />
          </Canvas>

          {/* Model label */}

          <div className="model-label">
            <span className="status-dot" />
            Interactive Experience
          </div>
        </section>
      </main>

      {/* =================================
                DESIGN PRINCIPLES
            ================================= */}

      <section className="design-features">
        {/* Clarity */}

        <div className="mini-card">
          <span>01</span>

          <div>
            <h3>Clarity</h3>

            <p>Simple interfaces. Powerful ideas.</p>
          </div>
        </div>

        {/* Emotion */}

        <div className="mini-card">
          <span>02</span>

          <div>
            <h3>Emotion</h3>

            <p>Experiences people actually remember.</p>
          </div>
        </div>

        {/* Purpose */}

        <div className="mini-card">
          <span>03</span>

          <div>
            <h3>Purpose</h3>

            <p>Every pixel has a reason.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
