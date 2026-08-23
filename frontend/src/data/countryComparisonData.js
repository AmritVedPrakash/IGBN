import indiaFlag from "../assets/flag/india.png";
import usaFlag from "../assets/flag/usa.png";
import germanyFlag from "../assets/flag/germany.png";
import uaeFlag from "../assets/flag/uae.png";
import ukFlag from "../assets/flag/uk.png";
import chinaFlag from "../assets/flag/china.png";
import australiaFlag from "../assets/flag/australia.png";

/* =========================================================
   COUNTRY INFORMATION
========================================================= */

export const countries = {
  india: {
    id: "india",
    name: "India",
    flag: indiaFlag,
  },

  usa: {
    id: "usa",
    name: "USA",
    flag: usaFlag,
  },

  germany: {
    id: "germany",
    name: "Germany",
    flag: germanyFlag,
  },

  uae: {
    id: "uae",
    name: "UAE",
    flag: uaeFlag,
  },

  uk: {
    id: "uk",
    name: "United Kingdom",
    flag: ukFlag,
  },

  china: {
    id: "china",
    name: "China",
    flag: chinaFlag,
  },

  australia: {
    id: "australia",
    name: "Australia",
    flag: australiaFlag,
  },
};

/* =========================================================
   PRODUCTS
========================================================= */

export const products = [
  "Rice",
  "Textiles",
  "Machinery",
  "Pharmaceuticals",
  "Chemicals",
];

/* =========================================================
   DUMMY COMPARISON DATA

   Later API response can follow this same structure.
========================================================= */

