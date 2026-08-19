import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, User, Menu, X, ChevronRight, Globe2 } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Market Analyses",
      href: "/market-analyses",
    },
    {
      name: "Trade Intelligence",
      href: "/trade-intelligence",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <motion.header
      initial={{
        y: -70,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.55,
      }}
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-[#6f4d1d]/50
        bg-[#020B14]/95
        shadow-[0_5px_25px_rgba(0,0,0,0.38)]
        backdrop-blur-xl
      "
    >
      {/* =====================================================
          DESKTOP NAVBAR
      ====================================================== */}
      <div
        className="
          mx-auto
          flex
         h-[130px]
          w-full
          max-w-[1650px]
          items-center
          justify-between
          gap-5
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        {/* ================= LOGO ================= */}
        <motion.div
          whileHover={{
            scale: 1.025,
          }}
          className="shrink-0"
        >
          <Link to="/">
            <img
              src={logo}
              alt="IGBN Worldwide"
              className="
                h-auto
                w-[150px]
                object-contain
                sm:w-[165px]
                lg:w-[130px]
                xl:w-[130px]
              "
            />
          </Link>
        </motion.div>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav
          className="
            hidden
            flex-1
            items-center
            justify-center
            gap-6

            lg:flex
            xl:gap-8
            2xl:gap-10
          "
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.href);

            return (
              <motion.div
                key={link.name}
                whileHover={{
                  y: -2,
                }}
              >
                <Link
                  to={link.href}
                  className={`
                    group
                    relative
                    flex
                    min-h-[92px]
                    items-center
                    whitespace-nowrap
                    text-[15px]
                    font-semibold
                    tracking-[0.01em]
                    transition-colors
                    duration-300

                    xl:text-[16px]
                    2xl:text-[17px]

                    ${
                      isActive
                        ? "text-[#D99B2B]"
                        : "text-[#F1F3F5] hover:text-[#D99B2B]"
                    }
                  `}
                >
                  {link.name}

                  {/* Active underline */}
                  <span
                    className={`
                      absolute
                      bottom-[18px]
                      left-0
                      h-[2px]
                      w-full
                      origin-center
                      rounded-full
                      bg-[#D99B2B]
                      transition-transform
                      duration-300

                      ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />

                  {/* Gold glow under active link */}
                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-[14px]
                        left-1/2
                        h-[7px]
                        w-[80%]
                        -translate-x-1/2
                        rounded-full
                        bg-[#D99B2B]/15
                        blur-[7px]
                      "
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* =====================================================
            RIGHT DESKTOP AREA
        ====================================================== */}
        <div
          className="
            hidden
            shrink-0
            items-center
            gap-3
            lg:flex
            xl:gap-4
          "
        >
          {/* ================= LANGUAGE ================= */}
          

          {/* ================= LOGIN ================= */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/login"
              className="
                flex
                h-[48px]
                items-center
                justify-center
                gap-2
                rounded-[7px]
                border
                border-[#9C6C27]
                bg-[#06131F]
                px-5
                text-[14px]
                font-semibold
                text-[#D99B2B]
                shadow-[0_5px_16px_rgba(0,0,0,0.20)]
                transition-all
                duration-300

                hover:border-[#D99B2B]
                hover:bg-[#D99B2B]/[0.06]

                xl:px-6
                xl:text-[15px]
              "
            >
              <User size={18} strokeWidth={1.8} />
              Login
            </Link>
          </motion.div>

          {/* ================= CREATE ACCOUNT ================= */}
          <motion.div
            whileHover={{
              y: -2,
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/create-account"
              className="
                flex
                h-[48px]
                items-center
                justify-center
                gap-2
                whitespace-nowrap
                rounded-[7px]
                border
                border-[#D99B2B]
                bg-gradient-to-r
                from-[#E1AA48]
                via-[#D99B2B]
                to-[#C98A24]
                px-5
                text-[14px]
                font-semibold
                text-[#07111B]
                shadow-[0_6px_18px_rgba(217,155,43,0.20)]
                transition-all
                duration-300

                hover:shadow-[0_9px_26px_rgba(217,155,43,0.30)]

                xl:px-6
                xl:text-[15px]
              "
            >
              <UserPlus size={18} strokeWidth={1.9} />
              Create Account
            </Link>
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <motion.button
          whileTap={{
            scale: 0.92,
          }}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            flex
            h-[46px]
            w-[46px]
            items-center
            justify-center
            rounded-[7px]
            border
            border-[#9A6B27]
            bg-[#06131F]
            text-[#D99B2B]
            lg:hidden
          "
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X size={26} strokeWidth={2} />
          ) : (
            <Menu size={27} strokeWidth={2} />
          )}
        </motion.button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.28,
            }}
            className="
              overflow-hidden
              border-t
              border-[#725021]/50
              bg-[#03111F]
              lg:hidden
            "
          >
            <div className="px-5 pb-6 pt-3 sm:px-7">
              {/* ================= MOBILE LINKS ================= */}
              <div className="flex flex-col">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`
                        flex
                        min-h-[58px]
                        items-center
                        justify-between
                        border-b
                        border-[#26394A]
                        text-[16px]
                        font-semibold
                        transition-colors

                        sm:text-[17px]

                        ${
                          isActive
                            ? "text-[#D99B2B]"
                            : "text-[#E5E8EB] hover:text-[#D99B2B]"
                        }
                      `}
                    >
                      <span>{link.name}</span>

                      <ChevronRight
                        size={19}
                        className={
                          isActive ? "text-[#D99B2B]" : "text-[#71808C]"
                        }
                      />
                    </Link>
                  );
                })}
              </div>

              {/* ================= LANGUAGE ================= */}
              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-[15px]
                  font-medium
                  text-[#DCE0E3]
                "
              >
                <Globe2 size={19} className="text-[#D99B2B]" />
                English
              </div>

              {/* ================= MOBILE BUTTONS ================= */}
              <div
                className="
                  mt-5
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                {/* Login */}
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex
                    min-h-[50px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[7px]
                    border
                    border-[#9B6D29]
                    bg-[#061522]
                    text-[15px]
                    font-semibold
                    text-[#D99B2B]
                  "
                >
                  <User size={19} />
                  Login
                </Link>

                {/* Create Account */}
                <Link
                  to="/create-account"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex
                    min-h-[50px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[7px]
                    bg-gradient-to-r
                    from-[#E1AA48]
                    via-[#D99B2B]
                    to-[#C98A24]
                    text-[15px]
                    font-semibold
                    text-[#07111B]
                  "
                >
                  <UserPlus size={19} />
                  Create Account
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
