import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    ArrowUpRight
} from "lucide-react";

import {
    Canvas,
    useFrame
} from "@react-three/fiber";

import {
    Float,
    Environment
} from "@react-three/drei";

import "../styles/technology.css";


// ========================================
// TECHNOLOGY CORE
// ========================================

const TechnologyCore = () => {

    const groupRef = useRef();

    const ringOne = useRef();
    const ringTwo = useRef();
    const ringThree = useRef();

    useFrame((state) => {

        const time =
            state.clock.elapsedTime;


        // Main group rotation

        if (groupRef.current) {

            groupRef.current.rotation.y =
                time * 0.15;

            groupRef.current.rotation.x =
                Math.sin(time * 0.3) * 0.12;

            groupRef.current.position.y =
                Math.sin(time * 0.8) * 0.12;
        }


        // Outer ring

        if (ringOne.current) {

            ringOne.current.rotation.x =
                time * 0.45;

            ringOne.current.rotation.z =
                time * 0.2;
        }


        // Second ring

        if (ringTwo.current) {

            ringTwo.current.rotation.y =
                -time * 0.35;

            ringTwo.current.rotation.x =
                Math.sin(time * 0.4) * 0.4;
        }


        // Third ring

        if (ringThree.current) {

            ringThree.current.rotation.z =
                time * 0.55;

            ringThree.current.rotation.y =
                time * 0.15;
        }

    });


    return (

        <Float
            speed={1.5}
            floatIntensity={0.8}
            rotationIntensity={0.15}
        >

            <group ref={groupRef}>


                {/* =================================
                    OUTER BLACK RING
                ================================= */}

                <mesh ref={ringOne}>

                    <torusGeometry
                        args={[
                            1.75,
                            0.025,
                            16,
                            100
                        ]}
                    />

                    <meshStandardMaterial
                        color="#92ba92"
                        emissive="#617c61"
                        emissiveIntensity={0.5}
                        metalness={0.95}
                        roughness={0.18}
                    />

                </mesh>


                {/* =================================
                    SECOND DARK RING
                ================================= */}

                <mesh
                    ref={ringTwo}
                    rotation={[
                        Math.PI / 2,
                        0,
                        0
                    ]}
                >

                    <torusGeometry
                        args={[
                            1.35,
                            0.035,
                            16,
                            100
                        ]}
                    />

                    <meshStandardMaterial
                        color="#027457"
                        emissive="#22aa71"
                        emissiveIntensity={0.7}
                        metalness={0.95}
                        roughness={0.2}
                    />

                </mesh>


                {/* =================================
                    THIRD DARK RING
                ================================= */}

                <mesh
                    ref={ringThree}
                    rotation={[
                        0.8,
                        0.4,
                        0
                    ]}
                >

                    <torusGeometry
                        args={[
                            1.05,
                            0.025,
                            16,
                            100
                        ]}
                    />

                    <meshStandardMaterial
                        color="#bad4c7"
                        emissive="#19a361"
                        emissiveIntensity={0.6}
                        metalness={1}
                        roughness={0.15}
                    />

                </mesh>


                {/* =================================
                    DARK CENTRAL CORE
                ================================= */}

                <mesh
                    rotation={[
                        0.4,
                        0.4,
                        0
                    ]}
                >

                    <icosahedronGeometry
                        args={[
                            0.72,
                            2
                        ]}
                    />

                    <meshPhysicalMaterial
                        color="#eceeed"
                        transmission={0.35}
                        thickness={1}
                        roughness={0.12}
                        metalness={0.85}
                        transparent
                        opacity={0.95}
                    />

                </mesh>


                {/* =================================
                    INNER TECHNOLOGY CORE
                ================================= */}

                <mesh>

                    <sphereGeometry
                        args={[
                            0.27,
                            32,
                            32
                        ]}
                    />

                    <meshStandardMaterial
                        color="#52685c"
                        emissive="#30483a"
                        emissiveIntensity={2}
                        metalness={0.7}
                        roughness={0.18}
                    />

                </mesh>


                {/* =================================
                    TOP NODE
                ================================= */}

                <mesh
                    position={[
                        0,
                        1.7,
                        0
                    ]}
                >

                    <sphereGeometry
                        args={[
                            0.055,
                            16,
                            16
                        ]}
                    />

                    <meshStandardMaterial
                        color="#6c8174"
                        emissive="#40564a"
                        emissiveIntensity={2}
                    />

                </mesh>


                {/* =================================
                    RIGHT NODE
                ================================= */}

                <mesh
                    position={[
                        1.6,
                        0.7,
                        0
                    ]}
                >

                    <sphereGeometry
                        args={[
                            0.06,
                            16,
                            16
                        ]}
                    />

                    <meshStandardMaterial
                        color="#59645f"
                        emissive="#303b35"
                        emissiveIntensity={2}
                    />

                </mesh>


                {/* =================================
                    LEFT NODE
                ================================= */}

                <mesh
                    position={[
                        -1.6,
                        -0.5,
                        0
                    ]}
                >

                    <sphereGeometry
                        args={[
                            0.055,
                            16,
                            16
                        ]}
                    />

                    <meshStandardMaterial
                        color="#66736b"
                        emissive="#36443b"
                        emissiveIntensity={2}
                    />

                </mesh>


                {/* =================================
                    BOTTOM NODE
                ================================= */}

                <mesh
                    position={[
                        0.7,
                        -1.5,
                        0.2
                    ]}
                >

                    <sphereGeometry
                        args={[
                            0.05,
                            16,
                            16
                        ]}
                    />

                    <meshStandardMaterial
                        color="#515c56"
                        emissive="#2c3831"
                        emissiveIntensity={2}
                    />

                </mesh>


            </group>

        </Float>
    );
};


