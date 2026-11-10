import { useMemo, useState } from "react";
import { ArrowRight, LayoutGrid } from "lucide-react";
import MarketplaceProductCard from "./MarketplaceProductCard";
import { marketplaceProducts } from "./marketplaceData";

const productTypes = ["Web", "App"];

export default function DigitalMarketplaceCatalog({ type, onTypeChange }) {
  const [industry, setIndustry] = useState("All industries");

  const industries = useMemo(
    () => [
      "All industries",
      ...new Set(
        marketplaceProducts
          .filter((product) => product.type === type)
          .map((product) => product.industry),
      ),
    ],
    [type],
  );

  const products = marketplaceProducts.filter(
    (product) =>
      product.type === type &&
      (industry === "All industries" || product.industry === industry),
  );

  const changeType = (nextType) => {
    onTypeChange(nextType);
    setIndustry("All industries");
  };

  return (
    <section
      className="marketplace-catalog"
      id="marketplace-catalog"
      aria-labelledby="marketplace-heading"
    >
      <div className="marketplace-catalog__inner">
        <div className="marketplace-catalog__heading">
          <div>
            <span className="marketplace-section-kicker">
              <LayoutGrid size={15} /> Browse digital solutions
            </span>
            <h2 id="marketplace-heading">
              Find the right fit for <span>your next move.</span>
            </h2>
            <p>
              Explore our web and app solutions by the industries we help every
              day.
            </p>
          </div>
          <a href="#marketplace-catalog" className="marketplace-catalog__all">
            Built around your goals <ArrowRight size={16} />
          </a>
        </div>

        <div className="marketplace-tabs" role="tablist" aria-label="Solution type">
          {productTypes.map((productType) => (
            <button
              key={productType}
              type="button"
              role="tab"
              id={`marketplace-tab-${productType.toLowerCase()}`}
              aria-selected={type === productType}
              aria-controls="marketplace-products"
              className={type === productType ? "is-active" : ""}
              onClick={() => changeType(productType)}
            >
              <span>{productType === "Web" ? "Websites & platforms" : "Apps"}</span>
              <small>
                {marketplaceProducts.filter((product) => product.type === productType).length}
              </small>
            </button>
          ))}
        </div>

        <div className="marketplace-industries">
          <span className="marketplace-industries__label">Industries</span>
          <div className="marketplace-industries__list">
            {industries.map((category) => (
              <button
                type="button"
                key={category}
                aria-pressed={industry === category}
                className={industry === category ? "is-active" : ""}
                onClick={() => setIndustry(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="marketplace-results-bar">
          <p>
            Showing <strong>{products.length}</strong>{" "}
            {industry === "All industries" ? type.toLowerCase() : industry}{" "}
            {type === "Web" ? "solutions" : "apps"}
          </p>
          <span>Thoughtful design. Practical technology.</span>
        </div>

        <div
          className="marketplace-product-grid"
          id="marketplace-products"
          role="tabpanel"
          aria-labelledby={`marketplace-tab-${type.toLowerCase()}`}
        >
          {products.map((product, index) => (
            <MarketplaceProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>

        {products.length === 0 && (
          <div className="marketplace-empty-state">
            No solutions in this category yet. Choose another industry to
            explore.
          </div>
        )}
      </div>
    </section>
  );
}
