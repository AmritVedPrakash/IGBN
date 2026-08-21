import usaFlag from "../assets/flag/usa.png";
import ukFlag from "../assets/flag/uk.png";
import germanyFlag from "../assets/flag/germany.png";
import uaeFlag from "../assets/flag/uae.png";
import indiaFlag from "../assets/flag/india.png";
import chinaFlag from "../assets/flag/china.png";
import australiaFlag from "../assets/flag/australia.png";
export const countriesData = {
  usa: {
    id: "usa",
    name: "USA",
    flag: usaFlag,

    position: {
      top: "20%",
      left: "24%",
    },

    exportValue: "$78.5B",
    exportGrowth: "+11.2%",
    importValue: "$42.4B",
    importGrowth: "+7.8%",
    tradeBalance: "+$36.1B",

    products: [
      "Pharmaceuticals",
      "Engineering Goods",
      "Textiles",
      "Electronics",
    ],

    exportDestinations: [
      { country: "Canada", value: 18.4, color: "#6FAF72" },
      { country: "Mexico", value: 14.8, color: "#D69A2B" },
      { country: "UK", value: 8.2, color: "#E15D4E" },
      { country: "Germany", value: 7.1, color: "#9B5CD6" },
      { country: "Japan", value: 5.4, color: "#56A8A9" },
      { country: "Others", value: 46.1, color: "#5A6370" },
    ],

    totalExport: "$620B",
  },

  uk: {
    id: "uk",
    name: "United Kingdom",
    flag: ukFlag,

    position: {
      top: "13%",
      left: "66%",
    },

    exportValue: "$12.9B",
    exportGrowth: "+6.9%",
    importValue: "$9.7B",
    importGrowth: "+4.8%",
    tradeBalance: "+$3.2B",

    products: [
      "Textiles",
      "Pharmaceuticals",
      "Machinery",
      "Jewellery",
    ],

    exportDestinations: [
      { country: "USA", value: 19.2, color: "#6FAF72" },
      { country: "Germany", value: 12.6, color: "#D69A2B" },
      { country: "France", value: 8.5, color: "#E15D4E" },
      { country: "Netherlands", value: 6.8, color: "#9B5CD6" },
      { country: "India", value: 5.4, color: "#56A8A9" },
      { country: "Others", value: 47.5, color: "#5A6370" },
    ],

    totalExport: "$510B",
  },

  germany: {
    id: "germany",
    name: "Germany",
    flag: germanyFlag,

    position: {
      top: "31%",
      left: "44%",
    },

    exportValue: "$14.2B",
    exportGrowth: "+8.4%",
    importValue: "$16.8B",
    importGrowth: "+6.1%",
    tradeBalance: "-$2.6B",

    products: [
      "Pharmaceuticals",
      "Iron & Steel",
      "Auto Parts",
      "Machinery",
    ],

    exportDestinations: [
      { country: "USA", value: 17.6, color: "#6FAF72" },
      { country: "UAE", value: 13.1, color: "#D69A2B" },
      { country: "Bangladesh", value: 6.1, color: "#E15D4E" },
      { country: "China", value: 5.7, color: "#9B5CD6" },
      { country: "Singapore", value: 4.9, color: "#56A8A9" },
      { country: "Others", value: 52.6, color: "#5A6370" },
    ],

    totalExport: "$451B",
  },

  uae: {
    id: "uae",
    name: "UAE",
    flag: uaeFlag,

    position: {
      top: "39%",
      left: "55%",
    },

    exportValue: "$31.6B",
    exportGrowth: "+9.7%",
    importValue: "$18.9B",
    importGrowth: "+5.2%",
    tradeBalance: "+$12.7B",

    products: [
      "Jewellery",
      "Petroleum Products",
      "Food Products",
      "Machinery",
    ],

    exportDestinations: [
      { country: "India", value: 18.5, color: "#6FAF72" },
      { country: "Saudi Arabia", value: 14.3, color: "#D69A2B" },
      { country: "USA", value: 10.8, color: "#E15D4E" },
      { country: "China", value: 8.6, color: "#9B5CD6" },
      { country: "Germany", value: 6.4, color: "#56A8A9" },
      { country: "Others", value: 41.4, color: "#5A6370" },
    ],

    totalExport: "$295B",
  },

  china: {
    id: "china",
    name: "China",
    flag: chinaFlag,

    position: {
      top: "43%",
      left: "76%",
    },

    exportValue: "$16.4B",
    exportGrowth: "+5.8%",
    importValue: "$101.7B",
    importGrowth: "+8.2%",
    tradeBalance: "-$85.3B",

    products: [
      "Chemicals",
      "Iron Ore",
      "Cotton",
      "Engineering Goods",
    ],

    exportDestinations: [
      { country: "USA", value: 16.2, color: "#6FAF72" },
      { country: "Japan", value: 11.6, color: "#D69A2B" },
      { country: "South Korea", value: 8.4, color: "#E15D4E" },
      { country: "India", value: 7.9, color: "#9B5CD6" },
      { country: "Germany", value: 5.6, color: "#56A8A9" },
      { country: "Others", value: 50.3, color: "#5A6370" },
    ],

    totalExport: "$3.3T",
  },

  india: {
    id: "india",
    name: "India",
    flag: indiaFlag,

    position: {
      top: "57%",
      left: "54%",
    },

    exportValue: "$451B",
    exportGrowth: "+7.3%",
    importValue: "$678B",
    importGrowth: "+5.8%",
    tradeBalance: "-$227B",

    products: [
      "Engineering Goods",
      "Pharmaceuticals",
      "Textiles",
      "Chemicals",
    ],

    exportDestinations: [
      { country: "USA", value: 17.6, color: "#6FAF72" },
      { country: "UAE", value: 13.1, color: "#D69A2B" },
      { country: "Bangladesh", value: 6.1, color: "#E15D4E" },
      { country: "China", value: 5.7, color: "#9B5CD6" },
      { country: "Singapore", value: 4.9, color: "#56A8A9" },
      { country: "Others", value: 52.6, color: "#5A6370" },
    ],

    totalExport: "$451B",
  },

  australia: {
    id: "australia",
    name: "Australia",
    flag: australiaFlag,

    position: {
      top: "70%",
      left: "64%",
    },

    exportValue: "$8.9B",
    exportGrowth: "+7.1%",
    importValue: "$17.3B",
    importGrowth: "+5.4%",
    tradeBalance: "-$8.4B",

    products: [
      "Pharmaceuticals",
      "Textiles",
      "Machinery",
      "Auto Components",
    ],

    exportDestinations: [
      { country: "China", value: 21.5, color: "#6FAF72" },
      { country: "Japan", value: 12.4, color: "#D69A2B" },
      { country: "USA", value: 8.7, color: "#E15D4E" },
      { country: "India", value: 7.1, color: "#9B5CD6" },
      { country: "Singapore", value: 5.2, color: "#56A8A9" },
      { country: "Others", value: 45.1, color: "#5A6370" },
    ],

    totalExport: "$410B",
  },
};