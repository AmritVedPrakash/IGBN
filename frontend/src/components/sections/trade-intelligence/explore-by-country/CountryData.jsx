import indiaFlag from "../../../../assets/flag/india.png";
import usaFlag from "../../../../assets/flag/usa.png";
import ukFlag from "../../../../assets/flag/uk.png";
import germanyFlag from "../../../../assets/flag/germany.png";
import uaeFlag from "../../../../assets/flag/uae.png";
import chinaFlag from "../../../../assets/flag/china.png";
import japanFlag from "../../../../assets/flag/japan.png";
import australiaFlag from "../../../../assets/flag/australia.png";

export const countries = [
  {
    code: "IN",
    name: "India",
    flag: indiaFlag,
    tradeNews: 12,
    policyUpdates: 8,
    shipping: 5,
    seasonal: 3,
    news: 15,
  },
  {
    code: "US",
    name: "United States",
    flag: usaFlag,
    tradeNews: 18,
    policyUpdates: 9,
    shipping: 6,
    seasonal: 2,
    news: 20,
  },
  {
    code: "GB",
    name: "United Kingdom",
    flag: ukFlag,
    tradeNews: 10,
    policyUpdates: 7,
    shipping: 4,
    seasonal: 3,
    news: 12,
  },
  {
    code: "DE",
    name: "Germany",
    flag: germanyFlag,
    tradeNews: 14,
    policyUpdates: 6,
    shipping: 5,
    seasonal: 2,
    news: 13,
  },
  {
    code: "AE",
    name: "UAE",
    flag: uaeFlag,
    tradeNews: 9,
    policyUpdates: 5,
    shipping: 3,
    seasonal: 2,
    news: 15,
  },
  {
    code: "CN",
    name: "China",
    flag: chinaFlag,
    tradeNews: 15,
    policyUpdates: 10,
    shipping: 7,
    seasonal: 3,
    news: 18,
  },
  {
    code: "JP",
    name: "Japan",
    flag: japanFlag,
    tradeNews: 11,
    policyUpdates: 6,
    shipping: 4,
    seasonal: 3,
    news: 12,
  },
  {
    code: "AU",
    name: "Australia",
    flag: australiaFlag,
    tradeNews: 8,
    policyUpdates: 4,
    shipping: 3,
    seasonal: 2,
    news: 10,
  },
];

