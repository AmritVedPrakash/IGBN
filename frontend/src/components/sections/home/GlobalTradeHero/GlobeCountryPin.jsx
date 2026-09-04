import React from "react";
import { Html } from "@react-three/drei";
import { MapPin } from "lucide-react";

function latLngToVector3(lat, lng, radius) {
  const latitude = THREE.MathUtils.degToRad(lat);
  const longitude = THREE.MathUtils.degToRad(lng);

  const x =
    radius *
    Math.cos(latitude) *
    Math.sin(longitude);

  const y =
    radius *
    Math.sin(latitude);

  const z =
    radius *
    Math.cos(latitude) *
    Math.cos(longitude);

  return [x, y, z];
}

import * as THREE from "three";

export default function GlobeCountryPin({
  country,
  radius = 2.045,
  globeRef,
  active,
  onEnter,
  onLeave,
  onClick,
}) {
  const position = latLngToVector3(
    country.latitude,
    country.longitude,
    radius
  );

  return (
    <Html
      position={position}
      center
      occlude={globeRef ? [globeRef] : true}
      distanceFactor={7.2}
      zIndexRange={[40, 0]}
      style={{
        pointerEvents: "auto",
      }}
    >
      <button
        type="button"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className="
          group
          relative
          flex
          h-[45px]
          w-[45px]
          items-center
          justify-center
          rounded-full
          outline-none
        "
      >
        {/* OUTER PULSE */}
        <span
          className={`
            pointer-events-none
            absolute
            inset-0
            rounded-full
            border
            transition-all
            duration-300

            ${
              active
                ? `
                  scale-[1]
                  border-[#F1B747]/80
                  bg-[#D69A2B]/20
                  shadow-[0_0_30px_rgba(214,154,43,.75)]
                `
                : `
                  border-[#D69A2B]/40
                  bg-[#D69A2B]/10
                  animate-ping
                `
            }
          `}
        />

        {/* PIN CIRCLE */}
        <span
          className={`
            relative
            z-10
            flex
            h-[30px]
            w-[30px]
            items-center
            justify-center
            rounded-full
            border-2
            backdrop-blur-md
            transition-all
            duration-300

            group-hover:scale-110

            ${
              active
                ? `
                  border-[#F1B747]
                  bg-[#15202A]
                  shadow-[0_0_25px_rgba(214,154,43,.65)]
                `
                : `
                  border-[#B67F2B]
                  bg-[#071522]/95
                  shadow-[0_6px_20px_rgba(0,0,0,.45)]
                `
            }
          `}
        >
          <img
            src={country.flag}
            alt={country.name}
            draggable={false}
            className="
              h-[15px]
              w-[15px]
              rounded-full
              object-cover
            "
          />
        </span>

        {/* MAP PIN TIP */}
        <MapPin
          size={18}
          strokeWidth={1.8}
          fill="#D69A2B"
          className="
            pointer-events-none
            absolute
            -bottom-[2px]
            left-1/2
            z-0
            -translate-x-1/2
            text-[#D69A2B]
          "
        />

        {/* COUNTRY NAME ON HOVER */}
        <span
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[66px]
            z-50
            -translate-x-1/2
            translate-y-1
            whitespace-nowrap
            rounded-[5px]
            border
            border-[#735123]
            bg-[#03111F]/95
            px-2.5
            py-1.5
            text-[11px]
            font-semibold
            text-[#F2F4F5]
            opacity-0
            shadow-[0_6px_18px_rgba(0,0,0,.45)]
            transition-all
            duration-200

            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          {country.name}
        </span>
      </button>
    </Html>
  );
}