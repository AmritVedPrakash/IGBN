import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, BriefcaseBusiness, Upload, ArrowRight } from "lucide-react";

export default function AnalyzeCompany() {
  const [fileName, setFileName] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <section className="bg-[#fbfaf8] py-10 md:py-14">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            overflow-hidden
            rounded-[18px]
            bg-[#071936]
            p-5
            md:p-8
            shadow-[0_15px_40px_rgba(0,0,0,0.15)]
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              -left-20
              -top-20
              h-60
              w-60
              rounded-full
              bg-[#eab33d]/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              lg:grid-cols-[1fr_1.5fr]
              gap-7
              items-center
            "
          >
            {/* LEFT CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                flex
                items-center
                gap-5
              "
            >
              <div
                className="
                  hidden
                  sm:flex
                  relative
                  h-[95px]
                  w-[95px]
                  items-center
                  justify-center
                  text-[#eab33d]
                "
              >
                <BarChart3 size={70} strokeWidth={1.4} />

                <BriefcaseBusiness
                  size={34}
                  className="
                    absolute
                    right-0
                    bottom-0
                  "
                  strokeWidth={1.4}
                />
              </div>

              <div>
                <h2
                  className="
                    text-xl
                    md:text-3xl
                    uppercase
                    font-bold
                    text-[#eab33d]
                  "
                >
                  Analyze Your Company
                </h2>

                <p
                  className="
                    mt-3
                    max-w-[420px]
                    text-xs
                    md:text-sm
                    leading-5
                    text-white/80
                  "
                >
                  Discover the best countries with buyers for your products.
                </p>

                <p
                  className="
                    mt-2
                    max-w-[430px]
                    text-xs
                    md:text-sm
                    leading-5
                    text-white/70
                  "
                >
                  Get a free analysis of your business and discover which
                  countries have the right buyers and the best opportunities for
                  you to expand.
                </p>
              </div>
            </motion.div>

            {/* FORM */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-3
              "
            >
              {/* Company Name */}

              <input
                type="text"
                placeholder="Company Name"
                className="
                  h-[42px]
                  rounded-md
                  bg-white
                  px-4
                  text-xs
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                "
              />

              {/* Email */}

              <input
                type="email"
                placeholder="Your Email"
                className="
                  h-[42px]
                  rounded-md
                  bg-white
                  px-4
                  text-xs
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                "
              />

              {/* Upload Catalog */}

              <label
                className="
                  h-[42px]
                  rounded-md
                  bg-white
                  px-4
                  flex
                  items-center
                  justify-between
                  cursor-pointer
                  text-xs
                  overflow-hidden
                "
              >
                <span
                  className="
                    truncate
                    max-w-[220px]
                    text-gray-600
                  "
                >
                  {fileName ? fileName : "Upload Catalog / Product List"}
                </span>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    shrink-0
                    font-semibold
                    text-[#071936]
                  "
                >
                  Choose File
                  <Upload size={15} />
                </div>

                <input
                  type="file"
                  accept="
                    .pdf,
                    .xlsx,
                    .xls,
                    .doc,
                    .docx
                  "
                  className="hidden"
                  onChange={handleUpload}
                />
              </label>

              {/* Company Type */}

              <div
                className="
                  h-[42px]
                  rounded-md
                  bg-white
                  px-4
                  flex
                  items-center
                  justify-between
                  text-xs
                "
              >
                <span
                  className="
                    text-gray-500
                    whitespace-nowrap
                  "
                >
                  Your company is more into
                </span>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    text-gray-700
                  "
                >
                  <label
                    className="
                      flex
                      items-center
                      gap-1.5
                    "
                  >
                    <input
                      type="checkbox"
                      className="
                        h-3.5
                        w-3.5
                        accent-[#eab33d]
                      "
                    />
                    Export
                  </label>

                  <label
                    className="
                      flex
                      items-center
                      gap-1.5
                    "
                  >
                    <input
                      type="checkbox"
                      className="
                        h-3.5
                        w-3.5
                        accent-[#eab33d]
                      "
                    />
                    Import
                  </label>
                </div>
              </div>

              {/* Current Export */}

              <input
                type="text"
                placeholder="Where do you currently export?"
                className="
                  md:col-span-2
                  h-[42px]
                  rounded-md
                  bg-white
                  px-4
                  text-xs
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                "
              />

              {/* Button */}

              <motion.button
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  md:col-span-2
                  h-[42px]
                  rounded-md
                  bg-[#eab33d]
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[#071936]
                  text-sm
                  font-semibold
                "
              >
                Analyze Now
                <ArrowRight size={17} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
