import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

import CommodityOverview from "./CommodityOverview";
import CommodityKeyStats from "./CommodityKeyStats";
import CommodityPerformance from "./CommodityPerformance";
import CommodityPriceChart from "./CommodityPriceChart";
import CommoditySupplyDemand from "./CommoditySupplyDemand";
import CommodityPriceHistory from "./CommodityPriceHistory";
import CommodityMajorDrivers from "./CommodityMajorDrivers";
import CommodityLatestNews from "./CommodityLatestNews";

import { getCommodityDetails } from "../../../../data/commodityData";

import TradeOutlookAndIGBN from "./TradeOutlookAndIGBN";
export default function CommodityMarketDetails() {
    
  const { commodityId } = useParams();

  const navigate = useNavigate();

  const data = getCommodityDetails(commodityId);

  return (
    <>
    <section
      className="
        min-h-screen
        w-full
        bg-[#020D18]
        px-4
        py-6
        sm:px-6
        lg:px-8
        lg:py-8
      "
    >
      <div className="mx-auto max-w-[1650px]">
        {/* =====================================
            TOP HEADER
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mb-4
            rounded-[9px]
            border
            border-[#193249]
            bg-[#020E1A]
            px-4
            py-3
            sm:px-5
          "
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#263C4F]
                  bg-[#071522]
                  text-[#A9B4BC]
                  transition-all
                  hover:border-[#80602A]
                  hover:text-[#D69A2B]
                "
              >
                <ArrowLeft size={17} />
              </button>

              {data.image && (
                <img
                  src={data.image}
                  alt={data.name}
                  className="
                    h-11
                    w-11
                    rounded-full
                    object-cover
                    border
                    border-[#263C4F]
                  "
                />
              )}

              <div>
                <h1 className="text-[20px] font-semibold text-[#F1F3F4] sm:text-[24px]">
                  {data.name} – Global Market Intelligence
                </h1>

                <p className="mt-1 text-[11px] text-[#8C9AA5] sm:text-[13px]">
                  Real-time overview, trends, market data & outlook
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-[10px] text-[#687985]">Data Sources</p>

              <p className="mt-1 text-[11px] font-medium text-[#AAB5BC]">
                Market Data • Trading Economics
              </p>

              <p className="mt-1 text-[10px] text-[#687985]">
                Last Updated: {data.updated}
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================
            FIRST ROW
        ====================================== */}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_0.65fr_0.9fr]">
          <CommodityOverview data={data} />

          <CommodityKeyStats data={data} />

          <CommodityPerformance data={data} />
        </div>

        {/* =====================================
            DESCRIPTION
        ====================================== */}
{/* 
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-4
            rounded-[9px]
            border
            border-[#193249]
            bg-[#03111F]
            p-4
            sm:p-5
          "
        >
          <h2 className="text-[16px] font-semibold text-[#E9ECEF]">
            {data.name} Market Overview
          </h2>

          <p className="mt-2 max-w-[1100px] text-[12px] leading-6 text-[#8997A2] sm:text-[13px]">
            {data.description}
          </p>
        </motion.div> */}

        {/* =====================================
            LARGE PRICE CHART + SUPPLY DEMAND
        ====================================== */}

        <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1.55fr_0.85fr]">
          <CommodityPriceChart data={data} />

          <CommoditySupplyDemand data={data} />
        </div>

        {/* =====================================
            BOTTOM ROW
        ====================================== */}

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <CommodityPriceHistory data={data} />

          <CommodityMajorDrivers data={data} />

          <CommodityLatestNews data={data} />
        </div>

        {/* =====================================
            FOOTER ACTION
        ====================================== */}

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="
              flex
              items-center
              gap-2
              text-[12px]
              font-semibold
              text-[#718BA2]
              transition-colors
              hover:text-[#D69A2B]
            "
          >
            View Full Commodity Dashboard
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
      {/* <div>
      <TradeOutlookAndIGBN/>
    </div> */}
    </section>
    
    </>
    
    
    
  );
}
