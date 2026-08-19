import React from "react";
import { motion } from "framer-motion";
import { Megaphone, UsersRound, ArrowRight, Quote } from "lucide-react";

export default function OurServices() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#020D18]
        px-4
        py-10
        sm:px-6
        lg:px-8
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D69A2B]/[0.025]
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1650px]">
        {/* =====================================================
            HEADING
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mb-5
            flex
            items-center
            justify-center
            gap-4
          "
        >
          {/* Left Line */}
          <div className="hidden w-full max-w-[450px] items-center sm:flex">
            <div
              className="
                h-[1px]
                flex-1
                bg-gradient-to-r
                from-transparent
                via-[#8D6324]
                to-[#D69A2B]
              "
            />

            <span className="h-[5px] w-[5px] rotate-45 bg-[#D69A2B]" />
          </div>

          <h2
            className="
              whitespace-nowrap
              text-center
              text-[21px]
              font-semibold
              text-[#F4F5F6]
              sm:text-[23px]
              lg:text-[26px]
            "
          >
            Our Services
          </h2>

          {/* Right Line */}
          <div className="hidden w-full max-w-[450px] items-center sm:flex">
            <span className="h-[5px] w-[5px] rotate-45 bg-[#D69A2B]" />

            <div
              className="
                h-[1px]
                flex-1
                bg-gradient-to-l
                from-transparent
                via-[#8D6324]
                to-[#D69A2B]
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            CARDS GRID
        ====================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {/* =================================================
              CARD 1 - BUYER PROMOTION
          ================================================== */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -7,
            }}
            className="
              group
              relative
              flex
              min-h-[390px]
              flex-col
              overflow-hidden
              rounded-[11px]
              border
              border-[#765323]/80
              bg-[#03111F]
              px-6
              py-6
              shadow-[0_10px_30px_rgba(0,0,0,0.30)]
              transition-all
              duration-300

              hover:border-[#C88D2B]
              hover:shadow-[0_15px_40px_rgba(214,154,43,0.09)]

              sm:px-7
            "
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -left-[70px]
                top-[80px]
                h-[200px]
                w-[200px]
                rounded-full
                bg-[#D69A2B]/[0.04]
                blur-[65px]
              "
            />

            {/* Heading */}
            <h3
              className="
                relative
                z-10
                text-[20px]
                font-semibold
                leading-[1.3]
                text-[#F4F5F6]
                sm:text-[21px]
                lg:text-[22px]
              "
            >
              Unlimited Buyer
              <br />
              Promotion
            </h3>

            {/* Graphic */}
            <div
              className="
                relative
                my-6
                flex
                min-h-[120px]
                items-center
                justify-center
              "
            >
              <motion.div
                animate={{
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Megaphone
                  size={82}
                  strokeWidth={1.35}
                  className="
                    text-[#D69A2B]
                    drop-shadow-[0_0_10px_rgba(214,154,43,0.14)]
                  "
                />
              </motion.div>

              {/* User circles */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[15%] top-[15%]"
              >
                <UsersRound
                  size={64}
                  strokeWidth={1.3}
                  className="text-[#D69A2B]"
                />
              </motion.div>
            </div>

            {/* Description */}
            <p
              className="
                relative
                z-10
                flex-1
                text-[14px]
                font-normal
                leading-[1.75]
                text-[#D8DDE2]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              We promote your products to verified buyers across multiple
              channels for 12 months.
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ x: 4 }}
              className="
                group/btn
                mt-5
                flex
                w-fit
                items-center
                gap-2
                text-[14px]
                font-semibold
                text-[#D69A2B]
                sm:text-[15px]
              "
            >
              Learn More
              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover/btn:translate-x-1
                "
              />
            </motion.button>
          </motion.div>

          {/* =================================================
              CARD 2 - SUCCESS STORIES
          ================================================== */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -7,
            }}
            className="
              group
              relative
              flex
              min-h-[390px]
              flex-col
              overflow-hidden
              rounded-[11px]
              border
              border-[#765323]/80
              bg-[#03111F]
              px-6
              py-6
              shadow-[0_10px_30px_rgba(0,0,0,0.30)]
              transition-all
              duration-300

              hover:border-[#C88D2B]
              hover:shadow-[0_15px_40px_rgba(214,154,43,0.09)]

              sm:px-7
            "
          >
            <h3
              className="
                text-[20px]
                font-semibold
                text-[#F4F5F6]
                sm:text-[21px]
                lg:text-[22px]
              "
            >
              Success Stories
            </h3>

            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-5"
            >
              <p
                className="
                  text-[28px]
                  font-bold
                  leading-none
                  text-[#D69A2B]
                  lg:text-[31px]
                "
              >
                1,250+
              </p>

              <p
                className="
                  mt-2
                  text-[14px]
                  font-medium
                  text-[#D9DEE3]
                  sm:text-[15px]
                "
              >
                Businesses Onboarded
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-5"
            >
              <p
                className="
                  text-[28px]
                  font-bold
                  leading-none
                  text-[#D69A2B]
                  lg:text-[31px]
                "
              >
                186+
              </p>

              <p
                className="
                  mt-2
                  text-[14px]
                  font-medium
                  text-[#D9DEE3]
                  sm:text-[15px]
                "
              >
                Buyer Introductions
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-5 flex-1"
            >
              <p
                className="
                  text-[28px]
                  font-bold
                  leading-none
                  text-[#D69A2B]
                  lg:text-[31px]
                "
              >
                $451B+
              </p>

              <p
                className="
                  mt-2
                  text-[14px]
                  font-medium
                  text-[#D9DEE3]
                  sm:text-[15px]
                "
              >
                Total Export Opportunities
              </p>
            </motion.div>

            <motion.button
              whileHover={{ x: 4 }}
              className="
                group/btn
                mt-6
                flex
                w-fit
                items-center
                gap-2
                text-[14px]
                font-semibold
                text-[#D69A2B]
                sm:text-[15px]
              "
            >
              View Stories
              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover/btn:translate-x-1
                "
              />
            </motion.button>
          </motion.div>

          {/* =================================================
              CARD 3 - TESTIMONIAL
          ================================================== */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -7,
            }}
            className="
              group
              relative
              flex
              min-h-[390px]
              flex-col
              overflow-hidden
              rounded-[11px]
              border
              border-[#765323]/80
              bg-[#03111F]
              px-6
              py-6
              shadow-[0_10px_30px_rgba(0,0,0,0.30)]
              transition-all
              duration-300

              hover:border-[#C88D2B]
              hover:shadow-[0_15px_40px_rgba(214,154,43,0.09)]

              sm:px-7
            "
          >
            <h3
              className="
                text-[20px]
                font-semibold
                text-[#F4F5F6]
                sm:text-[21px]
                lg:text-[22px]
              "
            >
              What Our Partners Say
            </h3>

            <div className="mt-5 flex flex-1 items-start gap-4">
              {/* Quote Icon */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="shrink-0"
              >
                <Quote
                  size={42}
                  strokeWidth={1.5}
                  fill="currentColor"
                  className="text-[#D69A2B]"
                />
              </motion.div>

              <div>
                <p
                  className="
                    text-[14px]
                    font-normal
                    leading-[1.75]
                    text-[#D9DEE3]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  IGBN has been a game-changer for our export journey. Their
                  team&apos;s support, market intelligence and buyer network
                  helped us enter new markets with confidence.
                </p>

                <div className="mt-5">
                  <p
                    className="
                      text-[14px]
                      font-semibold
                      text-[#F1F3F5]
                      sm:text-[15px]
                    "
                  >
                    – Rajesh Kumar
                  </p>

                  <p
                    className="
                      mt-1
                      text-[13px]
                      leading-[1.5]
                      text-[#BFC6CD]
                      sm:text-[14px]
                    "
                  >
                    Managing Director,
                    <br />
                    FineChem Industries
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 4 }}
              className="
                group/btn
                mt-5
                flex
                w-fit
                items-center
                gap-2
                text-[14px]
                font-semibold
                text-[#D69A2B]
                sm:text-[15px]
              "
            >
              View All Testimonials
              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover/btn:translate-x-1
                "
              />
            </motion.button>
          </motion.div>

          {/* =================================================
              CARD 4 - AI EXPORT READINESS
          ================================================== */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -7,
            }}
            className="
              group
              relative
              flex
              min-h-[390px]
              flex-col
              overflow-hidden
              rounded-[11px]
              border
              border-[#765323]/80
              bg-[#03111F]
              px-6
              py-6
              shadow-[0_10px_30px_rgba(0,0,0,0.30)]
              transition-all
              duration-300

              hover:border-[#C88D2B]
              hover:shadow-[0_15px_40px_rgba(214,154,43,0.09)]

              sm:px-7
            "
          >
            <h3
              className="
                text-[20px]
                font-semibold
                leading-[1.3]
                text-[#F4F5F6]
                sm:text-[21px]
                lg:text-[22px]
              "
            >
              AI Export Readiness
              <br />
              Assessment
            </h3>

            {/* ================= GAUGE ================= */}
            <div className="relative my-4 flex justify-center">
              <div className="relative h-[130px] w-[210px]">
                <svg viewBox="0 0 220 125" className="h-full w-full">
                  {/* Background */}
                  <path
                    d="M 25 105 A 85 85 0 0 1 195 105"
                    fill="none"
                    stroke="#263543"
                    strokeWidth="20"
                    strokeLinecap="butt"
                  />

                  {/* Green Section */}
                  <motion.path
                    d="M 25 105 A 85 85 0 0 1 195 105"
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth="20"
                    strokeLinecap="butt"
                    pathLength="1"
                    initial={{
                      strokeDasharray: "0 1",
                    }}
                    whileInView={{
                      strokeDasharray: "0.82 1",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.6,
                      delay: 0.35,
                      ease: "easeOut",
                    }}
                  />

                  <defs>
                    <linearGradient
                      id="scoreGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#7EAF72" />
                      <stop offset="58%" stopColor="#D9A33A" />
                      <stop offset="100%" stopColor="#D69A2B" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Score */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.9,
                  }}
                  className="
                    absolute
                    bottom-[2px]
                    left-1/2
                    -translate-x-1/2
                    text-center
                  "
                >
                  <p
                    className="
                      text-[38px]
                      font-semibold
                      leading-none
                      text-[#F5F5F5]
                    "
                  >
                    82
                  </p>

                  <p className="mt-1 text-[11px] text-[#BFC5CB]">/100</p>
                </motion.div>
              </div>
            </div>

            <p
              className="
                text-center
                text-[13px]
                font-medium
                text-[#D7DCE1]
                sm:text-[14px]
              "
            >
              Export Readiness Score
            </p>

            <p
              className="
                mt-4
                flex-1
                text-[14px]
                leading-[1.7]
                text-[#D8DDE2]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Find out how ready your business is to export and what to improve.
            </p>

            <motion.button
              whileHover={{ x: 4 }}
              className="
                group/btn
                mt-5
                flex
                w-fit
                items-center
                gap-2
                text-[14px]
                font-semibold
                text-[#D69A2B]
                sm:text-[15px]
              "
            >
              Check Your Score
              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover/btn:translate-x-1
                "
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
