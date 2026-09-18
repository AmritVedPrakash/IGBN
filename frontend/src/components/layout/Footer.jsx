import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import logo from "../../assets/logo.png";

import linkedin from "../../assets/footer/linkedin.png";
import facebook from "../../assets/footer/facebook.png";
import instagram from "../../assets/footer/instagram.png";
import youtube from "../../assets/footer/youtube.png";
import whatsapp from "../../assets/footer/whatsapp.png";

export default function Footer() {
  const socialIcons = [linkedin, facebook, instagram, youtube, whatsapp];

  // ===================================================
  // FOOTER LINK COLUMNS
  // Replace the `href` values with your real routes.
  // ===================================================
  const linkColumns = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Vision & Mission", href: "/about#vision" },
        { label: "Our Team", href: "/team" },
        { label: "Trade Ambassadors", href: "/ambassadors" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "For Business",
      links: [
        { label: "Join as a Buyer", href: "/register/buyer" },
        { label: "Join as a Supplier", href: "/register/supplier" },
        { label: "Post an RFQ", href: "/rfq/new" },
        { label: "Browse RFQs", href: "/rfq" },
        { label: "Verified Suppliers", href: "/suppliers" },
        { label: "Membership Plans", href: "/pricing" },
      ],
    },
    {
      title: "Trade Intelligence",
      links: [
        { label: "Currency Market", href: "/trade-intelligence/currency" },
        { label: "Commodity Prices", href: "/commodity-market" },
        { label: "Market Insights", href: "/insights" },
        { label: "Global Demand Alerts", href: "/alerts" },
        { label: "Export Readiness", href: "/export-readiness" },
        { label: "Country Profiles", href: "/countries" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Export Documentation", href: "/resources/documentation" },
        { label: "Trade Guides", href: "/resources/guides" },
        { label: "HS Code Finder", href: "/tools/hs-code" },
        { label: "Blog & News", href: "/blog" },
        { label: "FAQs", href: "/faq" },
        { label: "Help & Support", href: "/support" },
      ],
    },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer
      className="
        w-full
        border-t
        border-[#1d2c45]
        bg-[#020B14]/95
      "
    >
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
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
          px-5
          py-10

          sm:px-8
          lg:px-10
          lg:py-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-10

            sm:grid-cols-2
            lg:grid-cols-[1.4fr_repeat(4,1fr)]
            lg:gap-8
          "
        >
          {/* ================= BRAND + CONTACT ================= */}
          <div className="max-w-[340px]">
            <img
              src={logo}
              alt="IGBN Logo"
              className="
                w-[145px]
                object-contain
              "
            />

            <p
              className="
                mt-4
                text-[13.5px]
                leading-[1.75]
                text-[#9AA6B0]
              "
            >
              A B2B trade facilitation platform connecting global buyers with
              verified Indian suppliers — powered by real-time trade
              intelligence and end-to-end export support.
            </p>

            {/* Contact */}
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="mailto:info@igbnworldwide.com"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-[13.5px]
                  text-[#C3CAD1]
                  transition-colors
                  hover:text-[#D99B2B]
                "
              >
                <Mail
                  size={17}
                  className="mt-[2px] shrink-0 text-[#D99B2B]"
                />
                info@igbnworldwide.com
              </a>

              <a
                href="tel:+911234567890"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-[13.5px]
                  text-[#C3CAD1]
                  transition-colors
                  hover:text-[#D99B2B]
                "
              >
                <Phone
                  size={17}
                  className="mt-[2px] shrink-0 text-[#D99B2B]"
                />
                +91 123 456 7890
              </a>

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-[13.5px]
                  leading-[1.6]
                  text-[#C3CAD1]
                "
              >
                <MapPin
                  size={17}
                  className="mt-[2px] shrink-0 text-[#D99B2B]"
                />
                New Delhi, India
              </div>
            </div>
          </div>

          {/* ================= LINK COLUMNS ================= */}
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h4
                className="
                  text-[14px]
                  font-semibold
                  uppercase
                  tracking-[0.04em]
                  text-[#D99B2B]
                "
              >
                {column.title}
              </h4>

              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="
                        text-[13.5px]
                        text-[#AEB7C0]
                        transition-colors
                        duration-200
                        hover:text-[#D99B2B]
                      "
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </motion.div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="border-t border-[#1d2c45]">
        <div
          className="
            mx-auto
            flex
            max-w-[1650px]
            flex-wrap
            items-center
            justify-between
            gap-5
            px-5
            py-4

            sm:px-8
            lg:flex-nowrap
            lg:px-10
          "
        >
          {/* ================= LEGAL LINKS ================= */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              text-[13px]
              text-[#D8DCE2]

              sm:text-[13.5px]
            "
          >
            <span className="text-white/80">
              © 2024 IGBN. All Rights Reserved.
            </span>

            {legalLinks.map((link) => (
              <React.Fragment key={link.label}>
                <span className="hidden text-[#697789] sm:block">|</span>

                <a
                  href={link.href}
                  className="
                    transition-colors
                    hover:text-[#D99B2B]
                  "
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>

          {/* ================= SOCIAL ================= */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-3
            "
          >
            <span
              className="
                hidden
                text-[14px]
                font-medium
                text-[#E5E7EB]

                md:block
              "
            >
              Follow Us
            </span>

            {socialIcons.map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{
                  y: -4,
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  hover:bg-[#D99B2B]/20
                "
              >
                <img
                  src={icon}
                  alt="social icon"
                  className="
                    h-[40px]
                    w-[40px]
                    object-contain
                  "
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}