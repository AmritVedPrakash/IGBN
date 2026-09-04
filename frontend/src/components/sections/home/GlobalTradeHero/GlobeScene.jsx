import React, { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, Line } from "@react-three/drei";
import * as THREE from "three";

import GlobeCountryPin from "./GlobeCountryPin";

// apne assets me ye textures rakho
import earthTexture from "../../../../assets/globe/earth-map.jpg";
import earthNightTexture from "../../../../assets/globe/earth-night.jpg";

function latLngToVector3(lat, lng, radius = 2) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lng + 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function createArcPoints(start, end, radius = 2.03) {
  const startVec = latLngToVector3(start.latitude, start.longitude, radius);

  const endVec = latLngToVector3(end.latitude, end.longitude, radius);

  const mid = startVec.clone().add(endVec).multiplyScalar(0.5).normalize();

  const distance = startVec.distanceTo(endVec);

  mid.multiplyScalar(radius + distance * 0.32);

  const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec);

  return curve.getPoints(60);
}

function TradeArc({ start, end }) {
  const points = useMemo(() => createArcPoints(start, end), [start, end]);

  return (
    <Line
      points={points}
      color="#F4A62A"
      lineWidth={1}
      transparent
      opacity={0.65}
    />
  );
}

function Globe({ countries, activeCountry, onCountryEnter, onCountryClick }) {
  const globeGroup = useRef();
  const globeRef = useRef();

  const [hoveringPin, setHoveringPin] = useState(false);
  const [dragging, setDragging] = useState(false);

  const earthMap = useLoader(THREE.TextureLoader, earthTexture);

  const nightMap = useLoader(THREE.TextureLoader, earthNightTexture);

  useFrame((state, delta) => {
    if (!globeGroup.current) return;

    if (!hoveringPin && !dragging) {
      globeGroup.current.rotation.y += delta * 0.07;
    }
  });

  const list = Object.values(countries);

  return (
    <>
      <ambientLight intensity={0.25} />

      <directionalLight position={[5, 3, 5]} intensity={1.7} color="#6FAEFF" />

      <pointLight position={[-3, 1, 4]} intensity={2.2} color="#E99A22" />

      <group ref={globeGroup}  position={[0, -0.35, 0]} rotation={[0.05, -0.6, 0]}  scale={0.71}>
        {/* ================= EARTH ================= */}

        <mesh ref={globeRef}>
          <sphereGeometry args={[2, 128, 128]} />

          <meshStandardMaterial
            map={earthMap}
           
            roughness={0.85}
            metalness={0.15}
          />
        </mesh>

        {/* ================= NIGHT LIGHTS ================= */}

        <mesh scale={1.003}>
          <sphereGeometry args={[2, 128, 128]} />

          <meshBasicMaterial
            map={nightMap}
            transparent
            opacity={0.72}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* ================= BLUE EDGE ================= */}

        <mesh scale={1.015}>
          <sphereGeometry args={[2, 96, 96]} />

          <meshBasicMaterial
            color="#0B77D0"
            transparent
            opacity={0.08}
            side={THREE.BackSide}
          />
        </mesh>

        {/* ================= NETWORK ARCS ================= */}

        <TradeArc start={countries.india} end={countries.usa} />

        <TradeArc start={countries.india} end={countries.uk} />

        <TradeArc start={countries.india} end={countries.germany} />

        <TradeArc start={countries.india} end={countries.uae} />

        <TradeArc start={countries.india} end={countries.china} />

        <TradeArc start={countries.india} end={countries.australia} />

        {/* ================= PINS ================= */}

        {list.map((country) => (
          <GlobeCountryPin
            key={country.id}
            country={country}
            radius={2.055}
            globeRef={globeRef}
            active={activeCountry?.id === country.id}
            onEnter={() => {
              setHoveringPin(true);
              onCountryEnter(country);
            }}
            onLeave={() => {
              setHoveringPin(false);
            }}
            onClick={() => {
              onCountryClick(country);
            }}
          />
        ))}
      </group>

      {/* ================= OUTER ATMOSPHERE ================= */}

      {/* <mesh scale={1.13}>
        <sphereGeometry args={[2, 96, 96]} />

        <meshBasicMaterial
          color="#1285DD"
          transparent
          opacity={0.045}
          side={THREE.BackSide}
        />
      </mesh> */}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.38}
        dampingFactor={0.07}
        enableDamping
        minPolarAngle={Math.PI * 0.23}
        maxPolarAngle={Math.PI * 0.77}
        onStart={() => setDragging(true)}
        onEnd={() => setDragging(false)}
      />
    </>
  );
}

export default function GlobeScene({
  countries,
  activeCountry,
  onCountryEnter,
  onCountryClick,
}) {
  return (
    <div
      className="
        absolute
        left-0
        top-[-12%]

        h-[125%]
        w-full

        overflow-visible
      "
    >
      {/* large blue background halo */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-[650px]
          w-[650px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full
          bg-[#09699B]/10
          blur-[120px]
        "
      />

      {/* gold glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[48%]
          top-[46%]

          h-[300px]
          w-[300px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full
          
          blur-[90px]
        "
      />

      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 0.1, 5.5],
          fov: 37,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        <Globe
          countries={countries}
          activeCountry={activeCountry}
          onCountryEnter={onCountryEnter}
          onCountryClick={onCountryClick}
        />
      </Canvas>
    </div>
  );
}