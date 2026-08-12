import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, User, Menu, X } from "lucide-react";

import logo from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Market Analyses", href: "/market-analyses" },
    { name: "Reports", href: "/reports" },
    { name: "Contact Us", href: "/co" },
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
        {/* Logo */}
        <motion.a href="/" whileHover={{ scale: 1.03 }} className="shrink-0">
          <img
            src={logo}
            alt="IGBN Worldwide"
            className="
              w-[50px]
              sm:w-[150px]
              lg:w-[150px]
              h-auto
              object-contain
            "
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <NavItem key={link.name} {...link} />
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.a
            href="/register"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="
              h-[44px]
              px-6
              rounded-md
              bg-[#dfa62f]
              hover:bg-[#edb43a]
              text-[#13203d]
              text-[13px]
              font-medium
              flex
              items-center
              gap-2
              shadow-[0_5px_15px_rgba(223,166,47,0.20)]
              transition-colors
              duration-300
            "
          >
            <UserPlus size={17} />
            Create Account
          </motion.a>

          <motion.a
            href="/login"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="
              h-[44px]
              px-6
              rounded-md
              bg-[#071a3a]
              hover:bg-[#0d2855]
              text-white
              text-[13px]
              font-medium
              flex
              items-center
              gap-2
              shadow-[0_5px_15px_rgba(7,26,58,0.20)]
              transition-colors
              duration-300
            "
          >
            <User size={17} />
            Login
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            w-10
            h-10
            rounded-lg
            bg-[#071a3a]
            text-white
            flex
            items-center
            justify-center
          "
        >
          {menuOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="
              lg:hidden
              overflow-hidden
              bg-white
              border-t
              border-[#eeeeee]
            "
          >
            <div className="px-5 py-5">
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
                <a
                  href="/register"
                  className="
                    py-3
                    rounded-md
                    bg-[#dfa62f]
                    text-[#12203d]
                    text-[12px]
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <UserPlus size={16} />
                  Create Account
                </a>

                <a
                  href="/login"
                  className="
                    py-3
                    rounded-md
                    bg-[#071a3a]
                    text-white
                    text-[12px]
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <User size={16} />
                  Login
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* =========================
   Helper: is this link the current page?
   Uses window.location.pathname since links are plain <a> tags here.
   If you're using react-router's <Link>, swap this for useLocation().
========================= */

function useIsActive(href) {
  if (typeof window === "undefined") return false;
  return window.location.pathname === href;
}

/* =========================
   Desktop Nav Link
========================= */

function NavItem({ name, href }) {
  const isActive = useIsActive(href);

  return (
    <motion.a
      href={href}
      whileHover={{ y: -1 }}
      className={`
        relative
        py-8
        text-[14px]
        font-medium
        transition-colors
        duration-300
        group
        ${isActive ? "text-[#d19b29]" : "text-[#191919] hover:text-[#d19b29]"}
      `}
    >
      {name}

      <span
        className={`
          absolute
          left-0
          bottom-[17px]
          w-full
          h-[2px]
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

/* =========================
   Mobile Nav Link
========================= */

function MobileLink({ title, href }) {
  const isActive = useIsActive(href);

  return (
    <a
      href={href}
      className={`
        py-4
        border-b
        border-[#eeeeee]
        text-[14px]
        font-medium
        transition-colors
        ${isActive ? "text-[#d29c2e]" : "text-[#222] hover:text-[#d29c2e]"}
      `}
    >
      {title}
    </a>
  );
}