export const countryDetails = {
  IN: {
    code: "IN",
    name: "India",
    flag: indiaFlag,

    description: "Real-time trade, economy, policy, news & AI-powered insights",

    updated: "31 Aug 2026, 10:30 AM IST",

    metrics: [
      {
        label: "GDP (Nominal)",
        value: "$3.91 Trillion",
        sub: "2026",
        change: "+6.5% YoY",
        direction: "up",
      },
      {
        label: "Imports",
        value: "$720 Billion",
        sub: "2025",
        change: "+4.6% YoY",
        direction: "up",
      },
      {
        label: "Exports",
        value: "$825 Billion",
        sub: "2025",
        change: "+5.3% YoY",
        direction: "up",
      },
      {
        label: "Trade Balance",
        value: "-$105 Billion",
        sub: "2025",
        change: "Deficit",
        direction: "down",
      },
      {
        label: "Inflation (CPI)",
        value: "4.2%",
        sub: "Aug 2026",
        change: "-0.3% MoM",
        direction: "up",
      },
      {
        label: "Unemployment",
        value: "7.1%",
        sub: "Aug 2026",
        change: "-0.2% MoM",
        direction: "up",
      },
      {
        label: "USD / INR",
        value: "84.25",
        sub: "Current",
        change: "+0.43%",
        direction: "up",
      },
      {
        label: "Interest Rate",
        value: "6.50%",
        sub: "2026",
        change: "No Change",
        direction: "neutral",
      },
    ],

    economy: {
      labels: ["2021", "2022", "2023", "2024", "2025 (F)", "2026 (F)"],
      values: [3.2, 6.8, 7.6, 6.5, 6.7, 6.9],
    },

    imports: [
      ["China", "$118B"],
      ["UAE", "$65B"],
      ["USA", "$52B"],
      ["Saudi Arabia", "$38B"],
      ["Russia", "$31B"],
      ["Iraq", "$29B"],
      ["Indonesia", "$26B"],
      ["South Korea", "$19B"],
      ["Singapore", "$17B"],
      ["Germany", "$15B"],
    ],

    exports: [
      ["USA", "$82B"],
      ["UAE", "$41B"],
      ["Netherlands", "$25B"],
      ["UK", "$21B"],
      ["Singapore", "$19B"],
      ["Bangladesh", "$17B"],
      ["Germany", "$15B"],
      ["Saudi Arabia", "$14B"],
      ["Australia", "$12B"],
      ["Japan", "$11B"],
    ],

    aiImpact: [
      {
        country: "USA",
        impact: "High",
        description: "Strong demand for pharmaceuticals and technology",
      },
      {
        country: "UAE",
        impact: "High",
        description: "Growing demand for food and consumer products",
      },
      {
        country: "Europe",
        impact: "Medium",
        description: "Rising demand for engineering and software services",
      },
      {
        country: "Africa",
        impact: "Medium",
        description: "Infrastructure and pharmaceutical opportunities",
      },
      {
        country: "Global",
        impact: "Medium",
        description: "Diversification creating new export opportunities",
      },
    ],

    news: [
      {
        category: "TRADE",
        title: "India Expands Export Opportunities Across Emerging Markets",
        description:
          "New trade initiatives are creating opportunities for Indian exporters.",
        time: "1h ago",
      },
      {
        category: "ECONOMY",
        title: "Manufacturing Activity Shows Strong Growth",
        description:
          "Industrial activity continues to support India's export outlook.",
        time: "3h ago",
      },
      {
        category: "POLICY",
        title: "New Trade Policy Measures Announced",
        description:
          "Government announces measures aimed at improving global trade competitiveness.",
        time: "5h ago",
      },
      {
        category: "ENERGY",
        title: "Energy Imports Remain a Key Trade Driver",
        description:
          "Global energy prices continue to influence India's trade balance.",
        time: "8h ago",
      },
    ],

    geopolitical: [
      {
        title: "Russia–Ukraine War",
        description:
          "Energy and commodity disruptions continue to affect global trade.",
        impact: "Moderate",
      },
      {
        title: "Middle East Instability",
        description:
          "Shipping and energy risks remain important for Indian importers.",
        impact: "Moderate",
      },
      {
        title: "India–China Trade Relations",
        description:
          "Changing supply chains are creating both risks and opportunities.",
        impact: "Moderate",
      },
      {
        title: "Global Shipping Disruptions",
        description:
          "Longer routes may increase freight costs and delivery timelines.",
        impact: "Low",
      },
    ],

    globalEvents: [
      {
        title: "Oil Prices Decline – What's the Impact?",
        description: "Lower crude prices may reduce India's import costs.",
        impact: "Positive",
      },
      {
        title: "Stronger U.S. Dollar – What's the Impact?",
        description:
          "Currency movements may affect import costs and export competitiveness.",
        impact: "Mixed",
      },
    ],
  },

  US: {
    code: "US",
    name: "United States",
    flag: usaFlag,
    description: "Real-time trade, economy, policy, news & AI-powered insights",
    updated: "31 Aug 2026, 10:30 AM IST",

    metrics: [
      {
        label: "GDP (Nominal)",
        value: "$30.5 Trillion",
        sub: "2026",
        change: "+2.4% YoY",
        direction: "up",
      },
      {
        label: "Imports",
        value: "$3.8 Trillion",
        sub: "2025",
        change: "+3.9% YoY",
        direction: "up",
      },
      {
        label: "Exports",
        value: "$2.9 Trillion",
        sub: "2025",
        change: "+3.2% YoY",
        direction: "up",
      },
      {
        label: "Trade Balance",
        value: "-$900B",
        sub: "2025",
        change: "Deficit",
        direction: "down",
      },
      {
        label: "Inflation (CPI)",
        value: "3.1%",
        sub: "Aug 2026",
        change: "-0.2% MoM",
        direction: "up",
      },
      {
        label: "Unemployment",
        value: "4.0%",
        sub: "Aug 2026",
        change: "-0.1% MoM",
        direction: "up",
      },
      {
        label: "USD Index",
        value: "104.25",
        sub: "Current",
        change: "+0.43%",
        direction: "up",
      },
      {
        label: "Interest Rate",
        value: "5.33%",
        sub: "2026",
        change: "No Change",
        direction: "neutral",
      },
    ],

    economy: {
      labels: ["2021", "2022", "2023", "2024", "2025 (F)", "2026 (F)"],
      values: [5.9, 2.1, 2.5, 2.9, 2.6, 2.8],
    },

    imports: [
      ["Mexico", "$505B"],
      ["China", "$448B"],
      ["Canada", "$413B"],
      ["Germany", "$208B"],
      ["Japan", "$166B"],
      ["South Korea", "$121B"],
      ["Vietnam", "$119B"],
      ["Taiwan", "$90B"],
      ["Ireland", "$89B"],
      ["India", "$87B"],
    ],

    exports: [
      ["Canada", "$353B"],
      ["Mexico", "$323B"],
      ["China", "$199B"],
      ["Netherlands", "$118B"],
      ["Germany", "$103B"],
      ["Japan", "$79B"],
      ["UK", "$77B"],
      ["South Korea", "$69B"],
      ["Brazil", "$49B"],
      ["Australia", "$45B"],
    ],

    aiImpact: [
      {
        country: "India",
        impact: "High",
        description: "Strong demand for components and pharmaceuticals",
      },
      {
        country: "China",
        impact: "High",
        description: "Boost to export electronics and finished goods",
      },
      {
        country: "Vietnam",
        impact: "Medium",
        description: "Manufacturing orders and assembly opportunities",
      },
      {
        country: "Europe",
        impact: "Medium",
        description: "Demand for premium components and software",
      },
      {
        country: "Global",
        impact: "Medium",
        description: "Possible increase in shipping volumes",
      },
    ],

    news: [
      {
        category: "TECHNOLOGY",
        title: "Apple Expands New Product Manufacturing",
        description:
          "New technology demand is expected to influence global supply chains.",
        time: "1h ago",
      },
      {
        category: "ENERGY",
        title: "Crude Oil Prices Remain Volatile",
        description: "Energy markets continue to influence U.S. import costs.",
        time: "2h ago",
      },
      {
        category: "AUTOMOTIVE",
        title: "EV Manufacturing Investment Expands",
        description:
          "New battery and EV investments support industrial activity.",
        time: "4h ago",
      },
      {
        category: "RETAIL",
        title: "Retail Demand Shows Positive Momentum",
        description: "Consumer demand remains an important driver for imports.",
        time: "5h ago",
      },
    ],

    geopolitical: [
      {
        title: "Russia–Ukraine War",
        description:
          "Energy disruptions continue to affect European trade flows.",
        impact: "Positive",
      },
      {
        title: "Israel–Hamas Conflict",
        description:
          "Red Sea shipping disruptions have increased freight costs.",
        impact: "Moderate",
      },
      {
        title: "U.S.–China Trade Tensions",
        description:
          "Tariffs and export restrictions continue to impact supply chains.",
        impact: "Moderate",
      },
      {
        title: "Middle East Instability",
        description:
          "Oil volatility may influence inflation and economic growth.",
        impact: "Low",
      },
    ],

    globalEvents: [
      {
        title: "Oil Prices Decline – What's the Impact?",
        description:
          "Lower oil prices may reduce inflation and manufacturing costs.",
        impact: "Positive",
      },
      {
        title: "Stronger U.S. Dollar – What's the Impact?",
        description:
          "U.S. exports may become more expensive for global buyers.",
        impact: "Mixed",
      },
    ],
  },
};
