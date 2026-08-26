import React from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logo.png";

import linkedin from "../../assets/footer/linkedin.png";
import facebook from "../../assets/footer/facebook.png";
import instagram from "../../assets/footer/instagram.png";
import youtube from "../../assets/footer/youtube.png";
import whatsapp from "../../assets/footer/whatsapp.png";

export default function Footer() {
  const socialIcons = [linkedin, facebook, instagram, youtube, whatsapp];

  return (
    <footer
      className="
        w-full
        bg-[#020B14]/95
        border-t
        border-[#1d2c45]
        px-5
        py-4
        sm:px-8
        lg:px-10
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
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
          mx-auto
          max-w-[1650px]

          flex
          items-center
          justify-between
          gap-6

          flex-wrap

          lg:flex-nowrap
        "
      >
        {/* ================= LOGO ================= */}

        <div
          className="
            flex
            items-center
            shrink-0
          "
        >
          <img
            src={logo}
            alt="IGBN Logo"
            className="
              w-[125px]
              sm:w-[150px]
              object-contain
            "
          />
        </div>

        {/* ================= CENTER LINKS ================= */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-5

            text-[13px]
            sm:text-[18px]

            text-[#D8DCE2]

            flex-wrap
          "
        >
          <span
            className="
              text-white/80
            "
          >
            © 2024 IGBN. All Rights Reserved.
          </span>

          <span
            className="
              hidden
              sm:block
              text-[#697789]
            "
          >
            |
          </span>

          <a
            href="#"
            className="
              hover:text-[#D99B2B]
              transition
            "
          >
            Privacy Policy
          </a>

          <span
            className="
              hidden
              sm:block
              text-[#697789]
            "
          >
            |
          </span>

          <a
            href="#"
            className="
              hover:text-[#D99B2B]
              transition
            "
          >
            Terms & Conditions
          </a>
        </div>

        {/* ================= SOCIAL ================= */}

        {/* ================= SOCIAL ================= */}

<div
  className="
    flex
    items-center
    gap-5
    shrink-0
  "
>
  <span
    className="
      hidden
      md:block

      text-[18px]
      font-medium
      text-[#E5E7EB]
    "
  >
    Follow Us
  </span>

  {socialIcons.map((icon, index) => (
    <motion.div
      key={index}
      whileHover={{
        y: -4,
        scale: 1.1,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        flex
        h-[50px]
        w-[50px]
        items-center
        justify-center

        cursor-pointer

        rounded-full

        transition-all

        hover:bg-[#D99B2B]/20
      "
    >
      <img
        src={icon}
        alt="social icon"
        className="
          h-[50px]
          w-[50px]
          object-contain
        "
      />
    </motion.div>
  ))}
</div>
      </motion.div>
    </footer>
  );
}
