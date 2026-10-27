import usaFlag from "../assets/flag/usa.png";
import germanyFlag from "../assets/flag/germany.png";
import uaeFlag from "../assets/flag/uae.png";
import saudiFlag from "../assets/flag/saudi-arabia.png";
import indonesiaFlag from "../assets/flag/indonesia.png";
import ukFlag from "../assets/flag/uk.png";

export const internationalRFQStats = [
  {
    id: 1,
    value: "10,000+",
    label: "Global Buyers",
    type: "buyers",
  },
  {
    id: 2,
    value: "15,000+",
    label: "Active Buyers",
    type: "active",
  },
  {
    id: 3,
    value: "25K+",
    label: "Products Listed",
    type: "products",
  },
  {
    id: 4,
    value: "30+",
    label: "Countries Connected",
    type: "countries",
  },
];

export const internationalRFQData = [
  {
    id: 1,
    country: "USA",
    countryName: "United States",
    flag: usaFlag,
    title: "Cotton Fabric Supply",
    category: "Textiles & Fabrics",
    quantity: "50,000 Meters",
    date: "21 May 2024",
    status: "Active",
    reference: "RFQ-2024-0567",
    application: "Apparel Fabrics",
    shipment: "FOB / CIF",
    timeline: "Jun – Aug 2024",
    expires: "31 Dec 2024",
    summary:
      "A reputed buyer from the United States is looking to source high-quality 100% cotton, combed, dyed fabrics for garment manufacturing. The requirement is for consistent quality, competitive pricing and long-term supply potential.",
  },
  {
    id: 2,
    country: "Germany",
    countryName: "Germany",
    flag: germanyFlag,
    title: "Industrial Valves",
    category: "Machinery",
    quantity: "2,000 Units",
    date: "20 May 2024",
    status: "Active",
    reference: "RFQ-2024-0566",
    application: "Industrial Systems",
    shipment: "FOB / CIF",
    timeline: "As per buyer schedule",
    expires: "Contact buyer",
    summary:
      "A buyer is seeking industrial valves for an upcoming procurement. Registered suppliers can review the full technical specifications and commercial requirements.",
  },
  {
    id: 3,
    country: "UAE",
    countryName: "United Arab Emirates",
    flag: uaeFlag,
    title: "Dates (Various Types)",
    category: "Food & Beverages",
    quantity: "10 Tons",
    date: "19 May 2024",
    status: "Active",
    reference: "RFQ-2024-0565",
    application: "Food & Beverage",
    shipment: "FOB / CIF",
    timeline: "As per buyer schedule",
    expires: "Contact buyer",
    summary:
      "A buyer is sourcing dates in various types for the food and beverage market. Registered suppliers can review the full quality and delivery requirements.",
  },
  {
    id: 4,
    country: "Saudi Arabia",
    countryName: "Saudi Arabia",
    flag: saudiFlag,
    title: "Basmati Rice",
    category: "Food & Beverages",
    quantity: "25 Tons",
    date: "18 May 2024",
    status: "Active",
    reference: "RFQ-2024-0564",
    application: "Retail & Food Service",
    shipment: "FOB / CIF",
    timeline: "As per buyer schedule",
    expires: "Contact buyer",
    summary:
      "A buyer is looking for basmati rice suppliers. Registered suppliers can review the detailed specifications and commercial requirements.",
  },
  {
    id: 5,
    country: "Indonesia",
    countryName: "Indonesia",
    flag: indonesiaFlag,
    title: "Palm Oil",
    category: "Agro & Food",
    quantity: "30 Tons",
    date: "18 May 2024",
    status: "Active",
    reference: "RFQ-2024-0563",
    application: "Food & Industrial Use",
    shipment: "FOB / CIF",
    timeline: "As per buyer schedule",
    expires: "Contact buyer",
    summary:
      "A buyer is sourcing palm oil for an upcoming requirement. Registered suppliers can review the complete specifications and delivery requirements.",
  },
  {
    id: 6,
    country: "UK",
    countryName: "United Kingdom",
    flag: ukFlag,
    title: "Packaging Materials",
    category: "Packaging",
    quantity: "15,000 Units",
    date: "17 May 2024",
    status: "Active",
    reference: "RFQ-2024-0562",
    application: "Commercial Packaging",
    shipment: "FOB / CIF",
    timeline: "As per buyer schedule",
    expires: "Contact buyer",
    summary:
      "A buyer is seeking packaging materials for commercial use. Registered suppliers can review the detailed specifications and delivery requirements.",
  },
];
