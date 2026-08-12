import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Users,
  Globe2,
  BadgeCheck,
  Handshake,
  PackageCheck,
  Wheat,
  Factory,
  Settings,
} from "lucide-react";

// Supplier Images
import supplier1 from "../../assets/verifiedsuppliers/ltfoods.png";
import supplier2 from "../../assets/verifiedsuppliers/kalpataru.png";
import supplier3 from "../../assets/verifiedsuppliers/rajbhog.png";
import supplier4 from "../../assets/verifiedsuppliers/arvind.png";
import supplier5 from "../../assets/verifiedsuppliers/haldiram.png";

export default function TrustedBy() {
  const suppliers = [
    {
      image: supplier1,
      name: "LT Foods Ltd.",
    },
    {
      image: supplier2,
      name: "Kalpataru Group",
    },
    {
      image: supplier3,
      name: "Rajbhog Foods",
    },
    {
      image: supplier4,
      name: "Arvind Ltd.",
    },
    {
      image: supplier5,
      name: "Haldiram's",
    },
  ];

  const rfqs = [
    {
      icon: Wheat,
      title: "Basmati Rice 1121",
      country: "Dubai, UAE",
      quantity: "20 MT",
    },
    {
      icon: PackageCheck,
      title: "Cotton Fabric",
      country: "Germany",
      quantity: "15,000 Meters",
    },
    {
      icon: Wheat,
      title: "Spices (Turmeric)",
      country: "USA",
      quantity: "10 MT",
    },
    {
      icon: Settings,
      title: "Engineering Components",
      country: "Australia",
      quantity: "500 Units",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: "Verified",
    },
    {
      icon: Users,
      value: "2500+",
      label: "Global Buyers",
    },
    {
      icon: BadgeCheck,
      value: "2500+",
      label: "Quoted",
    },
    {
      icon: Globe2,
      value: "50+",
      label: "Countries Connected",
    },
    {
      icon: BadgeCheck,
      value: "50+",
      label: "Sectors",
    },
    {
      icon: Handshake,
      value: "10000+",
      label: "Successful Deals",
    },
  ];

  return (
    <section className="bg-[#fbfaf8] py-10 md:py-14">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[1.55fr_1fr_0.75fr] gap-5">
          {/* ================= SUPPLIERS ================= */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#161616] font-bold uppercase text-base md:text-lg">
                Verified Suppliers & Buyers
              </h2>

              <button className="flex items-center gap-1 text-[#d5a328] text-xs font-semibold hover:gap-2 transition-all">
                View All
                <ArrowRight size={14} />
              </button>
            </div>

            <div
              className="
                relative
                bg-white
                border border-black/[0.04]
                shadow-[0_6px_25px_rgba(0,0,0,0.05)]
                rounded-md
                px-8
                py-5
              "
            >
              {/* Left Arrow */}
              <button
                className="
                  absolute
                  left-1
                  top-1/2
                  -translate-y-1/2
                  text-[#0b234d]
                  hover:scale-110
                  transition
                "
              >
                <ChevronLeft size={28} />
              </button>

              {/* Supplier Cards */}
              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  md:grid-cols-5
                  gap-3
                "
              >
                {suppliers.map((supplier, index) => (
                  <div
                    key={index}
                    className="
                      min-h-[120px]
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center
                      px-3
                      py-4
                      border-r
                      last:border-r-0
                      border-[#eeeeee]
                    "
                  >
                    <div className="h-[55px] flex items-center justify-center mb-3">
                      <img
                        src={supplier.image}
                        alt={supplier.name}
                        className="max-h-[50px] max-w-[100px] object-contain"
                      />
                    </div>

                    <p className="text-[11px] md:text-xs text-[#333] font-medium">
                      {supplier.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                className="
                  absolute
                  right-1
                  top-1/2
                  -translate-y-1/2
                  text-[#0b234d]
                  hover:scale-110
                  transition
                "
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>

          {/* ================= RFQs ================= */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#161616] font-bold uppercase text-base md:text-lg">
                Latest RFQs
              </h2>

              <button className="flex items-center gap-1 text-[#d5a328] text-xs font-semibold hover:gap-2 transition-all">
                View All
                <ArrowRight size={14} />
              </button>
            </div>

            <div
              className="
                bg-white
                border border-black/[0.04]
                shadow-[0_6px_25px_rgba(0,0,0,0.05)]
                rounded-md
                overflow-hidden
              "
            >
              {rfqs.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      px-4
                      py-[11px]
                      border-b
                      last:border-b-0
                      border-[#eeeeee]
                    "
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="shrink-0">
                        <Icon
                          size={22}
                          strokeWidth={1.8}
                          className="text-[#d6a52a]"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-[12px] md:text-[13px] font-bold text-[#222] truncate">
                          {item.title}
                        </h3>

                        <p className="text-[9px] md:text-[10px] text-[#999] mt-[2px]">
                          {item.country}
                          <span className="mx-1">|</span>
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>

                    <button
                      className="
                        shrink-0
                        bg-[#071d43]
                        text-white
                        text-[9px]
                        font-semibold
                        px-5
                        py-2
                        rounded
                        hover:bg-[#0c2c60]
                        transition
                      "
                    >
                      View
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= KEY STATS ================= */}
          <div>
            <h2 className="text-[#161616] font-bold uppercase text-base md:text-lg mb-4">
              Key Stats
            </h2>

            <div
              className="
                bg-[#071d43]
                rounded-md
                min-h-[218px]
                p-5
                md:p-6
                grid
                grid-cols-2
                gap-x-5
                gap-y-6
                shadow-[0_8px_25px_rgba(0,0,0,0.08)]
              "
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#d4a42c] shrink-0"
                    />

                    <div>
                      <h3 className="text-white text-sm md:text-base font-bold leading-none">
                        {stat.value}
                      </h3>

                      <p className="text-white/70 text-[9px] md:text-[10px] mt-1 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
