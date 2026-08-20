import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does IGBN provide?",
      answer:
        "IGBN provides end-to-end global trade support including buyer connections, supplier verification, market intelligence, export promotion, trade facilitation, digital services, branding, factory visits and business growth solutions.",
    },
    {
      question: "How long does it take to get a response?",
      answer:
        "Our team usually responds within 24 to 48 business hours. For urgent trade enquiries, response time may be faster depending on the requirement and market.",
    },
    {
      question: "How can I register with IGBN?",
      answer:
        "You can register by creating an account on the IGBN portal and completing your business profile. Once submitted, our team may verify your details before activating relevant trade services.",
    },
    {
      question: "Can IGBN help me find buyers in a specific country?",
      answer:
        "Yes. IGBN helps businesses identify and connect with relevant buyers, importers and distributors in selected international markets based on product category and business requirements.",
    },
    {
      question: "Is there any fee to connect with IGBN?",
      answer:
        "Basic registration may be available without charge, while selected premium services, market reports, promotion packages or business development support may involve additional fees.",
    },
    {
      question: "What industries does IGBN work with?",
      answer:
        "IGBN works across multiple industries including agro and food processing, textiles, chemicals, machinery, engineering, pharmaceuticals, home and lifestyle, packaging, IT and digital services.",
    },
    {
      question: "How does IGBN verify buyers and suppliers?",
      answer:
        "IGBN may verify businesses through company information, documentation, market presence, business credentials and other due-diligence checks before facilitating qualified connections.",
    },
    {
      question: "How can I become a trade partner or ambassador?",
      answer:
        "You can submit your interest through IGBN's partnership or contact section. The team can then review your profile, market experience, network and region before discussing collaboration opportunities.",
    },
  ];

  // Same visual order as screenshot:
  // left 4 + right 4
  const leftFaqs = [faqs[0], faqs[2], faqs[4], faqs[6]];

  const rightFaqs = [faqs[1], faqs[3], faqs[5], faqs[7]];

  const renderFaq = (faq, actualIndex) => {
    const isOpen = openIndex === actualIndex;

    return (
      <motion.div
        key={actualIndex}
        layout
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: actualIndex * 0.04,
        }}
        className="
          overflow-hidden
          rounded-[8px]
          border
          border-[#263B4D]
          bg-[#041321]
          transition-all
          duration-300

          hover:border-[#8D672B]

          data-[open=true]:border-[#A9782D]
          data-[open=true]:bg-[#061522]
        "
        data-open={isOpen}
      >
        {/* QUESTION */}
        <button
          onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
          className="
            flex
            min-h-[64px]
            w-full
            items-center
            justify-between
            gap-5
            px-5
            py-4
            text-left

            sm:px-6
          "
        >
          <span
            className="
              text-[16px]
              font-semibold
              leading-[1.45]
              text-[#E8EBED]

              sm:text-[17px]
              lg:text-[18px]
            "
          >
            {faq.question}
          </span>

          <motion.span
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              flex
              h-[30px]
              w-[30px]
              shrink-0
              items-center
              justify-center
              rounded-full
              text-[#D69A2B]
            "
          >
            <ChevronDown size={22} strokeWidth={2} />
          </motion.span>
        </button>

        {/* ANSWER */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <div
                className="
                  border-t
                  border-[#263B4D]
                  px-5
                  pb-5
                  pt-4

                  sm:px-6
                "
              >
                <p
                  className="
                    text-[14px]
                    font-normal
                    leading-[1.8]
                    text-[#C5CCD2]

                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section
      className="
        w-full
        bg-[#020D18]
        px-4
        py-10
        sm:px-6
        lg:px-8
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
        className="
          mx-auto
          max-w-[1650px]
          rounded-[12px]
          border
          border-[#725021]/80
          bg-[#03111F]
          px-5
          pb-7
          pt-5
          shadow-[0_12px_40px_rgba(0,0,0,0.30)]

          sm:px-6
          lg:px-7
        "
      >
        {/* ================= HEADING ================= */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-4
          "
        >
          {/* LEFT LINE */}
          <div
            className="
              hidden
              w-full
              max-w-[85px]
              items-center
              sm:flex
            "
          >
            <div
              className="
                h-[2px]
                flex-1
                bg-gradient-to-r
                from-transparent
                to-[#D69A2B]
              "
            />

            <span
              className="
                h-[6px]
                w-[6px]
                rotate-45
                bg-[#D69A2B]
              "
            />
          </div>

          <motion.h2
            initial={{
              opacity: 0,
              y: -12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className="
              text-center
              text-[24px]
              font-semibold
              uppercase
              tracking-[0.03em]
              text-[#F4F5F6]

              sm:text-[27px]
              lg:text-[30px]
            "
          >
            Frequently Asked Questions
          </motion.h2>

          {/* RIGHT LINE */}
          <div
            className="
              hidden
              w-full
              max-w-[85px]
              items-center
              sm:flex
            "
          >
            <span
              className="
                h-[6px]
                w-[6px]
                rotate-45
                bg-[#D69A2B]
              "
            />

            <div
              className="
                h-[2px]
                flex-1
                bg-gradient-to-l
                from-transparent
                to-[#D69A2B]
              "
            />
          </div>
        </div>

        {/* ================= FAQ GRID ================= */}
        <div
          className="
            mt-7
            grid
            grid-cols-1
            gap-4

            lg:grid-cols-2
            lg:gap-x-5
          "
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            {leftFaqs.map((faq, index) => renderFaq(faq, [0, 2, 4, 6][index]))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">
            {rightFaqs.map((faq, index) => renderFaq(faq, [1, 3, 5, 7][index]))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