// ========================================
// TECHNOLOGY PAGE
// ========================================

const Technology = () => {

    return (

        <div className="technology-page">


            {/* =================================
                BACKGROUND GLOWS
            ================================= */}

            <div
                className="technology-glow glow-one"
            />

            <div
                className="technology-glow glow-two"
            />


            {/* =================================
                NAVBAR
            ================================= */}

            <nav className="technology-nav">

                <Link
                    to="/"
                    className="technology-back"
                >

                    <ArrowLeft
                        size={18}
                    />

                    <span>
                        Back
                    </span>

                </Link>


                <div className="technology-logo">

                    INNOVATIVE BLOSSOM

                </div>

            </nav>


            {/* =================================
                HERO
            ================================= */}

            <main className="technology-hero">


                {/* =================================
                    LEFT CONTENT
                ================================= */}

                <section className="technology-content">

                    <div className="technology-number">

                        02 — POWERFUL TECHNOLOGY

                    </div>


                    <h1>

                        Technology

                        <span>
                            that moves
                        </span>

                        ideas forward.

                    </h1>


                    <p>

                        We build intelligent, scalable
                        and reliable technology that
                        transforms ideas into powerful
                        digital experiences.

                    </p>


                    {/* =================================
                        ACTIONS
                    ================================= */}

                    <div className="technology-actions">

                        <Link
                            to="/contact"
                            className="technology-cta"
                        >

                            Let's build

                            <ArrowUpRight
                                size={20}
                            />

                        </Link>


                        <span className="technology-scroll">

                            Scroll to explore

                        </span>

                    </div>

                </section>


                {/* =================================
                    3D MODEL
                ================================= */}

                <section className="technology-model">

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

                        {/* =================================
                            LIGHTING
                        ================================= */}

                        <ambientLight
                            intensity={1.2}
                        />


                        <directionalLight
                            position={[
                                4,
                                5,
                                5
                            ]}
                            intensity={2.5}
                            color="#ffffff"
                        />


                        {/* Dark green light */}

                        <pointLight
                            position={[
                                -4,
                                2,
                                3
                            ]}
                            intensity={3}
                            color="#182018"
                        />


                        {/* Dark teal light */}

                        <pointLight
                            position={[
                                4,
                                -2,
                                2
                            ]}
                            intensity={2.5}
                            color="#172022"
                        />


                        {/* Dark neutral light */}

                        <pointLight
                            position={[
                                0,
                                3,
                                4
                            ]}
                            intensity={1.5}
                            color="#111111"
                        />


                        {/* =================================
                            3D TECHNOLOGY OBJECT
                        ================================= */}

                        <TechnologyCore />


                        {/* =================================
                            ENVIRONMENT
                        ================================= */}

                        <Environment
                            preset="studio"
                            environmentIntensity={0.8}
                        />

                    </Canvas>


                    {/* =================================
                        MODEL LABEL
                    ================================= */}

                    <div className="technology-label">

                        <span className="technology-status" />

                        Intelligent Systems

                    </div>

                </section>

            </main>


            {/* =================================
                FEATURE CARDS
            ================================= */}

            <section className="technology-features">


                {/* CARD 1 */}

                <div className="technology-card">

                    <span>
                        01
                    </span>

                    <div>

                        <h3>
                            Scalable
                        </h3>

                        <p>
                            Technology designed
                            to grow with your ideas.
                        </p>

                    </div>

                </div>


                {/* CARD 2 */}

                <div className="technology-card">

                    <span>
                        02
                    </span>

                    <div>

                        <h3>
                            Intelligent
                        </h3>

                        <p>
                            Smart systems that
                            turn data into decisions.
                        </p>

                    </div>

                </div>


                {/* CARD 3 */}

                <div className="technology-card">

                    <span>
                        03
                    </span>

                    <div>

                        <h3>
                            Reliable
                        </h3>

                        <p>
                            Robust technology
                            built for real-world use.
                        </p>

                    </div>

                </div>


            </section>

        </div>
    );
};


export default Technology;