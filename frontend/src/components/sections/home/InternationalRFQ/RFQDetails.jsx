import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  LayoutGrid,
  LockKeyhole,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";
import RFQPlanCards from "./RFQPlanCards";

const rfqImages = import.meta.glob("../../../../assets/rfq/*", {
  eager: true,
  import: "default",
  query: "?url",
});

const cottonImage = Object.entries(rfqImages).find(([path]) =>
  /cotton/i.test(path),
)?.[1];

const benefits = [
  "Real export opportunities",
  "Verified international buyers",
  "Wide range of product categories",
  "Grow your export business with IGBN",
];

function DetailMetric({ icon: Icon, label, value }) {
  return (
    <div className="flex min-h-[68px] items-center gap-3 rounded-md border border-[#725021]/70 bg-[#041625] px-3 py-3">
      <Icon className="shrink-0 text-[#D69A2B]" size={21} strokeWidth={1.8} />
      <div className="min-w-0">
        <p className="text-[11px] text-[#AAB2BA]">{label}</p>
        <p className="mt-0.5 truncate text-xs font-semibold text-[#F4F5F6] sm:text-sm">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function RFQDetails({ rfq }) {
  const isCotton = rfq.id === 1;

  return (
    <motion.div
      key={rfq.id}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-4"
    >
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-xs text-[#AAB2BA]"
      >
        <a href="/" className="transition hover:text-[#D69A2B]">
          Home
        </a>
        <span aria-hidden="true">›</span>
        <a href="/" className="transition hover:text-[#D69A2B]">
          RFQ Marketplace
        </a>
        <span aria-hidden="true">›</span>
        <span className="text-[#E2E5E8]">RFQ Details</span>
      </nav>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,3.8fr)]">
        <div className="overflow-hidden rounded-lg border border-[#725021]/80 bg-[#020D18]">
          {isCotton && cottonImage ? (
            <img
              src={cottonImage}
              alt="Cotton fabric rolls"
              className="h-full min-h-[190px] w-full object-cover lg:min-h-[250px]"
            />
          ) : (
            <div className="flex min-h-[190px] items-center justify-center bg-gradient-to-br from-[#102334] via-[#071725] to-[#020D18] px-6 text-center lg:min-h-[250px]">
              <div>
                <Package
                  size={46}
                  strokeWidth={1.3}
                  className="mx-auto text-[#D69A2B]"
                />
                <p className="mt-3 text-sm font-semibold text-[#E2E5E8]">
                  {rfq.category}
                </p>
                {isCotton && (
                  <p className="mt-1 text-xs text-[#AAB2BA]">
                    Add a cotton photo to assets/rfq
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-[#AAB2BA]">
            <span className="flex items-center gap-2">
              <img
                src={rfq.flag}
                alt=""
                className="h-5 w-7 rounded-sm object-cover"
              />
              <span className="text-lg font-semibold text-[#F4F5F6]">
                {rfq.countryName || rfq.country}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#42633E] bg-[#10251B] px-2.5 py-1 text-[#A7CE7C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A7CE7C]" />
              {rfq.status}
            </span>
            {/* <span>RFQ ID: {rfq.reference}</span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={13} />
              Posted: {rfq.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={13} />
              Expires: {rfq.expires}
            </span> */}
          </div>

          <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#F4F5F6] sm:text-[27px]">
            {rfq.title}
          </h2>
          <p className="mt-2 max-w-3xl text-base leading-6 text-[#AAB2BA]">
            {isCotton
              ? "Requirement for 100% cotton, combed, dyed fabrics for garment manufacturing."
              : `Buyer requirement for ${rfq.quantity} in ${rfq.category.toLowerCase()}.`}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
            <DetailMetric
              icon={LayoutGrid}
              label="Category"
              value={rfq.category}
            />
            <DetailMetric
              icon={Package}
              label="Approx. Quantity"
              value={rfq.quantity}
            />
            <DetailMetric
              icon={FileText}
              label="Application"
              value={rfq.application}
            />
            <DetailMetric
              icon={Truck}
              label="Preferred Shipment"
              value={rfq.shipment}
            />
            <DetailMetric
              icon={CalendarDays}
              label="Required Timeline"
              value={rfq.timeline}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(240px,0.9fr)_minmax(0,2.1fr)]">
        <aside className="space-y-4">
          <section className="rounded-lg border border-[#725021]/80 bg-[#041625] p-4">
            <h3 className="flex items-center gap-2 text-[26px] font-bold leading-tight text-[#F4F5F6] sm:text-[27px]">
              <FileText size={18} className="text-[#D69A2B]" />
              Requirement Summary
            </h3>
            <p className="mt-3 text-base leading-6 text-[#AAB2BA]">
              {rfq.summary}
            </p>
            <button
              type="button"
              className="mt-3 text-xs font-semibold text-[#D69A2B] transition hover:text-[#F0C168]"
            >
              Read More <span aria-hidden="true">⌄</span>
            </button>
          </section>

          <section className="rounded-lg border border-[#725021]/80 bg-gradient-to-br from-[#0a1d2e] to-[#03111F] p-4">
            <h3 className="text-[26px] font-bold leading-snug text-[#F4F5F6] sm:text-[27px]">
              Get Access to
              <br />
              Verified Global
              <br />
              Buyer Requirements
            </h3>
            <ul className="mt-4 space-y-2.5">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-lg text-[#E2E5E8]"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#D69A2B]"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </section>
        </aside>

        <section className="min-w-0 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-[26px] font-bold leading-tight text-[#F4F5F6] sm:text-[27px]">
                Access This RFQ and Many More
              </h3>
              <p className="mt-1 text-base leading-6 text-[#AAB2BA]">
                Choose the plan that works best for your business.
              </p>
            </div>
            <a
              href="/create-account"
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#D69A2B] bg-gradient-to-r from-[#E0AA48] via-[#D99B2B] to-[#C98A24] px-5 py-2 text-sm font-bold text-[#07111B] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D69A2B]"
            >
              Choose a Plan to Unlock
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 rounded-lg border border-[#725021]/70 bg-[#041625] p-3 md:grid-cols-4">
            <p className="flex items-center gap-2 text-[15px] text-[#AAB2BA]">
              <ShieldCheck size={15} className="shrink-0 text-[#D69A2B]" />
              Verified Global Buyers
            </p>
            <p className="flex items-center gap-2 text-[15px] text-[#AAB2BA]">
              <Globe2 size={15} className="shrink-0 text-[#D69A2B]" />
              Wide Range of Industries
            </p>
            <p className="flex items-center gap-2 text-[15px] text-[#AAB2BA]">
              <FileText size={15} className="shrink-0 text-[#D69A2B]" />
              New RFQs Added Regularly
            </p>
            <p className="flex items-center gap-2 text-[15px] text-[#AAB2BA]">
              <LockKeyhole size={15} className="shrink-0 text-[#D69A2B]" />
              Secure & Transparent Platform
            </p>
          </div>

          <RFQPlanCards />
        </section>
      </div>

      <div className="flex justify-start">
        <a
          href="/"
          className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#725021]/80 px-4 py-2 text-sm font-semibold text-[#E2E5E8] transition hover:border-[#D69A2B] hover:text-[#D69A2B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D69A2B]"
        >
          <ArrowLeft size={16} />
          Back to RFQ Marketplace
        </a>
      </div>
    </motion.div>
  );
}
