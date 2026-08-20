import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FileBarChart, ArrowRight } from "lucide-react";

export default function AiMarketRepoGenerater() {
  const [formData, setFormData] = useState({
    industry: "Chemicals",
    country: "Germany",
    reportType: "Complete Market Report",
  });

  const industries = [
    "Chemicals",
    "Engineering Goods",
    "Textiles",
    "Pharmaceuticals",
    "Machinery",
    "Food Processing",
  ];

  const countries = [
    "Germany",
    "USA",
    "UAE",
    "Saudi Arabia",
    "Australia",
    "United Kingdom",
  ];

  const reportTypes = [
    "Complete Market Report",
    "Market Opportunity Report",
    "Competitor Analysis",
    "Buyer Intelligence Report",
    "Import Export Analysis",
  ];

  const reportFeatures = [
    "Market Size & Forecast",
    "Import Trends & Demand",
    "Buyer Intelligence & Leads",
    "Pricing & Competitor Analysis",
    "Tariffs & Regulations",
    "Certifications & Standards",
    "Logistics & Shipping",
    "Entry Strategy & Recommendations",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerate = () => {
    console.log("Generate Report:", formData);
  };

  return (
    <section className="w-full bg-[#020D18] px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          mx-auto
          max-w-[1650px]
          overflow-hidden
          rounded-[12px]
          border
          border-[#725021]/80
          bg-[#03111F]
          shadow-[0_12px_40px_rgba(0,0,0,0.32)]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[1.15fr_1.05fr_0.62fr]
          "
        >
          {/* =====================================================
              LEFT FORM
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="
              border-b
              border-[#273A4C]
              px-6
              py-6
              xl:border-b-0
              xl:border-r
              lg:px-7
            "
          >
            <h2
              className="
                text-[23px]
                font-semibold
                uppercase
                leading-tight
                text-[#F4F5F6]
                sm:text-[25px]
                lg:text-[28px]
              "
            >
              AI Market Report Generator
            </h2>

            <p
              className="
                mt-2
                text-[14px]
                leading-[1.65]
                text-[#BCC4CB]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Generate custom market reports with AI-powered deep insights.
            </p>

            {/* Industry + Country */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  className="
                    mb-2
                    block
                    text-[14px]
                    font-medium
                    text-[#D5DADE]
                    sm:text-[15px]
                  "
                >
                  Select Industry
                </label>

                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="
                    h-[52px]
                    w-full
                    rounded-[7px]
                    border
                    border-[#304456]
                    bg-[#071522]
                    px-4
                    text-[14px]
                    font-medium
                    text-[#E7E9EB]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#D69A2B]
                    sm:text-[15px]
                  "
                >
                  {industries.map((item) => (
                    <option key={item} value={item} className="bg-[#071522]">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="
                    mb-2
                    block
                    text-[14px]
                    font-medium
                    text-[#D5DADE]
                    sm:text-[15px]
                  "
                >
                  Select Target Country
                </label>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="
                    h-[52px]
                    w-full
                    rounded-[7px]
                    border
                    border-[#304456]
                    bg-[#071522]
                    px-4
                    text-[14px]
                    font-medium
                    text-[#E7E9EB]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#D69A2B]
                    sm:text-[15px]
                  "
                >
                  {countries.map((item) => (
                    <option key={item} value={item} className="bg-[#071522]">
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Report Type */}
            <div className="mt-4">
              <label
                className="
                  mb-2
                  block
                  text-[14px]
                  font-medium
                  text-[#D5DADE]
                  sm:text-[15px]
                "
              >
                Report Type
              </label>

              <select
                name="reportType"
                value={formData.reportType}
                onChange={handleChange}
                className="
                  h-[52px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#304456]
                  bg-[#071522]
                  px-4
                  text-[14px]
                  font-medium
                  text-[#E7E9EB]
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#D69A2B]
                  sm:text-[15px]
                "
              >
                {reportTypes.map((item) => (
                  <option key={item} value={item} className="bg-[#071522]">
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* =====================================================
              CENTER FEATURES
          ====================================================== */}
          <div
            className="
              border-b
              border-[#273A4C]
              px-6
              py-6
              xl:border-b-0
              xl:border-r
              lg:px-7
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-x-7
                gap-y-5
                sm:grid-cols-2
              "
            >
              {reportFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    x: 3,
                  }}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                  "
                >
                  <CheckCircle2
                    size={22}
                    strokeWidth={1.8}
                    className="
                      mt-[1px]
                      shrink-0
                      text-[#D69A2B]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span
                    className="
                      text-[14px]
                      font-medium
                      leading-[1.55]
                      text-[#E0E4E8]
                      sm:text-[15px]
                      lg:text-[16px]
                    "
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT GENERATE CARD
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="
              flex
              items-center
              justify-center
              px-5
              py-5
            "
          >
            <div
              className="
                flex
                min-h-[250px]
                w-full
                flex-col
                items-center
                justify-center
                rounded-[10px]
                border
                border-[#876029]/90
                bg-[#061522]
                px-5
                py-5
                text-center
                shadow-[0_8px_25px_rgba(0,0,0,0.25)]
              "
            >
              <h3
                className="
                  text-[18px]
                  font-semibold
                  text-[#D69A2B]
                  sm:text-[19px]
                  lg:text-[21px]
                "
              >
                Generate Your Report
              </h3>

              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  mt-5
                  flex
                  h-[68px]
                  w-[68px]
                  items-center
                  justify-center
                  rounded-[8px]
                  border
                  border-[#A9782D]/70
                  bg-[#D69A2B]/[0.04]
                "
              >
                <FileBarChart
                  size={38}
                  strokeWidth={1.5}
                  className="text-[#D69A2B]"
                />
              </motion.div>

              <p
                className="
                  mt-4
                  max-w-[250px]
                  text-[13px]
                  leading-[1.6]
                  text-[#C7CDD2]
                  sm:text-[14px]
                  lg:text-[15px]
                "
              >
                Get a comprehensive AI-powered report in PDF format.
              </p>

              {/* Generate */}
              <motion.button
                onClick={handleGenerate}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  mt-5
                  flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[7px]
                  border
                  border-[#D69A2B]
                  bg-gradient-to-r
                  from-[#E0A946]
                  via-[#D69A2B]
                  to-[#C98A24]
                  px-5
                  text-[15px]
                  font-semibold
                  text-[#07111B]
                  shadow-[0_8px_22px_rgba(214,154,43,0.20)]
                  transition-all
                  sm:text-[16px]
                  lg:text-[17px]
                "
              >
                Generate Report
                <ArrowRight
                  size={21}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
