import brentImage from "../assets/tradeintelligence/commodity/brent.png";
import goldImage from "../assets/tradeintelligence/commodity/gold.png";
import copperImage from "../assets/tradeintelligence/commodity/copper.png";
import wheatImage from "../assets/tradeintelligence/commodity/wheat.png";
import coffeeImage from "../assets/tradeintelligence/commodity/coffee.png";
import ureaImage from "../assets/tradeintelligence/commodity/urea.png";

// If you don't have these images yet,
// temporarily remove the image imports and use image: null.

export const commodityDetails = {
  brent: {
    id: "brent",
    name: "Brent Crude Oil",
    shortName: "BRENT",
    category: "Energy",
    image: brentImage,

    unit: "USD / BBL",
    price: "91.90",
    change: "-2.64%",
    changeValue: "-2.49",
    direction: "down",

    updated: "31 Aug 2026, 10:30 AM IST",

    description:
      "Brent crude oil is a major global benchmark used for pricing international crude oil. Its movements are closely influenced by global demand, supply conditions, OPEC+ policy and geopolitical developments.",

    overview: {
      title: "LIVE BRENT CRUDE OIL",
      value: "91.90",
      unit: "USD / BBL",
      change: "-2.64%",
      changeText: "-2.49",
      previousClose: "94.39",
      open: "93.72",
      dayRange: "90.85 – 94.12",
      historical: [
        88, 90, 87, 92, 89, 94, 91, 96, 93, 98, 95, 100, 97, 102, 99, 96, 94,
        97, 92, 95, 91, 94, 90, 92,
      ],
    },

    keyStats: [
      ["Contract", "Oct 2026"],
      ["Market", "ICE Futures Europe"],
      ["Unit", "US Dollar per Barrel"],
      ["Tick Size", "0.01"],
      ["Tick Value", "10.00"],
      ["Open Interest", "1.82M"],
      ["52 Week High", "98.45"],
      ["52 Week Low", "71.22"],
    ],

    performance: [
      {
        label: "1 Day",
        value: "-2.64%",
        direction: "down",
        data: [60, 63, 61, 64, 59, 57, 55, 52, 54, 50],
      },
      {
        label: "7 Days",
        value: "-1.82%",
        direction: "down",
        data: [60, 64, 61, 63, 59, 57, 55, 53, 51, 50],
      },
      {
        label: "30 Days",
        value: "+3.42%",
        direction: "up",
        data: [40, 42, 45, 43, 47, 50, 49, 54, 58, 61],
      },
      {
        label: "3 Months",
        value: "+7.18%",
        direction: "up",
        data: [35, 38, 42, 40, 46, 48, 53, 55, 59, 64],
      },
      {
        label: "1 Year",
        value: "+11.65%",
        direction: "up",
        data: [30, 34, 38, 40, 45, 49, 53, 57, 62, 68],
      },
      {
        label: "YTD 2026",
        value: "+8.92%",
        direction: "up",
        data: [35, 39, 42, 46, 45, 50, 55, 58, 62, 66],
      },
    ],

    priceHistory: {
      labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025 YTD"],
      values: [64.16, 41.96, 70.68, 101.32, 82.49, 80.56, 91.9],
    },

    supplyDemand: [
      ["Production (Mn BBL)", "28.4", "29.1", "+2.46%"],
      ["Consumption (Mn BBL)", "29.7", "30.4", "+2.36%"],
      ["Exports (Mn BBL)", "19.2", "20.1", "+4.68%"],
      ["Ending Stocks", "1,245", "1,198", "-3.77%"],
      ["Stocks-to-Use Ratio", "4.18%", "3.94%", "-0.24pp"],
    ],

    drivers: [
      {
        title: "OPEC+ Production Policy",
        text: "Production decisions continue to influence global crude supply and benchmark prices.",
        direction: "up",
      },
      {
        title: "Global Demand",
        text: "Stronger transport and industrial activity is supporting medium-term oil demand.",
        direction: "up",
      },
      {
        title: "Geopolitical Risk",
        text: "Regional tensions may create short-term volatility across crude markets.",
        direction: "down",
      },
    ],

    news: [
      {
        category: "ENERGY",
        title: "Global Oil Demand Outlook Remains Firm",
        time: "1h ago",
      },
      {
        category: "MARKET",
        title: "Crude Prices React to Supply Expectations",
        time: "3h ago",
      },
      {
        category: "TRADE",
        title: "Energy Markets Watch OPEC+ Policy Signals",
        time: "5h ago",
      },
    ],
  },

  gold: {
    id: "gold",
    name: "Gold",
    shortName: "GOLD",
    category: "Precious Metals",
    image: goldImage,
    unit: "USD / OZ",
    price: "2,387.45",
    change: "+0.63%",
    changeValue: "+14.92",
    direction: "up",
    updated: "31 Aug 2026, 10:30 AM IST",

    description:
      "Gold is a globally traded precious metal and an important store of value. Prices are influenced by interest rates, inflation expectations, currency movements and global risk sentiment.",

    overview: {
      title: "LIVE GOLD PRICE",
      value: "2,387.45",
      unit: "USD / OZ",
      change: "+0.63%",
      changeText: "+14.92",
      previousClose: "2,372.53",
      open: "2,376.20",
      dayRange: "2,361.10 – 2,394.80",
      historical: [
        55, 57, 56, 60, 59, 64, 63, 68, 67, 71, 70, 74, 73, 78, 77, 82, 80, 84,
        83, 87, 86, 90, 88, 94,
      ],
    },

    keyStats: [
      ["Contract", "Dec 2026"],
      ["Market", "COMEX"],
      ["Unit", "US Dollar per Ounce"],
      ["Tick Size", "0.10"],
      ["Tick Value", "10.00"],
      ["Open Interest", "482K"],
      ["52 Week High", "2,490.30"],
      ["52 Week Low", "1,982.10"],
    ],

    performance: [
      {
        label: "1 Day",
        value: "+0.63%",
        direction: "up",
        data: [50, 52, 51, 55, 54, 58, 57, 61, 60, 65],
      },
      {
        label: "7 Days",
        value: "+2.15%",
        direction: "up",
        data: [40, 43, 42, 47, 49, 51, 55, 58, 61, 64],
      },
      {
        label: "30 Days",
        value: "+4.92%",
        direction: "up",
        data: [38, 40, 44, 43, 48, 52, 55, 58, 62, 68],
      },
      {
        label: "3 Months",
        value: "+8.31%",
        direction: "up",
        data: [35, 39, 42, 46, 50, 53, 57, 61, 66, 71],
      },
      {
        label: "1 Year",
        value: "+24.60%",
        direction: "up",
        data: [30, 35, 39, 45, 49, 54, 60, 65, 71, 78],
      },
      {
        label: "YTD 2026",
        value: "+18.44%",
        direction: "up",
        data: [34, 38, 43, 47, 52, 56, 61, 65, 70, 76],
      },
    ],

    priceHistory: {
      labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025 YTD"],
      values: [1392, 1769, 1799, 1800, 1940, 2380, 2387],
    },

    supplyDemand: [
      ["Production (Tonnes)", "3,560", "3,610", "+1.40%"],
      ["Consumption (Tonnes)", "4,820", "4,940", "+2.49%"],
      ["Exports (Tonnes)", "2,140", "2,180", "+1.87%"],
      ["Ending Stocks", "1,820", "1,760", "-3.29%"],
      ["Stocks-to-Use Ratio", "37.76%", "35.63%", "-2.13pp"],
    ],

    drivers: [
      {
        title: "Central Bank Demand",
        text: "Central bank purchases continue to provide structural support for gold demand.",
        direction: "up",
      },
      {
        title: "Interest Rate Expectations",
        text: "Changing rate expectations are influencing the opportunity cost of holding gold.",
        direction: "up",
      },
      {
        title: "US Dollar Movement",
        text: "Currency movements can create short-term pressure or support for dollar-priced gold.",
        direction: "down",
      },
    ],

    news: [
      {
        category: "METALS",
        title: "Gold Holds Firm as Global Demand Strengthens",
        time: "1h ago",
      },
      {
        category: "MARKET",
        title: "Investors Monitor Interest Rate Outlook",
        time: "3h ago",
      },
      {
        category: "TRADE",
        title: "Central Bank Buying Supports Precious Metals",
        time: "6h ago",
      },
    ],
  },
};

// Fallback: use Brent data for commodities
// that have not yet received individual API-ready dummy data.

export const getCommodityDetails = (id) => {
  return commodityDetails[id] || commodityDetails.brent;
};
