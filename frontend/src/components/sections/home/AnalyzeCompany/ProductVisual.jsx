import {
  BriefcaseBusiness,
  Laptop,
  Luggage,
  Package,
  ShoppingBag,
  Wallet,
} from "lucide-react";

const productImages = Object.fromEntries(
  Object.entries(
    import.meta.glob("../../../../assets/company-analysis/*.{png,jpg,jpeg,webp}", {
      eager: true,
      import: "default",
      query: "?url",
    }),
  ).map(([path, url]) => [path.split("/").pop().split(".")[0], url]),
);

const productIcons = {
  accessory: Package,
  backpack: Luggage,
  bag: ShoppingBag,
  company: BriefcaseBusiness,
  laptop: Laptop,
  wallet: Wallet,
};

export default function ProductVisual({
  assetName,
  icon = "bag",
  className = "",
  imageClassName = "",
}) {
  const image = productImages[assetName];
  const Icon = productIcons[icon] || ShoppingBag;

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_80%,rgba(214,154,43,0.22),transparent_58%),linear-gradient(145deg,#132B3D,#061522_65%)] ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt=""
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
        />
      ) : (
        <Icon
          aria-hidden="true"
          strokeWidth={1.2}
          className="h-12 w-12 text-[#D69A2B]/75 sm:h-14 sm:w-14"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020D18]/55 to-transparent" />
    </div>
  );
}
