import React from "react";
import { motion } from "framer-motion";
import { Check, ShoppingCart, Factory, ArrowRight } from "lucide-react";

// Images apne folder ke according change karna
import buyerImage from "../../assets/create-account/buyer.png";
import supplierImage from "../../assets/create-account/supplier.png";

export default function BusinessType({ next, updateData, data }) {
  const chooseType = (type) => {
    updateData({
      businessType: type,
    });

    next();
  };

  const cards = [
    {
      type: "buyer",

      title: "I am a",
      highlight: "Buyer",

      description:
        "Find trusted suppliers and source quality products from verified businesses worldwide.",

      points: [
        "Explore Verified Suppliers",
        "Post Your Requirements (RFQs)",
        "Compare Offers & Connect",
      ],

      image: buyerImage,

      color: "blue",
    },

    {
      type: "supplier",

      title: "I am a",
      highlight: "Supplier",

      description: "Showcase your products and connect with global buyers.",

      points: [
        "Create Product Catalogue",
        "Receive Buyer Inquiries",
        "Expand Your Global Market",
      ],

      image: supplierImage,

      color: "gold",
    },
  ];

  return (
    <section
      className="
      w-full
      min-h-[600px]
      bg-[#ffffff]
      py-10
    "
    >
      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          text-center
          mb-10
        "
      >
        <h1
          className="
          text-[#172343]
          text-3xl
          md:text-5xl
          font-bold
        "
        >
          Choose Your
          <span className="text-[#d89b18]"> Business Type</span>
        </h1>

        <p
          className="
          mt-3
          text-[#667085]
          text-sm
          md:text-base
        "
        >
          Tell us how you want to grow with IGBN Worldwide
        </p>
      </motion.div>

      {/* Cards */}

      <div
        className="
        max-w-[1100px]
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-6
        px-5
      "
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.type}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
            }}
            whileHover={{
              y: -8,
            }}
            className={`
              rounded-2xl
              border
              ${card.color === "blue" ? "border-blue-200" : "border-yellow-200"}
              bg-white
              shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              p-6
              md:p-8
              flex
              flex-col
            `}
          >
            <div
              className="
              flex
              flex-col
              md:flex-row
              items-center
              gap-5
            "
            >
              {/* Image */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  w-full
                  md:w-[45%]
                  flex
                  justify-center
                "
              >
                <img
                  src={card.image}
                  alt={card.type}
                  className="
                    w-[220px]
                    h-[180px]
                    object-contain
                  "
                />
              </motion.div>

              {/* Content */}

              <div
                className="
                flex-1
              "
              >
                <h2
                  className="
                  text-[#172343]
                  text-2xl
                  md:text-3xl
                  font-bold
                "
                >
                  {card.title}

                  <span
                    className={
                      card.color === "blue"
                        ? " text-[#2563eb]"
                        : " text-[#d89b18]"
                    }
                  >
                    {" "}
                    {card.highlight}
                  </span>
                </h2>

                <p
                  className="
                  mt-3
                  text-[#667085]
                  text-sm
                  md:text-base
                  leading-6
                "
                >
                  {card.description}
                </p>

                <div
                  className="
                  mt-5
                  space-y-3
                "
                >
                  {card.points.map((point) => (
                    <div
                      key={point}
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-[#344054]
                      "
                    >
                      <Check
                        size={18}
                        className={
                          card.color === "blue"
                            ? "text-blue-600"
                            : "text-yellow-600"
                        }
                      />

                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Button */}

            <button
              onClick={() => chooseType(card.type)}
              className={`
                mt-8
                w-full
                py-3
                rounded-lg
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                transition-all

                ${
                  card.color === "blue"
                    ? "bg-[#2563eb] hover:bg-blue-700"
                    : "bg-[#d89b18] hover:bg-yellow-600"
                }

              `}
            >
              Continue as {card.highlight}
              <ArrowRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
