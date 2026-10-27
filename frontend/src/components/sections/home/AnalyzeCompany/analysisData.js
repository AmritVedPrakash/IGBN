import australia from "../../../../assets/flag/australia.png";
import canada from "../../../../assets/flag/canada.png";
import france from "../../../../assets/flag/france.png";
import germany from "../../../../assets/flag/germany.png";
import italy from "../../../../assets/flag/italy.png";
import netherlands from "../../../../assets/flag/netherlands.png";
import saudiArabia from "../../../../assets/flag/saudi-arabia.png";
import uae from "../../../../assets/flag/uae.png";
import uk from "../../../../assets/flag/uk.png";
import usa from "../../../../assets/flag/usa.png";

export const demoMarkets = [
  { country: "United States", flag: usa, buyers: 132, score: 94 },
  { country: "Germany", flag: germany, buyers: 98, score: 84 },
  { country: "United Kingdom", flag: uk, buyers: 76, score: 72 },
  { country: "United Arab Emirates", flag: uae, buyers: 64, score: 62 },
  { country: "Australia", flag: australia, buyers: 58, score: 55 },
];

export const countryBuyerPotential = [
  ...demoMarkets,
  { country: "France", flag: france, buyers: 52, score: 50 },
  { country: "Canada", flag: canada, buyers: 48, score: 46 },
  { country: "Italy", flag: italy, buyers: 46, score: 44 },
  { country: "Netherlands", flag: netherlands, buyers: 42, score: 40 },
  { country: "Saudi Arabia", flag: saudiArabia, buyers: 38, score: 37 },
];

export const keyInsights = [
  {
    icon: "trend",
    title: "Premium quality & design",
    description: "Buyers in key markets show strong interest in distinctive leather goods.",
  },
  {
    icon: "shopping",
    title: "Growing online demand",
    description: "E-commerce and lifestyle retail continue to open new sales channels.",
  },
  {
    icon: "leaf",
    title: "Sustainable sourcing",
    description: "Responsible materials and transparent production are gaining importance.",
  },
  {
    icon: "shield",
    title: "Private-label potential",
    description: "Retailers are looking for dependable partners for custom collections.",
  },
];

export const productCategories = [
  {
    name: "Handbags & Totes",
    demand: "Very High Demand",
    image: "handbags-totes",
    icon: "bag",
  },
  {
    name: "Backpacks",
    demand: "High Demand",
    image: "backpacks",
    icon: "backpack",
  },
  {
    name: "Laptop & Office Bags",
    demand: "High Demand",
    image: "laptop-office-bags",
    icon: "laptop",
  },
  {
    name: "Small Leather Goods",
    demand: "Growing Demand",
    image: "small-leather-goods",
    icon: "wallet",
  },
  {
    name: "Accessories",
    demand: "Growing Demand",
    image: "accessories",
    icon: "accessory",
  },
];

export const buyerSegments = [
  "Fashion Retail Chains",
  "Corporate Gifting",
  "E-commerce Platforms",
  "Private Label Brands",
  "Department Stores",
  "Wholesalers & Distributors",
];
