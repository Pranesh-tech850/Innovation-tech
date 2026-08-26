import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import {
    Canvas,
    useFrame
} from "@react-three/fiber";

import {
    Float,
    Environment
} from "@react-three/drei";

import * as THREE from "three";

import "../styles/innovation.css";


// ========================================
// FLOATING FRAGMENT
// ========================================

const Fragment = ({
    position,
    rotation,
    color,
    scale = 1
}) => {

    const ref = useRef();

    useFrame((state) => {

        if (!ref.current) return;

        const time =
            state.clock.elapsedTime;

        ref.current.rotation.x += 0.002;
        ref.current.rotation.y += 0.003;

        ref.current.position.y =
            position[1] +
            Math.sin(
                time * 0.8 +
                position[0]
            ) * 0.08;

    });

    return (

        <mesh
            ref={ref}
            position={position}
            rotation={rotation}
            scale={scale}
        >

            <octahedronGeometry
                args={[0.32, 1]}
            />

            <meshPhysicalMaterial

                color={color}

                roughness={0.12}

                metalness={0.45}

                transmission={0.25}

                thickness={0.4}

                transparent

                opacity={0.9}

            />

        </mesh>
    );
};


// ========================================
// INNOVATION CORE
// ========================================

const InnovationObject = () => {

    const groupRef = useRef();
    const coreRef = useRef();

    useFrame((state) => {

        if (!groupRef.current) return;

        const time =
            state.clock.elapsedTime;


        // Main movement

        groupRef.current.rotation.y =
            time * 0.16;

        groupRef.current.rotation.x =
            Math.sin(time * 0.3) * 0.12;


        // Floating

        groupRef.current.position.y =
            Math.sin(time * 0.7) * 0.13;


        // Core pulse

        if (coreRef.current) {

            const pulse =
                1 +
                Math.sin(time * 2) *
                0.08;

            coreRef.current.scale.set(
                pulse,
                pulse,
                pulse
            );

        }

    });


    return (

        <Float
            speed={1.2}
            floatIntensity={0.7}
            rotationIntensity={0.15}
        >

            <group ref={groupRef}>


                {/* =================================
                    CENTRAL CORE
                ================================= */}

                <mesh
                    ref={coreRef}
                    rotation={[
                        0.4,
                        0.3,
                        0
                    ]}
                >

                    <icosahedronGeometry
                        args={[
                            0.65,
                            2
                        ]}
                    />

                    <meshPhysicalMaterial

                        color="#D9D4FF"

                        transmission={0.75}

                        thickness={0.9}

                        roughness={0.06}

                        metalness={0.15}

                        transparent

                        opacity={0.92}

                    />

                </mesh>


                {/* =================================
                    INNER LIGHT
                ================================= */}

                <mesh>

                    <sphereGeometry
                        args={[
                            0.22,
                            32,
                            32
                        ]}
                    />

                    <meshStandardMaterial

                        color="#B7A8FF"

                        emissive="#8B7CFF"

                        emissiveIntensity={5}

                    />

                </mesh>


                {/* =================================
                    TOP FRAGMENT
                ================================= */}

                <Fragment

                    position={[
                        0,
                        1.45,
                        0
                    ]}

                    rotation={[
                        0.3,
                        0.5,
                        0
                    ]}

                    color="#8B7CFF"

                    scale={0.8}

                />


                {/* =================================
                    RIGHT FRAGMENT
                ================================= */}

                <Fragment

                    position={[
                        1.45,
                        0.45,
                        0.2
                    ]}

                    rotation={[
                        0.4,
                        0.8,
                        0.2
                    ]}

                    color="#5FA7B5"

                    scale={0.7}

                />


                {/* =================================
                    BOTTOM RIGHT
                ================================= */}

                <Fragment

                    position={[
                        1.0,
                        -1.2,
                        -0.2
                    ]}

                    rotation={[
                        0.2,
                        0.7,
                        0.4
                    ]}

                    color="#D9A326"

                    scale={0.55}

                />


                {/* =================================
                    BOTTOM LEFT
                ================================= */}

                <Fragment

                    position={[
                        -1.25,
                        -1.0,
                        0.1
                    ]}

                    rotation={[
                        0.7,
                        0.2,
                        0.5
                    ]}

                    color="#87C957"

                    scale={0.75}

                />


                {/* =================================
                    LEFT FRAGMENT
                ================================= */}

                <Fragment

                    position={[
                        -1.55,
                        0.45,
                        -0.2
                    ]}

                    rotation={[
                        0.3,
                        0.6,
                        0
                    ]}

                    color="#8B7CFF"

                    scale={0.55}

                />


                {/* =================================
                    SMALL PARTICLES
                ================================= */}

                <Particle
                    position={[
                        -2,
                        1.2,
                        0
                    ]}
                    color="#8B7CFF"
                />

                <Particle
                    position={[
                        2,
                        1,
                        -0.2
                    ]}
                    color="#5FA7B5"
                />

                <Particle
                    position={[
                        1.8,
                        -1.3,
                        0.2
                    ]}
                    color="#D9A326"
                />

                <Particle
                    position={[
                        -1.8,
                        -1.3,
                        0
                    ]}
                    color="#87C957"
                />

                <Particle
                    position={[
                        0,
                        2,
                        -0.3
                    ]}
                    color="#8B7CFF"
                />

            </group>

        </Float>
    );
};


