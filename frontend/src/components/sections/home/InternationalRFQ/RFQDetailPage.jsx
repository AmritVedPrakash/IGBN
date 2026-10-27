import React from "react";
import { useParams } from "react-router-dom";
import { internationalRFQData } from "../../../../data/internationalRFQData";
import RFQDetails from "./RFQDetails";

export default function RFQDetailPage() {
  const { id } = useParams();
  const rfq = internationalRFQData.find((item) => String(item.id) === id);

  return (
    <main className="min-h-screen bg-[#020D18] px-4 py-6 text-[#E2E5E8] sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-[1650px] rounded-xl border border-[#725021]/80 bg-[#03111F] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:p-5 lg:p-6">
        {rfq ? (
          <RFQDetails rfq={rfq} />
        ) : (
          <div className="py-16 text-center">
            <h1 className="text-2xl font-bold text-[#F4F5F6]">
              RFQ not found
            </h1>
            <p className="mt-2 text-sm text-[#AAB2BA]">
              This requirement may no longer be available.
            </p>
            <a
              href="/"
              className="mt-6 inline-flex rounded-md border border-[#D69A2B] px-5 py-2.5 text-sm font-semibold text-[#D69A2B] transition hover:bg-[#D69A2B]/10"
            >
              Back to RFQ Marketplace
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
