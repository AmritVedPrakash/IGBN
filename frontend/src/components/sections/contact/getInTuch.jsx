import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Briefcase,
  Globe2,
  User,
  Headphones,
  Megaphone,
  Send,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const NAVY = "#172343";
const GOLD = "#dfa62f";

const categories = [
  {
    icon: Handshake,
    title: "General Inquiries",
    desc: "For general questions and information about IGBN Worldwide.",
  },
  {
    icon: Briefcase,
    title: "Business Collaboration",
    desc: "Explore partnership and collaboration opportunities.",
  },
  {
    icon: Globe2,
    title: "Supplier Onboarding",
    desc: "Want to be a verified supplier? Get started here.",
  },
  {
    icon: User,
    title: "Buyer Support",
    desc: "Assistance for global buyers and sourcing requirements.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    desc: "Help with platform access, issues or technical assistance.",
  },
  {
    icon: Megaphone,
    title: "Media & Press",
    desc: "For media inquiries, press releases and brand assets.",
  },
];

const subjects = [
  "General Inquiry",
  "Business Collaboration",
  "Supplier Onboarding",
  "Buyer Support",
  "Technical Support",
  "Media & Press",
];

// Common input classes reused everywhere — explicit text + bg color fixes the invisible text issue
const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none transition-all bg-white text-gray-900 placeholder:text-gray-400 focus:border-[#dfa62f] focus:ring-2 focus:ring-[#dfa62f]/20";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    countryCode: "+91",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1200);
  };

  return (
    <section className="bg-[#f8f9fc] py-16 px-5 md:px-10">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT SIDE — Get in Touch */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm font-bold uppercase tracking-wide"
            style={{ color: GOLD }}
          >
            Get in Touch
          </p>

          <h2
            className="mt-2 text-3xl md:text-4xl font-bold"
            style={{ color: NAVY }}
          >
            Let's Start a Conversation
          </h2>

          <p className="mt-3 text-gray-500 text-sm md:text-base max-w-[480px]">
            Fill out the form and our representative will get back to you
            shortly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            {categories.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 cursor-pointer transition-shadow hover:shadow-md"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: NAVY }}
                  >
                    <Icon size={20} color={GOLD} />
                  </div>
                  <h3
                    className="font-semibold text-sm md:text-base mb-1"
                    style={{ color: NAVY }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-5">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT SIDE — Send Us a Message (Form) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
        >
          <h2 className="text-xl md:text-2xl font-bold" style={{ color: NAVY }}>
            Send Us a Message
          </h2>
          <div
            className="w-10 h-[3px] mt-2 mb-6"
            style={{ backgroundColor: GOLD }}
          />

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name <span style={{ color: GOLD }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange("fullName")}
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address <span style={{ color: GOLD }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange("email")}
                  placeholder="Enter your email"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Company + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={handleChange("company")}
                  placeholder="Enter your company name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <div className="flex rounded-lg border border-gray-200 overflow-hidden bg-white focus-within:border-[#dfa62f] focus-within:ring-2 focus-within:ring-[#dfa62f]/20 transition-all">
                  <select
                    value={formData.countryCode}
                    onChange={handleChange("countryCode")}
                    className="bg-gray-50 text-sm px-2.5 border-r border-gray-200 outline-none cursor-pointer text-gray-900"
                  >
                    <option value="+91" className="text-gray-900 bg-white">
                      🇮🇳 +91
                    </option>
                    <option value="+1" className="text-gray-900 bg-white">
                      🇺🇸 +1
                    </option>
                    <option value="+44" className="text-gray-900 bg-white">
                      🇬🇧 +44
                    </option>
                    <option value="+971" className="text-gray-900 bg-white">
                      🇦🇪 +971
                    </option>
                  </select>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    placeholder="Enter your number"
                    className="w-full px-3 py-2.5 text-sm outline-none bg-white text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Subject <span style={{ color: GOLD }}>*</span>
              </label>
              <div className="relative">
                <select
                  required
                  value={formData.subject}
                  onChange={handleChange("subject")}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="" disabled className="text-gray-400 bg-white">
                    Select a subject
                  </option>
                  {subjects.map((s) => (
                    <option
                      key={s}
                      value={s}
                      className="text-gray-900 bg-white"
                    >
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message <span style={{ color: GOLD }}>*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={handleChange("message")}
                placeholder="Type your message here..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold text-sm text-white transition-opacity disabled:opacity-70"
              style={{ backgroundColor: NAVY }}
            >
              {submitting ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                  />
                  Sending...
                </>
              ) : submitted ? (
                <>
                  <ShieldCheck size={16} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500 pt-1">
              <ShieldCheck size={13} className="text-green-600" />
              Your information is safe with us. We respect your privacy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
