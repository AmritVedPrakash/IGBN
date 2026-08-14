import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, User, Menu, X, ChevronRight } from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Market Analyses", href: "/market-analyses" },
    { name: "Reports", href: "/reports" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        sticky
        top-0
        z-50
        w-full
        bg-white/95
        backdrop-blur-md
        border-b
        border-[#ececec]
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
      "
    >
      <div
        className="
          max-w-[1450px]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          h-[76px]
          lg:h-[150px]
          flex
          items-center
          justify-between
        "
      >
        {/* ================= LOGO ================= */}
        <motion.a href="/" whileHover={{ scale: 1.03 }} className="shrink-0">
          <img
            src={logo}
            alt="IGBN Worldwide"
            className="
              w-[110px]
              sm:w-[140px]
              lg:w-[150px]
              h-auto
              object-contain
            "
          />
        </motion.a>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden lg:flex items-center gap-9 xl:gap-11">
          {navLinks.map((link) => (
            <NavItem key={link.name} {...link} />
          ))}
        </nav>

        {/* ================= DESKTOP BUTTONS ================= */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Create Account */}
          <motion.div
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/create-account"
              className="
                h-[48px]
                px-7
                rounded-lg
                bg-[#dfa62f]
                hover:bg-[#d39a20]
                text-[#13203d]
                text-[15px]
                font-semibold
                flex
                items-center
                justify-center
                gap-2.5
                shadow-[0_5px_15px_rgba(223,166,47,0.18)]
                transition-all
                duration-300
              "
            >
              <UserPlus size={20} strokeWidth={2.2} />

              <span>Create Account</span>
            </Link>
          </motion.div>

          {/* Login */}
          <motion.div
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/login"
              className="
                h-[48px]
                px-7
                rounded-lg
                bg-[#071a3a]
                hover:bg-[#0d2855]
                text-white
                text-[15px]
                font-semibold
                flex
                items-center
                justify-center
                gap-2.5
                shadow-[0_5px_15px_rgba(7,26,58,0.22)]
                transition-all
                duration-300
              "
            >
              <User size={20} strokeWidth={2.2} />

              <span>Login</span>
            </Link>
          </motion.div>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            w-11
            h-11
            rounded-lg
            bg-[#071a3a]
            hover:bg-[#0d2855]
            text-white
            flex
            items-center
            justify-center
            shadow-[0_5px_15px_rgba(7,26,58,0.20)]
            transition-colors
          "
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} strokeWidth={2.2} />
          ) : (
            <Menu size={25} strokeWidth={2.2} />
          )}
        </motion.button>
      </div>

      {/* ================= MOBILE MENU ================= */}
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
              duration: 0.3,
            }}
            className="
              lg:hidden
              overflow-hidden
              bg-white
              border-t
              border-[#eeeeee]
            "
          >
            <div className="px-5 py-5">
              {/* Mobile Links */}
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <MobileLink
                    key={link.name}
                    title={link.name}
                    href={link.href}
                  />
                ))}
              </div>

              {/* Mobile Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                {/* Create Account */}
                <Link
                  to="/create-account"
                  onClick={() => setMenuOpen(false)}
                  className="
                    py-3.5
                    px-3
                    rounded-lg
                    bg-[#dfa62f]
                    hover:bg-[#d39a20]
                    text-[#12203d]
                    text-[14px]
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    transition-colors
                  "
                >
                  <UserPlus size={18} strokeWidth={2.2} />

                  <span>Create Account</span>
                </Link>

                {/* Login */}
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="
                    py-3.5
                    px-3
                    rounded-lg
                    bg-[#071a3a]
                    hover:bg-[#0d2855]
                    text-white
                    text-[14px]
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    transition-colors
                  "
                >
                  <User size={18} strokeWidth={2.2} />

                  <span>Login</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* =====================================================
   Helper: Current Active Link
===================================================== */

function useIsActive(href) {
  if (typeof window === "undefined") {
    return false;
  }

  return window.location.pathname === href;
}

/* =====================================================
   Desktop Navigation Link
===================================================== */

function NavItem({ name, href }) {
  const isActive = useIsActive(href);

  return (
    <motion.a
      href={href}
      whileHover={{ y: -1 }}
      className={`
        relative
        py-8
        text-[16px]
        xl:text-[17px]
        font-semibold
        tracking-[0.1px]
        transition-colors
        duration-300
        group
        whitespace-nowrap

        ${isActive ? "text-[#d19b29]" : "text-[#191919] hover:text-[#d19b29]"}
      `}
    >
      {name}

      {/* Active underline */}
      <span
        className={`
          absolute
          left-0
          bottom-[17px]
          w-full
          h-[2px]
          rounded-full
          bg-[#d5a02b]
          origin-center
          transition-transform
          duration-300

          ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
        `}
      />
    </motion.a>
  );
}

/* =====================================================
   Mobile Navigation Link
===================================================== */

function MobileLink({ title, href }) {
  const isActive = useIsActive(href);

  return (
    <motion.a
      href={href}
      whileTap={{ x: 4 }}
      className={`
        py-4
        border-b
        border-[#eeeeee]
        text-[16px]
        font-semibold
        flex
        items-center
        justify-between
        transition-colors

        ${isActive ? "text-[#d29c2e]" : "text-[#222] hover:text-[#d29c2e]"}
      `}
    >
      <span>{title}</span>

      <ChevronRight
        size={18}
        strokeWidth={2}
        className="
          text-[#b6b6b6]
        "
      />
    </motion.a>
  );
}
