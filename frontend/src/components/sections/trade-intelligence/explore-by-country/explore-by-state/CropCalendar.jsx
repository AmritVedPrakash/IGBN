import React from "react";
import { motion } from "framer-motion";
import { Flower2, Sprout, Tractor, PackageCheck, Store } from "lucide-react";

export default function CropCalendar({ data, product }) {
  const calendar = [
    {
      title: "Flowering",
      value: data.cropCalendar.flowering,
      icon: Flower2,
    },
    {
      title: "Crop Development",
      value: data.cropCalendar.development,
      icon: Sprout,
    },
    {
      title: "Harvest",
      value: data.cropCalendar.harvest,
      icon: Tractor,
    },
    {
      title: "Post Harvest",
      value: data.cropCalendar.postHarvest,
      icon: PackageCheck,
    },
    {
      title: "Ready for Market",
      value: data.cropCalendar.readyMarket,
      icon: Store,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        rounded-[8px]
        border
        border-[#193249]
        bg-[#03111F]
        p-4
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[16px] font-semibold text-[#E9ECEF] sm:text-[18px]">
            CROP CALENDAR – {product.toUpperCase()}
          </h2>

          <p className="mt-1 text-[10px] text-[#748795]">
            {data.name} production cycle
          </p>
        </div>

        <span className="text-[10px] text-[#778996]">2026</span>
      </div>

      <div className="relative mt-7">
        <div className="absolute left-5 right-5 top-[16px] h-[1px] bg-[#294052]" />

        <div className="relative grid grid-cols-5 gap-2">
          {calendar.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="text-center"
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#496076]
                    bg-[#071522]
                    text-[#D69A2B]
                  "
                >
                  <Icon size={15} />
                </div>

                <p className="mt-3 text-[9px] font-medium text-[#B7C1C8] sm:text-[10px]">
                  {item.title}
                </p>

                <p className="mt-1 text-[9px] text-[#718493]">{item.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
