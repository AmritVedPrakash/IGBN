import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock3, MapPin } from "lucide-react";

// apne actual image name ke according change karna
import contactBg from "../assets/contactimg/contact-bg.png";
import GetInTouch from "../components/sections/contact/getInTuch";
import OurGlobalOffice from "../components/sections/contact/OurGlobalOffice";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@igbnworldwide.com",
    },
    {
      icon: Clock3,
      title: "Business Hours",
      value: "Mon - Sat 9:30 AM - 6:30 PM (IST)",
    },
    {
      icon: MapPin,
      title: "Global Presence",
      value: "50+ Countries Worldwide",
    },
  ];

  return ( 
    <>
    
    <section
      className="
        relative
        min-h-[620px]
        md:min-h-[650px]
        flex
        items-center
        overflow-hidden
        bg-cover
        bg-center
        py-16
      "
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#061329]/80" />

      <div
        className="
          relative
          z-10
          max-w-[1400px]
          mx-auto
          w-full
          px-6
          md:px-12
          lg:px-20
        "
      >
        {/* Text Content - constrained width */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[650px]"
        >
          <p className="text-[#dfa62f] font-bold text-sm uppercase tracking-wide">
            Contact Us
          </p>

          <h1 className="mt-3 text-white font-bold leading-tight text-5xl md:text-6xl lg:text-[64px]">
            We're Here to Help
            <br />
            <span className="text-[#dfa62f]">You Grow Globally</span>
          </h1>

          <p className="mt-5 text-white/80 text-base md:text-lg leading-8 max-w-[600px]">
            Have a question, need assistance, or want to explore collaboration
            opportunities? Our team is ready to connect with you.
          </p>

          <div className="mt-6 w-[45px] h-[3px] bg-[#dfa62f]" />
        </motion.div>

        {/* Contact Cards - full width, outside the 650px text block */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            lg:gap-6
            mt-12
            max-w-[1100px]
          "
        >
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="flex items-start gap-4 cursor-pointer"
              >
                <div
                  className="
                    w-14
                    h-14
                    shrink-0
                    aspect-square
                    rounded-full
                    border
                    border-[#dfa62f]
                    flex
                    items-center
                    justify-center
                    bg-black/20
                  "
                >
                  <Icon size={22} className="text-[#dfa62f]" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-base md:text-lg whitespace-nowrap">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-sm mt-2 leading-6">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
    <div>
      <GetInTouch/>
    </div>
    <div>
      <OurGlobalOffice/>
    </div>
    </>
  );
}
