import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/logo.png";

export default function Footer() {
  const quickLinks = [
    "Home",
    "About Us",
    "Services",
    "Market Analyses",
    "Reports",
    "Contact Us",
  ];

  const services = [
    "Buyer Sourcing",
    "Supplier Sourcing",
    "Market Research",
    "Trade Intelligence",
    "Business Networking",
    "Export Consulting",
  ];

  const support = [
    "FAQ",
    "Terms & Conditions",
    "Privacy Policy",
    "Shipping Policy",
    "Refund Policy",
  ];

  return (
    <footer
      className="
        bg-[#061633]
        text-white
        pt-16
        pb-6
      "
    >
      <div
        className="
          max-w-[1400px]
          mx-auto
          px-5
          sm:px-8
        "
      >
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
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-12
          "
        >
          {/* Company */}

          <div>
            <img
              src={logo}
              alt="IGBN Logo"
              className="
                w-[150px]
                mb-5
                object-contain
              "
            />

            <p
              className="
                text-[15px]
                leading-7
                text-white/70
              "
            >
              IGBN Worldwide is a trusted B2B platform connecting global buyers
              with verified suppliers and helping businesses grow
              internationally.
            </p>

            <div
              className="
                flex
                gap-4
                mt-6
              "
            >
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                    }}
                    className="
                      h-11
                      w-11
                      rounded-full
                      bg-white/10
                      flex
                      items-center
                      justify-center
                      cursor-pointer
                      hover:bg-[#d9aa35]
                      hover:text-[#061633]
                      transition-colors
                      duration-300
                    "
                  >
                    <Icon size={20} />
                  </motion.div>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}

          <FooterColumn title="Quick Links" items={quickLinks} />

          {/* Services */}

          <FooterColumn title="Our Services" items={services} />

          {/* Support + Contact */}

          <div>
            <h3
              className="
                text-lg
                font-semibold
                mb-5
              "
            >
              Help & Support
            </h3>

            <ul className="space-y-3 mb-7">
              {support.map((item, index) => (
                <li
                  key={index}
                  className="
                      text-[15px]
                      text-white/70
                      hover:text-[#d9aa35]
                      transition
                      cursor-pointer
                    "
                >
                  {item}
                </li>
              ))}
            </ul>

            <h3
              className="
                text-lg
                font-semibold
                mb-4
              "
            >
              Contact Us
            </h3>

            <div className="space-y-4">
              <p
                className="
                  flex
                  items-center
                  gap-3
                  text-[15px]
                  text-white/70
                "
              >
                <MapPin size={19} className="shrink-0 text-[#d9aa35]" />
                Gurugram, Haryana, India
              </p>

              <p
                className="
                  flex
                  items-center
                  gap-3
                  text-[15px]
                  text-white/70
                "
              >
                <Phone size={19} className="shrink-0 text-[#d9aa35]" />
                +91 98765 43210
              </p>

              <p
                className="
                  flex
                  items-center
                  gap-3
                  text-[15px]
                  text-white/70
                "
              >
                <Mail size={19} className="shrink-0 text-[#d9aa35]" />
                info@igbnworldwide.com
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}

        <div
          className="
            mt-12
            pt-6
            border-t
            border-white/10
            text-center
            text-[14px]
            text-white/50
          "
        >
          © {new Date().getFullYear()} IGBN Worldwide Pvt. Ltd. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3
        className="
          text-lg
          font-semibold
          mb-5
        "
      >
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="
              text-[15px]
              text-white/70
              cursor-pointer
              hover:text-[#d9aa35]
              transition
            "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
