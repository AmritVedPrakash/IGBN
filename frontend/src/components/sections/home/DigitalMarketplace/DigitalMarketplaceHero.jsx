import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { marketplaceSlides } from "./marketplaceData";

export default function DigitalMarketplaceHero({ onExplore }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = marketplaceSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % marketplaceSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (nextIndex) => {
    setActiveSlide(
      (nextIndex + marketplaceSlides.length) % marketplaceSlides.length,
    );
  };

  const scrollToCatalog = (type) => {
    onExplore(type);
    const catalog = document.getElementById("marketplace-catalog");
    if (!catalog) return;
    catalog.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="marketplace-hero">
      <div className="marketplace-hero__glow" />
      <div className="marketplace-hero__content">
        <div className="marketplace-hero__copy" key={activeSlide}>
          <span className="marketplace-eyebrow">
            <Sparkles size={15} />
            {slide.eyebrow}
          </span>
          <h1>
            {slide.title}
            <span>{slide.highlight}</span>
          </h1>
          <p>{slide.description}</p>
          <button
            type="button"
            className="marketplace-primary-button"
            onClick={() => scrollToCatalog(activeSlide === 2 ? "App" : "Web")}
          >
            {slide.action}
            <ArrowRight size={17} />
          </button>
          <div className="marketplace-hero__controls">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => showSlide(activeSlide - 1)}
            >
              <ArrowLeft size={17} />
            </button>
            <div className="marketplace-hero__dots" aria-label="Choose slide">
              {marketplaceSlides.map((item, index) => (
                <button
                  type="button"
                  key={item.eyebrow}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                  className={index === activeSlide ? "is-active" : ""}
                  onClick={() => showSlide(index)}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => showSlide(activeSlide + 1)}
            >
              <ArrowRight size={17} />
            </button>
            <span className="marketplace-hero__slide-count">
              0{activeSlide + 1} <span>/ 0{marketplaceSlides.length}</span>
            </span>
          </div>
        </div>

        <div className="marketplace-hero__visual" key={`visual-${activeSlide}`}>
          <div className="marketplace-hero__image-frame">
            <img src={slide.image} alt="" />
            <div className="marketplace-hero__image-shade" />
            <div className="marketplace-hero__floating-card">
              <span className="marketplace-live-dot" />
              <span>
                <strong>Made for your business</strong>
                <small>Websites · Apps · Platforms</small>
              </span>
              <ArrowRight size={18} />
            </div>
          </div>
          
        </div>
      </div>
      <a className="marketplace-hero__scroll" href="#marketplace-catalog">
        <ArrowDown size={15} /> Explore the collection
      </a>
    </section>
  );
}
