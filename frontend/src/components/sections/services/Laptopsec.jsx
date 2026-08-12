import React from "react";
import { motion } from "framer-motion";
import {
  UserRoundPlus,
  BadgeCheck,
  Images,
  MessagesSquare,
  MessageCircleMore,
  Search,
  ShieldCheck,
  Handshake,
  Users,
  Globe2,
  PackageCheck,
  Network,
} from "lucide-react";

import portalScreen from "../../../assets/services/portal-screen.png";

export default function Laptopsec() {
  const features = [
    {
      icon: UserRoundPlus,
      title: "Buyer & Supplier",
      subtitle: "Registration",
    },
    {
      icon: BadgeCheck,
      title: "Verified Profiles",
      subtitle: "& Authentication",
    },
    {
      icon: Images,
      title: "Product Showcase",
      subtitle: "& Catalogs",
    },
    {
      icon: MessagesSquare,
      title: "RFQ Management",
      subtitle: "& Lead Matching",
    },
    {
      icon: MessageCircleMore,
      title: "Real-time",
      subtitle: "Communication",
    },
    {
      icon: Search,
      title: "Trade Intelligence",
      subtitle: "& Market Insights",
    },
    {
      icon: ShieldCheck,
      title: "Secure Transactions",
      subtitle: "& Data Protection",
    },
    {
      icon: Handshake,
      title: "Deals & Business",
      subtitle: "Connections",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Verified Buyers",
    },
    {
      icon: Users,
      value: "5,000+",
      label: "Verified Suppliers",
    },
    {
      icon: PackageCheck,
      value: "25K+",
      label: "Products Listed",
    },
    {
      icon: Globe2,
      value: "30+",
      label: "Countries Connected",
    },
    {
      icon: MessagesSquare,
      value: "50K+",
      label: "RFQs Posted",
    },
    {
      icon: Network,
      value: "100K+",
      label: "Business Connections",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#071a3a] py-14 md:py-16 lg:py-20">
      {/* Background glow */}
      <div className="absolute left-[10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#d4a531]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
          {/* =====================================
              LAPTOP + MOBILE
          ====================================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex w-full max-w-[600px] items-center justify-center pb-10"
          >
            {/* LAPTOP */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[90%]"
            >
              {/* Laptop Screen Frame */}
              <div
                className="
                  relative
                  rounded-[16px]
                  border-[7px]
                  border-[#252a31]
                  bg-[#111]
                  p-[4px]
                  shadow-[0_25px_50px_rgba(0,0,0,0.55)]
                "
              >
                {/* Camera */}
                <div className="absolute left-1/2 top-[3px] z-20 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#555]" />

                {/* SCREEN IMAGE */}
                <div className="aspect-[16/10] w-full overflow-hidden rounded-[7px] bg-white">
                  <img
                    src={portalScreen}
                    alt="IGBN Portal"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Laptop Bottom */}
              <div
                className="
                  relative
                  mx-auto
                  h-[14px]
                  w-[108%]
                  -translate-x-[4%]
                  rounded-b-[50%]
                  bg-gradient-to-b
                  from-[#c8c8c8]
                  via-[#8f9398]
                  to-[#5e6268]
                  shadow-[0_12px_15px_rgba(0,0,0,0.35)]
                "
              >
                <div className="absolute left-1/2 top-0 h-[3px] w-[60px] -translate-x-1/2 rounded-b bg-[#555]" />
              </div>
            </motion.div>

            {/* MOBILE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.7,
                  delay: 0.3,
                },
              }}
              className="
                absolute
                bottom-[20px]
                right-[3%]
                sm:right-[6%]
                lg:right-[1%]
                z-20
                w-[25%]
                min-w-[90px]
                max-w-[145px]
              "
            >
              {/* Phone Frame */}
              <div
                className="
                  relative
                  rounded-[22px]
                  border-[5px]
                  border-[#20242a]
                  bg-[#111]
                  p-[3px]
                  shadow-[0_20px_35px_rgba(0,0,0,0.55)]
                "
              >
                {/* Speaker / notch */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-[3px]
                    z-20
                    h-[4px]
                    w-[28%]
                    -translate-x-1/2
                    rounded-full
                    bg-[#272727]
                  "
                />

                {/* Mobile Screen */}
                <div className="aspect-[9/18] overflow-hidden rounded-[15px] bg-white">
                  <img
                    src={portalScreen}
                    alt="IGBN Portal Mobile"
                    className="h-full w-full object-cover object-left-top"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================
              RIGHT SIDE
          ====================================== */}
          <div>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold uppercase leading-tight text-white sm:text-3xl lg:text-[34px]">
                IGBN Portal – Your All-In-One B2B Marketplace
              </h2>

              <p className="mt-3 text-sm text-white/70 md:text-base">
                Connect, trade & grow globally with our smart digital platform.
              </p>

              <div className="mt-4 h-[3px] w-14 rounded-full bg-[#d6a430]" />
            </motion.div>

            {/* Features */}
            <div
              className="
                mt-8
                grid
                grid-cols-1
                border-y
                border-white/15
                sm:grid-cols-2
                xl:grid-cols-4
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    whileHover={{ y: -4 }}
                    className="
                      group
                      flex
                      min-h-[105px]
                      items-center
                      gap-3
                      border-b
                      border-white/15
                      px-4
                      py-5
                      sm:border-r
                      hover:bg-white/[0.03]
                    "
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.5}
                      className="shrink-0 text-white/80 transition-colors group-hover:text-[#d6a430]"
                    />

                    <div>
                      <h3 className="text-[12px] font-medium leading-5 text-white md:text-[13px]">
                        {feature.title}
                      </h3>

                      <p className="text-[11px] leading-4 text-white/60 md:text-[12px]">
                        {feature.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                mt-7
                grid
                grid-cols-2
                gap-y-7
                sm:grid-cols-3
                xl:grid-cols-6
              "
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className={`
                      flex
                      items-center
                      gap-2
                      px-3
                      ${index !== 0 ? "xl:border-l xl:border-white/15" : ""}
                    `}
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.5}
                      className="shrink-0 text-[#d6a430]"
                    />

                    <div>
                      <p className="text-[13px] font-semibold text-white">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-[9px] leading-3 text-white/55">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
