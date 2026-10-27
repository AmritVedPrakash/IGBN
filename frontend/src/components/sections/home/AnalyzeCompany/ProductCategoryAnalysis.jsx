import { ArrowRight, TrendingUp } from "lucide-react";
import { productCategories } from "./analysisData";
import ProductVisual from "./ProductVisual";

const demandColors = {
  "Growing Demand": "text-[#B9CE9D]",
  "High Demand": "text-[#E6B75E]",
  "Very High Demand": "text-[#F3C56A]",
};

export default function ProductCategoryAnalysis() {
  return (
    <section
      id="product-positioning"
      className="scroll-mt-32 rounded-xl border border-[#725021]/70 bg-[#03111F] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.22)] sm:p-5"
    >
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-[#F4F5F6]">
            Product Category Analysis
          </h2>
          <p className="mt-1 text-[15px] leading-6 text-[#AEB8C2]">
            Sample demand outlook by product category.
          </p>
        </div>
        <span className="inline-flex items-center gap-1 text-[15px] text-[#AEB8C2]">
          View details <ArrowRight size={14} aria-hidden="true" />
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
        {productCategories.map((product) => (
          <article
            key={product.name}
            className="overflow-hidden rounded-lg border border-[#263C50] bg-[#061522]"
          >
            <ProductVisual
              assetName={product.image}
              icon={product.icon}
              className="h-24 sm:h-28"
            />
            <div className="p-2.5">
              <h3 className="min-h-12 text-base font-semibold leading-5 text-[#F4F5F6]">
                {product.name}
              </h3>
              <p
                className={`mt-1 flex items-center gap-1 text-[15px] font-medium leading-5 ${demandColors[product.demand]}`}
              >
                <TrendingUp size={17} aria-hidden="true" />
                {product.demand}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
