import { ArrowUpRight, Check, Code2, Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MarketplaceProductCard({ product, index }) {
  const [saved, setSaved] = useState(false);

  return (
    <article
      className="marketplace-product-card"
      style={{ "--card-index": index }}
    >
      <div className="marketplace-product-card__preview">
        <img src={product.image} alt="" loading="lazy" />
        <div className="marketplace-product-card__preview-shade" />
        <span className="marketplace-product-card__type">
          {product.type === "Web" ? "WEB SOLUTION" : "MOBILE APP"}
        </span>
        {product.featured && (
          <span className="marketplace-product-card__featured">
            <Sparkles size={12} /> Featured
          </span>
        )}
        <button
          type="button"
          className={`marketplace-product-card__save ${saved ? "is-saved" : ""}`}
          aria-label={saved ? "Remove from saved" : "Save solution"}
          aria-pressed={saved}
          onClick={() => setSaved((value) => !value)}
        >
          <Heart size={17} fill={saved ? "currentColor" : "none"} />
        </button>
        <div className="marketplace-product-card__preview-caption">
          <span>IGBN DIGITAL</span>
          <strong>{product.title}</strong>
        </div>
      </div>

      <div className="marketplace-product-card__body">
        <div className="marketplace-product-card__meta">
          <span>{product.industry}</span>
          <span className="marketplace-product-card__available">
            <Check size={12} /> Customizable
          </span>
        </div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="marketplace-product-card__tags">
          {product.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="marketplace-product-card__footer">
          <span>
            <Code2 size={15} /> Built around your needs
          </span>
          <Link to="/contact" aria-label={`Live preview ${product.title}`}>
            Live Preview <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
