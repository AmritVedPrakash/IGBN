import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import tigerImage from "../../../assets/services/tiger.png";

export default function MadeInIndia() {
  const points = [
    "Promoting India. Supporting Business.",
    "Building Global Presence.",
    "Trusted by Indian Businesses Worldwide.",
  ];

  return (
    <section className="w-full bg-[#020d19] px-4 py-5 md:px-6 lg:px-8">
      <div
        className="
          mx-auto
          max-w-[1650px]
          overflow-hidden
          rounded-[10px]
          border
          border-[#162d43]
          bg-[#03111f]
          px-5
          py-5
          shadow-[0_10px_35px_rgba(0,0,0,0.3)]
          md:px-7
          lg:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-7

            lg:flex-row
            lg:justify-between
            lg:gap-8
          "
        >
          {/* ================= LEFT SECTION ================= */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-5

              sm:flex-row
              sm:justify-center

              lg:w-auto
              lg:justify-start
            "
          >
            {/* Tiger Image */}
            <div
              className="
                flex
                w-[155px]
                shrink-0
                items-center
                justify-center

                sm:w-[175px]
                lg:w-[190px]
              "
            >
              <img
                src={tigerImage}
                alt="Make in India"
                className="
                  h-auto
                  w-full
                  object-contain
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* Heading */}
            <div className="text-center sm:text-left">
              <h2
                className="
                  max-w-[400px]
                  text-[21px]
                  font-semibold
                  leading-[1.45]
                  text-[#d99a28]

                  sm:text-[23px]
                  lg:text-[25px]
                  xl:text-[27px]
                "
              >
                We Don’t Just Make Promises,
                <br />
                We Create Global Opportunities.
              </h2>
            </div>
          </div>

          {/* ================= CENTER POINTS ================= */}
          <div
            className="
              flex
              w-full
              max-w-[420px]
              flex-col
              gap-3

              lg:max-w-[430px]
            "
          >
            {points.map((point, index) => (
              <div
                key={index}
                className="
                  group
                  flex
                  items-center
                  gap-3
                "
              >
                <CheckCircle2
                  strokeWidth={2}
                  className="
                    h-[18px]
                    w-[18px]
                    shrink-0
                    text-[#d99a28]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <p
                  className="
                    text-[13px]
                    font-medium
                    leading-[1.5]
                    text-[#d5dbe1]

                    sm:text-[14px]
                    lg:text-[15px]
                  "
                >
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* ================= BUTTON ================= */}
          <div className="flex shrink-0 items-center justify-center">
            <button
              className="
                group
                flex
                min-w-[190px]
                items-center
                justify-center
                gap-3
                rounded-[7px]
                border
                border-[#d49a3b]
                bg-gradient-to-r
                from-[#d5a34c]
                via-[#dba84f]
                to-[#c88d2e]
                px-7
                py-[15px]
                text-[14px]
                font-semibold
                text-[#07111b]
                shadow-[0_6px_20px_rgba(211,151,52,0.18)]
                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:shadow-[0_10px_30px_rgba(211,151,52,0.30)]

                lg:text-[15px]
              "
            >
              Partner With IGBN
              <ArrowRight
                strokeWidth={2}
                className="
                  h-[19px]
                  w-[19px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
