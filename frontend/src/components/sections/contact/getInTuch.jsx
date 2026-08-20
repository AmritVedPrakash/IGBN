import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Building2,
  Phone,
  MessageSquare,
  Globe2,
  UsersRound,
  Handshake,
  TrendingUp,
  Headphones,
  BadgeCheck,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

// Actual image filename ke according change kar lena
import centerImg from "../../../assets/contactimg/connect-center.png";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    type: "",
    interest: "",
    message: "",
    agree: false,
  });

  const benefits = [
    {
      icon: Globe2,
      title: "Global Market Access",
      text: "Reach 21+ countries with ease",
      position: "left-top",
    },
    {
      icon: UsersRound,
      title: "Verified Network",
      text: "Connect with verified buyers & suppliers",
      position: "left-middle",
    },
    {
      icon: Handshake,
      title: "End-to-End Support",
      text: "From market research to deal closure",
      position: "left-bottom",
    },
    {
      icon: BadgeCheck,
      title: "Reliable Partnerships",
      text: "Build long-term, trust-based relationships",
      position: "right-top",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      text: "Scale your business globally",
      position: "right-middle",
    },
    {
      icon: Headphones,
      title: "Fast & Efficient Communication",
      text: "Quick responses across timezones",
      position: "right-bottom",
    },
  ];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);
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
          h-[600px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D69A2B]/[0.025]
          blur-[150px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1650px]
          grid-cols-1
          gap-5
          xl:grid-cols-[0.92fr_1.08fr]
        "
      >
        {/* =====================================================
            LEFT - FORM
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="
            rounded-[12px]
            border
            border-[#765323]/80
            bg-[#03111F]
            px-6
            py-6
            shadow-[0_12px_35px_rgba(0,0,0,0.30)]
            sm:px-7
            lg:px-8
          "
        >
          {/* Heading */}
          <h2
            className="
              text-[24px]
              font-semibold
              uppercase
              leading-tight
              text-[#F4F5F6]
              sm:text-[27px]
              lg:text-[30px]
            "
          >
            Let&apos;s Connect & Create Opportunities
          </h2>

          <p
            className="
              mt-2
              text-[15px]
              leading-[1.6]
              text-[#C1C8CE]
              sm:text-[18px]
              lg:text-[17px]
            "
          >
            Fill in your details and our team will get back to you shortly.
          </p>

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="mt-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputBox
                icon={User}
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />

              <InputBox
                icon={Mail}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />

              <InputBox
                icon={Building2}
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />

              <InputBox
                icon={Phone}
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Selects */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="
                  h-[55px]
                  rounded-[7px]
                  border
                  border-[#2A3E50]
                  bg-[#061522]
                  px-4
                  text-[15px]
                  text-[#DCE1E5]
                  outline-none
                  transition-all
                  focus:border-[#D69A2B]
                  sm:text-[16px]
                "
              >
                <option value="">I am a...</option>
                <option value="buyer">Buyer</option>
                <option value="supplier">Supplier</option>
                <option value="manufacturer">Manufacturer</option>
                <option value="partner">Business Partner</option>
              </select>

              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="
                  h-[55px]
                  rounded-[7px]
                  border
                  border-[#2A3E50]
                  bg-[#061522]
                  px-4
                  text-[15px]
                  text-[#DCE1E5]
                  outline-none
                  transition-all
                  focus:border-[#D69A2B]
                  sm:text-[16px]
                "
              >
                <option value="">Interested In...</option>
                <option value="export">Export Opportunities</option>
                <option value="buyers">Buyer Connections</option>
                <option value="market">Market Intelligence</option>
                <option value="services">IGBN Services</option>
              </select>
            </div>

            {/* Message */}
            <div className="relative mt-4">
              <MessageSquare
                size={20}
                className="
                  absolute
                  left-4
                  top-4
                  text-[#D69A2B]
                "
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message / Requirements"
                rows={5}
                className="
                  w-full
                  resize-none
                  rounded-[7px]
                  border
                  border-[#2A3E50]
                  bg-[#061522]
                  pb-4
                  pl-12
                  pr-4
                  pt-4
                  text-[15px]
                  leading-[1.6]
                  text-[#E3E6E9]
                  outline-none
                  placeholder:text-[#99A2AB]
                  focus:border-[#D69A2B]
                  sm:text-[16px]
                "
              />
            </div>

            {/* Agreement */}
            <label
              className="
                mt-4
                flex
                cursor-pointer
                items-start
                gap-3
              "
            >
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="
                  mt-[3px]
                  h-[18px]
                  w-[18px]
                  shrink-0
                  accent-[#D69A2B]
                "
              />

              <span
                className="
                  text-[13px]
                  leading-[1.5]
                  text-[#C6CDD3]
                  sm:text-[14px]
                  lg:text-[15px]
                "
              >
                I agree to the{" "}
                <span className="font-medium text-[#D69A2B]">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="font-medium text-[#D69A2B]">
                  Terms & Conditions
                </span>
              </span>
            </label>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                mt-5
                flex
                min-h-[56px]
                w-full
                items-center
                justify-center
                gap-4
                rounded-[7px]
                border
                border-[#D69A2B]
                bg-gradient-to-r
                from-[#E1AA48]
                via-[#D99B2B]
                to-[#C98A24]
                text-[16px]
                font-semibold
                uppercase
                text-[#07111B]
                shadow-[0_8px_25px_rgba(214,154,43,0.20)]
                sm:text-[17px]
                lg:text-[18px]
              "
            >
              Submit & Connect
              <ArrowRight
                size={22}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>

            {/* Security */}
            <div
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                text-center
                text-[12px]
                text-[#9FA8B0]
                sm:text-[13px]
              "
            >
              <ShieldCheck size={17} className="text-[#D69A2B]" />
              Your information is safe with us. We respect your privacy.
            </div>
          </form>
        </motion.div>

        {/* =====================================================
            RIGHT CARD
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="
            relative
            min-h-[650px]
            overflow-hidden
            rounded-[12px]
            border
            border-[#765323]/80
            bg-[#03111F]
            px-5
            py-6
            shadow-[0_12px_35px_rgba(0,0,0,0.30)]
            sm:px-7
            lg:px-8
          "
        >
          {/* Golden Glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[57%]
              h-[380px]
              w-[380px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#D69A2B]/[0.035]
              blur-[100px]
            "
          />

          {/* Heading */}
          <div className="relative z-10 text-center">
            <h2
              className="
                text-[24px]
                font-semibold
                uppercase
                text-[#F4F5F6]
                sm:text-[27px]
                lg:text-[30px]
              "
            >
              Why Connect With IGBN?
            </h2>

            <p
              className="
                mx-auto
                mt-2
                max-w-[650px]
                text-[14px]
                leading-[1.6]
                text-[#BBC3CA]
                sm:text-[18px]
                lg:text-[18px]
              "
            >
              We don&apos;t just connect people. We build global business
              success stories.
            </p>
          </div>

          {/* =================================================
              NETWORK AREA
          ================================================== */}
          <div
            className="
              relative
              mx-auto
              mt-6
              min-h-[500px]
              max-w-[820px]
            "
          >
            {/* ================= ORBIT CIRCLES ================= */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[360px]
                w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#8B6328]/45

                sm:h-[400px]
                sm:w-[400px]
              "
            >
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[275px]
                  w-[275px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#8B6328]/45
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[190px]
                  w-[190px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#8B6328]/45
                "
              />
            </motion.div>

            {/* ================= CENTER IMAGE ================= */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                scale: [1, 1.025, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                flex
                h-[175px]
                w-[175px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[#071522]/90
                shadow-[0_0_35px_rgba(214,154,43,0.13)]

                sm:h-[200px]
                sm:w-[200px]
              "
            >
              <img
                src={centerImg}
                alt="IGBN Global Network"
                className="
                  h-[90%]
                  w-[90%]
                  object-contain
                "
              />
            </motion.div>

            {/* ================= BENEFIT ITEMS ================= */}
            {benefits.map((item, index) => {
              const Icon = item.icon;

              const positionClasses = {
                "left-top": "left-[1%] top-[5%] sm:left-[2%]",
                "left-middle": "left-0 top-[38%]",
                "left-bottom": "left-[2%] bottom-[6%]",

                "right-top": "right-[1%] top-[5%]",
                "right-middle": "right-0 top-[39%]",
                "right-bottom": "right-[1%] bottom-[6%]",
              };

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + index * 0.08,
                  }}
                  whileHover={{
                    scale: 1.04,
                  }}
                  className={`
                    absolute
                    z-30
                    hidden
                    w-[190px]
                    items-center
                    gap-3

                    sm:flex

                    ${positionClasses[item.position]}
                  `}
                >
                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      flex
                      h-[52px]
                      w-[52px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#A9782D]/70
                      bg-[#071522]
                      shadow-[0_0_15px_rgba(214,154,43,0.07)]
                    "
                  >
                    <Icon
                      size={33}
                      strokeWidth={2}
                      className="text-[#D69A2B]"
                    />
                  </motion.div>

                  <div>
                    <h3
                      className="
                        
                        font-semibold
                        leading-[1.4]
                        text-[#E8EBED]
                        text-[18px]
                        sm:text-[18px]
                        lg:text-[18px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[12px]
                        leading-[1.45]
                        text-[#AFB8C0]
                        sm:text-[16px]
                        lg:text-[16px]
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* ================= MOBILE BENEFITS ================= */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                grid
                grid-cols-1
                gap-3
                sm:hidden
              "
            >
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-[7px]
                      border
                      border-[#283C4E]
                      bg-[#061522]
                      p-3
                    "
                  >
                    <Icon
                      size={24}
                      className="
                        shrink-0
                        text-[#D69A2B]
                      "
                    />

                    <div>
                      <p
                        className="
                          text-[14px]
                          font-semibold
                          text-[#E6E9EB]
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[12px]
                          text-[#AEB7BF]
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
   INPUT COMPONENT
===================================================== */

function InputBox({ icon: Icon, type, name, placeholder, value, onChange }) {
  return (
    <div className="relative">
      <Icon
        size={19}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-[#D69A2B]
        "
      />

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          h-[55px]
          w-full
          rounded-[7px]
          border
          border-[#2A3E50]
          bg-[#061522]
          pl-12
          pr-4
          text-[15px]
          text-[#E4E7E9]
          outline-none
          transition-all
          placeholder:text-[#98A1AA]
          focus:border-[#D69A2B]
          sm:text-[16px]
        "
      />
    </div>
  );
}
