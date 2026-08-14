import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

// apne actual image names ke according path change karna (assets/contactimg folder se)
import indiaOffice from "../../../assets/contactimg/india-office.png";
import uaeOffice from "../../../assets/contactimg/uae-office.png";
import singaporeOffice from "../../../assets/contactimg/singapore-office.png";

const NAVY = "#172343";
const GOLD = "#dfa62f";

const offices = [
  {
    image: indiaOffice,
    title: "India (Head Office)",
    address: "Plot No. 123, Sector 45, Gurugram, Haryana 122003, India",
    phone: "+91 98765 43210",
    email: "info@igbnworldwide.com",
  },
  {
    image: uaeOffice,
    title: "UAE",
    address: "Business Bay, Dubai, United Arab Emirates",
    phone: "+971 54 123 4567",
    email: "uae@igbnworldwide.com",
  },
  {
    image: singaporeOffice,
    title: "Singapore",
    address: "Marina Bay, Singapore 018956",
    phone: "+65 9123 4567",
    email: "singapore@igbnworldwide.com",
  },
];

export default function OurGlobalOffice() {
  return (
    <section className="bg-[#f8f9fc] py-16 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm font-bold uppercase tracking-wide"
            style={{ color: GOLD }}
          >
            Our Global Offices
          </p>

          <h2
            className="mt-2 text-3xl md:text-4xl font-bold"
            style={{ color: NAVY }}
          >
            Connecting Across the World
          </h2>
        </motion.div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {offices.map((office, index) => (
            <motion.div
              key={office.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 pt-8 pb-7 px-6 flex flex-col items-center text-center transition-shadow hover:shadow-lg"
            >
              {/* Circular Image */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-24 rounded-full overflow-hidden shrink-0 shadow-md"
                style={{ border: `3px solid ${GOLD}` }}
              >
                <img
                  src={office.image}
                  alt={office.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Title */}
              <h3
                className="mt-5 font-semibold text-base md:text-lg"
                style={{ color: NAVY }}
              >
                {office.title}
              </h3>

              {/* Address */}
              <p className="mt-3 text-gray-500 text-sm leading-6 max-w-[220px]">
                {office.address}
              </p>

              {/* Phone */}
              <div className="flex items-center gap-2 mt-4 text-sm font-medium" style={{ color: NAVY }}>
                <Phone size={14} style={{ color: GOLD }} />
                {office.phone}
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                <Mail size={14} style={{ color: GOLD }} />
                {office.email}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}