export const comparisonData = {
  Rice: {
    india: {
      globalExportRank: "1st",
      totalExports: "$11.8B",
      totalImports: "$0.12B",
      importGrowth: "+2.8%",
      growthYoY: "+8.6%",
      globalImportRank: "98th",
      trend: [20, 28, 25, 38, 34, 48, 55],
    },

    usa: {
      globalExportRank: "5th",
      totalExports: "$3.1B",
      totalImports: "$1.4B",
      importGrowth: "+6.4%",
      growthYoY: "+4.7%",
      globalImportRank: "8th",
      trend: [22, 26, 31, 29, 39, 43, 48],
    },

    germany: {
      globalExportRank: "31st",
      totalExports: "$0.21B",
      totalImports: "$1.05B",
      importGrowth: "+4.9%",
      growthYoY: "+2.8%",
      globalImportRank: "11th",
      trend: [18, 21, 25, 24, 31, 34, 38],
    },

    uae: {
      globalExportRank: "24th",
      totalExports: "$0.32B",
      totalImports: "$1.8B",
      importGrowth: "+7.7%",
      growthYoY: "+5.4%",
      globalImportRank: "6th",
      trend: [17, 24, 22, 33, 39, 44, 51],
    },

    uk: {
      globalExportRank: "28th",
      totalExports: "$0.25B",
      totalImports: "$1.2B",
      importGrowth: "+3.9%",
      growthYoY: "+3.1%",
      globalImportRank: "10th",
      trend: [20, 23, 26, 29, 28, 35, 39],
    },

    china: {
      globalExportRank: "9th",
      totalExports: "$2.4B",
      totalImports: "$2.8B",
      importGrowth: "+5.5%",
      growthYoY: "+6.2%",
      globalImportRank: "3rd",
      trend: [21, 30, 28, 40, 43, 53, 59],
    },

    australia: {
      globalExportRank: "14th",
      totalExports: "$1.4B",
      totalImports: "$0.72B",
      importGrowth: "+3.7%",
      growthYoY: "+4.4%",
      globalImportRank: "19th",
      trend: [19, 25, 28, 30, 37, 39, 45],
    },
  },

  Textiles: {
    india: {
      globalExportRank: "6th",
      totalExports: "$36.7B",
      totalImports: "$8.9B",
      importGrowth: "+6.1%",
      growthYoY: "+7.8%",
      globalImportRank: "18th",
      trend: [22, 31, 29, 41, 47, 53, 61],
    },

    usa: {
      globalExportRank: "18th",
      totalExports: "$12.5B",
      totalImports: "$128B",
      importGrowth: "+5.8%",
      growthYoY: "+3.4%",
      globalImportRank: "1st",
      trend: [20, 25, 32, 30, 39, 43, 48],
    },

    germany: {
      globalExportRank: "4th",
      totalExports: "$40.1B",
      totalImports: "$56.4B",
      importGrowth: "+4.6%",
      growthYoY: "+4.2%",
      globalImportRank: "4th",
      trend: [24, 28, 35, 39, 43, 50, 55],
    },

    uae: {
      globalExportRank: "25th",
      totalExports: "$7.2B",
      totalImports: "$14.8B",
      importGrowth: "+8.4%",
      growthYoY: "+6.7%",
      globalImportRank: "17th",
      trend: [18, 24, 30, 38, 43, 51, 58],
    },

    uk: {
      globalExportRank: "12th",
      totalExports: "$18.1B",
      totalImports: "$33.6B",
      importGrowth: "+3.8%",
      growthYoY: "+3.9%",
      globalImportRank: "7th",
      trend: [20, 26, 31, 35, 40, 44, 49],
    },

    china: {
      globalExportRank: "1st",
      totalExports: "$293B",
      totalImports: "$31B",
      importGrowth: "+4.2%",
      growthYoY: "+5.1%",
      globalImportRank: "8th",
      trend: [29, 35, 41, 47, 52, 58, 64],
    },

    australia: {
      globalExportRank: "23rd",
      totalExports: "$7.9B",
      totalImports: "$15.5B",
      importGrowth: "+4.7%",
      growthYoY: "+4.1%",
      globalImportRank: "15th",
      trend: [18, 22, 29, 31, 38, 42, 47],
    },
  },

  Machinery: {
    india: {
      globalExportRank: "14th",
      totalExports: "$52B",
      totalImports: "$82B",
      importGrowth: "+7.2%",
      growthYoY: "+9.1%",
      globalImportRank: "9th",
      trend: [22, 29, 36, 40, 49, 57, 66],
    },

    usa: {
      globalExportRank: "2nd",
      totalExports: "$612B",
      totalImports: "$905B",
      importGrowth: "+5.9%",
      growthYoY: "+4.8%",
      globalImportRank: "1st",
      trend: [27, 31, 38, 42, 49, 54, 61],
    },

    germany: {
      globalExportRank: "3rd",
      totalExports: "$570B",
      totalImports: "$389B",
      importGrowth: "+3.9%",
      growthYoY: "+4.5%",
      globalImportRank: "4th",
      trend: [26, 34, 40, 44, 50, 56, 62],
    },

    uae: {
      globalExportRank: "27th",
      totalExports: "$21B",
      totalImports: "$78B",
      importGrowth: "+8.2%",
      growthYoY: "+6.1%",
      globalImportRank: "18th",
      trend: [18, 25, 29, 38, 44, 51, 59],
    },

    uk: {
      globalExportRank: "10th",
      totalExports: "$91B",
      totalImports: "$143B",
      importGrowth: "+3.6%",
      growthYoY: "+3.7%",
      globalImportRank: "8th",
      trend: [22, 27, 33, 37, 41, 47, 51],
    },

    china: {
      globalExportRank: "1st",
      totalExports: "$1.1T",
      totalImports: "$840B",
      importGrowth: "+5.7%",
      growthYoY: "+6.5%",
      globalImportRank: "2nd",
      trend: [30, 36, 44, 49, 55, 62, 69],
    },

    australia: {
      globalExportRank: "29th",
      totalExports: "$18B",
      totalImports: "$69B",
      importGrowth: "+4.8%",
      growthYoY: "+4.2%",
      globalImportRank: "20th",
      trend: [18, 24, 27, 32, 38, 43, 49],
    },
  },

  Pharmaceuticals: {
    india: {
      globalExportRank: "3rd",
      totalExports: "$27.9B",
      totalImports: "$8.7B",
      importGrowth: "+5.2%",
      growthYoY: "+9.8%",
      globalImportRank: "21st",
      trend: [22, 28, 35, 43, 49, 58, 67],
    },

    usa: {
      globalExportRank: "4th",
      totalExports: "$89B",
      totalImports: "$177B",
      importGrowth: "+6.8%",
      growthYoY: "+5.6%",
      globalImportRank: "1st",
      trend: [25, 31, 38, 43, 49, 56, 62],
    },

    germany: {
      globalExportRank: "1st",
      totalExports: "$125B",
      totalImports: "$84B",
      importGrowth: "+4.3%",
      growthYoY: "+5.1%",
      globalImportRank: "3rd",
      trend: [29, 34, 41, 46, 53, 59, 65],
    },

    uae: {
      globalExportRank: "34th",
      totalExports: "$4.2B",
      totalImports: "$13.5B",
      importGrowth: "+7.8%",
      growthYoY: "+6.4%",
      globalImportRank: "22nd",
      trend: [17, 24, 30, 37, 43, 50, 58],
    },

    uk: {
      globalExportRank: "7th",
      totalExports: "$44B",
      totalImports: "$58B",
      importGrowth: "+3.7%",
      growthYoY: "+4.8%",
      globalImportRank: "6th",
      trend: [22, 27, 33, 38, 45, 49, 55],
    },

    china: {
      globalExportRank: "6th",
      totalExports: "$61B",
      totalImports: "$50B",
      importGrowth: "+5.5%",
      growthYoY: "+6.7%",
      globalImportRank: "7th",
      trend: [24, 30, 37, 42, 49, 56, 63],
    },

    australia: {
      globalExportRank: "25th",
      totalExports: "$7B",
      totalImports: "$15B",
      importGrowth: "+4.9%",
      growthYoY: "+4.5%",
      globalImportRank: "19th",
      trend: [18, 23, 28, 34, 38, 43, 49],
    },
  },

  Chemicals: {
    india: {
      globalExportRank: "9th",
      totalExports: "$48B",
      totalImports: "$61B",
      importGrowth: "+6.2%",
      growthYoY: "+7.4%",
      globalImportRank: "11th",
      trend: [21, 28, 34, 40, 46, 54, 61],
    },

    usa: {
      globalExportRank: "3rd",
      totalExports: "$233B",
      totalImports: "$307B",
      importGrowth: "+4.8%",
      growthYoY: "+4.2%",
      globalImportRank: "2nd",
      trend: [25, 31, 37, 43, 48, 54, 59],
    },

    germany: {
      globalExportRank: "2nd",
      totalExports: "$268B",
      totalImports: "$219B",
      importGrowth: "+3.6%",
      growthYoY: "+4.7%",
      globalImportRank: "4th",
      trend: [27, 34, 39, 45, 51, 56, 62],
    },

    uae: {
      globalExportRank: "22nd",
      totalExports: "$31B",
      totalImports: "$39B",
      importGrowth: "+7.1%",
      growthYoY: "+5.9%",
      globalImportRank: "23rd",
      trend: [19, 24, 31, 37, 44, 51, 57],
    },

    uk: {
      globalExportRank: "11th",
      totalExports: "$72B",
      totalImports: "$91B",
      importGrowth: "+3.5%",
      growthYoY: "+3.9%",
      globalImportRank: "9th",
      trend: [21, 27, 32, 37, 42, 47, 52],
    },

    china: {
      globalExportRank: "1st",
      totalExports: "$510B",
      totalImports: "$393B",
      importGrowth: "+6.1%",
      growthYoY: "+6.8%",
      globalImportRank: "1st",
      trend: [30, 37, 43, 49, 56, 63, 70],
    },

    australia: {
      globalExportRank: "27th",
      totalExports: "$21B",
      totalImports: "$36B",
      importGrowth: "+4.4%",
      growthYoY: "+4.1%",
      globalImportRank: "24th",
      trend: [18, 23, 28, 33, 38, 43, 48],
    },
  },
};
