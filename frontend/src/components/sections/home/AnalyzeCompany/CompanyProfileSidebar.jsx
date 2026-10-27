import { ArrowLeft, Building2, FileText, Globe2, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ProductVisual from "./ProductVisual";

export default function CompanyProfileSidebar({ company }) {
  const detailRows = [
    { icon: Mail, value: company.email || "Add a company email" },
    { icon: Globe2, value: company.website },
    { icon: MapPin, value: company.country || "India" },
  ];

  return (
    <aside className="flex h-full flex-col overflow-hidden rounded-xl border border-[#725021]/70 bg-[#03111F] shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
      <ProductVisual
        assetName="company-product"
        icon="company"
        className="h-44 shrink-0 sm:h-56 xl:h-48"
        imageClassName="object-contain p-3"
      />

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D69A2B]/30 bg-[#D69A2B]/10 text-[#D69A2B]">
            <Building2 size={19} aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-[15px] font-medium uppercase tracking-[0.14em] text-[#AAB2BA]">
              Company details
            </p>
            <h2 className="mt-1 break-words text-base font-semibold text-[#F4F5F6]">
              {company.name || "ABC Leather Goods Pvt. Ltd."}
            </h2>
          </div>
        </div>

        <ul className="space-y-3 border-b border-[#725021]/50 pb-4">
          {detailRows.map(({ icon: Icon, value }) => (
            <li
              key={value}
              className="flex min-w-0 items-start gap-2.5 text-[15px] text-[#D8DDE2]"
            >
              <Icon
                size={16}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-[#D69A2B]"
              />
              <span className="break-all">{value}</span>
            </li>
          ))}
        </ul>

        <dl className="flex flex-1 flex-col justify-around space-y-4 py-4 text-[15px]">
          <div>
            <dt className="text-[15px] uppercase tracking-wide text-[#AAB2BA]">
              Product category
            </dt>
            <dd className="mt-1 text-[#E2E5E8]">Leather Bags &amp; Accessories</dd>
          </div>
          <div>
            <dt className="text-[15px] uppercase tracking-wide text-[#AAB2BA]">
              Business type
            </dt>
            <dd className="mt-1 text-[#E2E5E8]">{company.businessType}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-[15px] uppercase tracking-wide text-[#AAB2BA]">
              <FileText size={14} aria-hidden="true" />
              Catalog uploaded
            </dt>
            <dd className="mt-1 break-all pl-[22px] text-[#E2E5E8]">
              {company.fileName || "Sample catalog"}
            </dd>
          </div>
        </dl>

        <Link
          to="/"
          className="mt-1 inline-flex min-h-10 items-center gap-2 self-start rounded-lg border border-[#725021]/70 px-3 text-[15px] font-medium text-[#D69A2B] transition-colors hover:border-[#D69A2B] hover:bg-[#D69A2B]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D69A2B]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </aside>
  );
}