// ========================================
// PARTICLE
// ========================================

const Particle = ({
    position,
    color
}) => {

    return (

        <mesh
            position={position}
            scale={0.07}
        >

            <sphereGeometry
                args={[
                    1,
                    12,
                    12
                ]}
            />

            <meshStandardMaterial

                color={color}

                emissive={color}

                emissiveIntensity={3}

                metalness={0.5}

                roughness={0.15}

            />

        </mesh>
    );
};


// ========================================
// INNOVATION PAGE
// ========================================

const Innovation = () => {

    return (

        <div className="innovation-page">


            {/* Background */}

            <div
                className="innovation-glow glow-one"
            />

            <div
                className="innovation-glow glow-two"
            />


            {/* =================================
                NAVBAR
            ================================= */}

            <nav className="innovation-nav">

                <Link
                    to="/"
                    className="innovation-back"
                >

                    <ArrowLeft
                        size={18}
                    />

                    <span>
                        Back
                    </span>

                </Link>


                <div className="innovation-logo">

                    INNOVATIVE BLOSSOM

                </div>

            </nav>


            {/* =================================
                HERO
            ================================= */}

            <main className="innovation-hero">


                {/* Content */}

                <section
                    className="innovation-content"
                >

                    <div
                        className="innovation-number"
                    >

                        03 — INNOVATION

                    </div>


                    <h1>

                        Ideas

                        <span>
                            without
                        </span>

                        limits.

                    </h1>


                    <p>

                        We explore new possibilities,
                        challenge conventional thinking
                        and turn bold ideas into
                        meaningful digital experiences.

                    </p>


                    <div
                        className="innovation-actions"
                    >

                        <Link
                            to="/contact"
                            className="innovation-cta"
                        >

                            Let's innovate

                            <ArrowUpRight
                                size={20}
                            />

                        </Link>


                        <span
                            className="innovation-scroll"
                        >

                            Scroll to explore

                        </span>

                    </div>

                </section>


                {/* =================================
                    3D MODEL
                ================================= */}

                <section
                    className="innovation-model"
                >

                    <Canvas
                        camera={{
                            position: [
                                0,
                                0,
                                6
                            ],
                            fov: 42
                        }}
                    >

                        <ambientLight
                            intensity={1.6}
                        />


                        <directionalLight
                            position={[
                                4,
                                5,
                                5
                            ]}
                            intensity={3}
                        />


                        <pointLight
                            position={[
                                -4,
                                2,
                                3
                            ]}
                            intensity={4}
                            color="#8B7CFF"
                        />


                        <pointLight
                            position={[
                                4,
                                -2,
                                2
                            ]}
                            intensity={3}
                            color="#5FA7B5"
                        />


                        <pointLight
                            position={[
                                0,
                                3,
                                4
                            ]}
                            intensity={2}
                            color="#D9A326"
                        />


                        <InnovationObject />


                        <Environment
                            preset="studio"
                            environmentIntensity={0.7}
                        />

                    </Canvas>


                    <div
                        className="innovation-label"
                    >

                        <span
                            className="innovation-status"
                        />

                        Experimental Thinking

                    </div>

                </section>

            </main>


            {/* =================================
                FEATURES
            ================================= */}

            <section
                className="innovation-features"
            >


                <div
                    className="innovation-card"
                >

                    <span>
                        01
                    </span>

                    <div>

                        <h3>
                            Explore
                        </h3>

                        <p>
                            Question the obvious
                            and discover new
                            possibilities.
                        </p>

                    </div>

                </div>


                <div
                    className="innovation-card"
                >

                    <span>
                        02
                    </span>

                    <div>

                        <h3>
                            Experiment
                        </h3>

                        <p>
                            Turn ambitious ideas
                            into working concepts.
                        </p>

                    </div>

                </div>


                <div
                    className="innovation-card"
                >

                    <span>
                        03
                    </span>

                    <div>

                        <h3>
                            Transform
                        </h3>

                        <p>
                            Create solutions that
                            move ideas forward.
                        </p>

                    </div>

                </div>


            </section>

        </div>
    );
};


export default Innovation;