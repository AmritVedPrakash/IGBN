const stateData = {
  // =========================================================
  // CALIFORNIA
  // =========================================================

  CA: {
    code: "CA",
    name: "California",

    country: "United States",
    countryCode: "US",
    countryIso3: "USA",

    flag: "/assets/flag/usa.png",

    region: "West",

    topProducts: [
      "Almonds",
      "Pistachios",
      "Grapes",
      "Walnuts",
      "Citrus",
    ],

    selectedProduct: "Almonds",

    impact: "Moderate",

    weather: {
      temperature: {
        value: "Above-normal heat",
        status: "Yes",
      },

      rainfall: {
        value: "Below-normal / Dry",
        status: "Dry",
      },

      extremeWeather: {
        value: "Heatwave & Drought",
        status: "Yes",
      },

      cropResponse: {
        value: "Evidence of stress",
        status: "Yes",
      },
    },

    tradeImplication: {
      title: "Trade Implication",

      description:
        "Monitor availability, quality and pricing. Potential impact on yield in some regions.",
    },

    topProductsTable: [
      {
        state: "California",

        product: "Almonds",

        sowing: "Feb – Mar",

        growing: "Feb – Jul",

        harvest: "Aug – Oct",

        ready: "Sep – Dec+",

        impact: "Moderate",
      },

      {
        state: "California",

        product: "Grapes",

        sowing: "Mar – Apr",

        growing: "Apr – Aug",

        harvest: "Aug – Oct",

        ready: "Sep – Dec",

        impact: "Low",
      },

      {
        state: "California",

        product: "Citrus",

        sowing: "Mar – Apr",

        growing: "Apr – Sep",

        harvest: "Oct – Jan",

        ready: "Nov – Feb",

        impact: "Moderate",
      },
    ],

    cropCalendar: {
      flowering: "Feb – Mar",

      development: "Mar – Jul",

      harvest: "Aug – Oct",

      postHarvest: "Aug – Dec",

      readyMarket: "Sep – Dec+",
    },

    seasonProgress: {
      condition: "62%",

      conditionLabel: "Good / Excellent",

      harvestProgress: "7%",

      cropDevelopment: "12%",

      daysSuitable: "5.6 days",
    },

    forecast: {
      temperature: {
        value: "Above normal",

        probability: "High",
      },

      rainfall: {
        value: "Below normal",

        probability: "High",
      },

      extremeWeather: {
        value: "Heat episodes likely",

        probability: "Medium",
      },

      cropOutlook: {
        value: "Potential regional impact",

        probability: "Medium",
      },
    },

    marketReadiness: {
      currentDemand: "Limited",

      packAvailability: "Sep – Dec",

      marketTrend: "Stable",

      priceOutlook: "Slightly Elevated",
    },

    highlights: [
      {
        title:
          "Recent heat conditions may affect crop development.",

        confidence: "Medium",
      },

      {
        title:
          "Export demand remains steady across major markets.",

        confidence: "High",
      },

      {
        title:
          "Water availability remains a key production factor.",

        confidence: "Medium",
      },
    ],

    economicStats: {
      cropValue: "$56.2B",

      exports: "$22.4B",

      agriculturalJobs: "420K+",

      marketScore: "82",
    },
  },

  // =========================================================
  // TEXAS
  // =========================================================

  TX: {
    code: "TX",
    name: "Texas",

    country: "United States",
    countryCode: "US",
    countryIso3: "USA",

    flag: "/assets/flag/usa.png",

    region: "South",

    topProducts: [
      "Cotton",
      "Corn",
      "Sorghum",
      "Wheat",
      "Cattle",
    ],

    selectedProduct: "Cotton",

    impact: "High",

    weather: {
      temperature: {
        value: "Above-normal heat",

        status: "Yes",
      },

      rainfall: {
        value: "Below-normal",

        status: "Dry",
      },

      extremeWeather: {
        value: "Heat & drought risk",

        status: "Yes",
      },

      cropResponse: {
        value: "Production pressure",

        status: "Yes",
      },
    },

    tradeImplication: {
      title: "Trade Implication",

      description:
        "Weather conditions may affect cotton and grain availability and export pricing.",
    },

    topProductsTable: [
      {
        state: "Texas",

        product: "Cotton",

        sowing: "Apr – May",

        growing: "Jun – Aug",

        harvest: "Sep – Dec",

        ready: "Oct – Jan",

        impact: "High",
      },

      {
        state: "Texas",

        product: "Corn",

        sowing: "Mar – Apr",

        growing: "Apr – Aug",

        harvest: "Aug – Oct",

        ready: "Sep – Nov",

        impact: "Moderate",
      },

      {
        state: "Texas",

        product: "Wheat",

        sowing: "Oct – Nov",

        growing: "Nov – Mar",

        harvest: "May – Jun",

        ready: "Jun – Aug",

        impact: "Low",
      },
    ],

    cropCalendar: {
      flowering: "Apr – May",

      development: "Jun – Aug",

      harvest: "Sep – Dec",

      postHarvest: "Oct – Jan",

      readyMarket: "Oct – Jan+",
    },

    seasonProgress: {
      condition: "58%",

      conditionLabel: "Good",

      harvestProgress: "12%",

      cropDevelopment: "18%",

      daysSuitable: "4.8 days",
    },

    forecast: {
      temperature: {
        value: "Above normal",

        probability: "High",
      },

      rainfall: {
        value: "Below normal",

        probability: "Medium",
      },

      extremeWeather: {
        value: "Heat episodes likely",

        probability: "High",
      },

      cropOutlook: {
        value: "Production pressure",

        probability: "Medium",
      },
    },

    marketReadiness: {
      currentDemand: "High",

      packAvailability: "Oct – Jan",

      marketTrend: "Growing",

      priceOutlook: "Elevated",
    },

    highlights: [
      {
        title:
          "Dry conditions are increasing crop monitoring requirements.",

        confidence: "High",
      },

      {
        title:
          "Cotton export demand remains strong.",

        confidence: "High",
      },

      {
        title:
          "Regional rainfall could influence crop yields.",

        confidence: "Medium",
      },
    ],

    economicStats: {
      cropValue: "$38.6B",

      exports: "$14.8B",

      agriculturalJobs: "310K+",

      marketScore: "76",
    },
  },

  // =========================================================
  // IOWA
  // =========================================================

  IA: {
    code: "IA",
    name: "Iowa",

    country: "United States",
    countryCode: "US",
    countryIso3: "USA",

    flag: "/assets/flag/usa.png",

    region: "Midwest",

    topProducts: [
      "Corn",
      "Soybeans",
      "Pork",
      "Eggs",
      "Wheat",
    ],

    selectedProduct: "Corn",

    impact: "Moderate",

    weather: {
      temperature: {
        value: "Near-normal",

        status: "No",
      },

      rainfall: {
        value: "Normal",

        status: "Normal",
      },

      extremeWeather: {
        value: "Storm risk",

        status: "Yes",
      },

      cropResponse: {
        value: "Healthy crop response",

        status: "No",
      },
    },

    tradeImplication: {
      title: "Trade Implication",

      description:
        "Stable production conditions support consistent grain availability and regional exports.",
    },

    topProductsTable: [
      {
        state: "Iowa",

        product: "Corn",

        sowing: "Apr – May",

        growing: "May – Aug",

        harvest: "Sep – Oct",

        ready: "Oct – Dec",

        impact: "Moderate",
      },

      {
        state: "Iowa",

        product: "Soybeans",

        sowing: "May",

        growing: "Jun – Aug",

        harvest: "Sep – Oct",

        ready: "Oct – Dec",

        impact: "Low",
      },

      {
        state: "Iowa",

        product: "Wheat",

        sowing: "Sep – Oct",

        growing: "Oct – Apr",

        harvest: "Jun – Jul",

        ready: "Jul – Sep",

        impact: "Low",
      },
    ],

    cropCalendar: {
      flowering: "Jun – Jul",

      development: "May – Aug",

      harvest: "Sep – Oct",

      postHarvest: "Oct – Dec",

      readyMarket: "Oct – Dec",
    },

    seasonProgress: {
      condition: "72%",

      conditionLabel: "Excellent",

      harvestProgress: "5%",

      cropDevelopment: "22%",

      daysSuitable: "6.8 days",
    },

    forecast: {
      temperature: {
        value: "Near normal",

        probability: "High",
      },

      rainfall: {
        value: "Normal",

        probability: "High",
      },

      extremeWeather: {
        value: "Storm risk",

        probability: "Medium",
      },

      cropOutlook: {
        value: "Healthy outlook",

        probability: "High",
      },
    },

    marketReadiness: {
      currentDemand: "High",

      packAvailability: "Oct – Dec",

      marketTrend: "Stable",

      priceOutlook: "Stable",
    },

    highlights: [
      {
        title:
          "Crop conditions remain favorable across major producing areas.",

        confidence: "High",
      },

      {
        title:
          "Corn demand continues to support regional trade activity.",

        confidence: "High",
      },

      {
        title:
          "Storm monitoring remains important during the growing season.",

        confidence: "Medium",
      },
    ],

    economicStats: {
      cropValue: "$31.4B",

      exports: "$11.2B",

      agriculturalJobs: "180K+",

      marketScore: "88",
    },
  },

  // =========================================================
  // WASHINGTON
  // =========================================================

  WA: {
    code: "WA",
    name: "Washington",

    country: "United States",
    countryCode: "US",
    countryIso3: "USA",

    flag: "/assets/flag/usa.png",

    region: "Northwest",

    topProducts: [
      "Apples",
      "Wheat",
      "Potatoes",
      "Cherries",
      "Grapes",
    ],

    selectedProduct: "Apples",

    impact: "Low",

    weather: {
      temperature: {
        value: "Near-normal",

        status: "No",
      },

      rainfall: {
        value: "Normal",

        status: "Normal",
      },

      extremeWeather: {
        value: "Limited risk",

        status: "No",
      },

      cropResponse: {
        value: "Healthy production",

        status: "No",
      },
    },

    tradeImplication: {
      title: "Trade Implication",

      description:
        "Favorable growing conditions support stable fruit production and export availability.",
    },

    topProductsTable: [
      {
        state: "Washington",

        product: "Apples",

        sowing: "Feb – Mar",

        growing: "Apr – Aug",

        harvest: "Aug – Nov",

        ready: "Sep – Dec",

        impact: "Low",
      },

      {
        state: "Washington",

        product: "Wheat",

        sowing: "Sep – Oct",

        growing: "Nov – Jun",

        harvest: "Jul – Aug",

        ready: "Aug – Sep",

        impact: "Low",
      },

      {
        state: "Washington",

        product: "Potatoes",

        sowing: "Apr – May",

        growing: "May – Aug",

        harvest: "Aug – Oct",

        ready: "Sep – Nov",

        impact: "Low",
      },
    ],

    cropCalendar: {
      flowering: "Feb – Apr",

      development: "Apr – Aug",

      harvest: "Aug – Nov",

      postHarvest: "Sep – Dec",

      readyMarket: "Sep – Dec",
    },

    seasonProgress: {
      condition: "78%",

      conditionLabel: "Excellent",

      harvestProgress: "9%",

      cropDevelopment: "25%",

      daysSuitable: "7.2 days",
    },

    forecast: {
      temperature: {
        value: "Near normal",

        probability: "High",
      },

      rainfall: {
        value: "Normal",

        probability: "High",
      },

      extremeWeather: {
        value: "Limited",

        probability: "Low",
      },

      cropOutlook: {
        value: "Positive",

        probability: "High",
      },
    },

    marketReadiness: {
      currentDemand: "High",

      packAvailability: "Sep – Dec",

      marketTrend: "Growing",

      priceOutlook: "Stable",
    },

    highlights: [
      {
        title:
          "Fruit production remains stable across major growing regions.",

        confidence: "High",
      },

      {
        title:
          "Export demand continues across Asian markets.",

        confidence: "High",
      },

      {
        title:
          "Weather conditions remain favorable for production.",

        confidence: "High",
      },
    ],

    economicStats: {
      cropValue: "$19.8B",

      exports: "$9.4B",

      agriculturalJobs: "145K+",

      marketScore: "91",
    },
  },

  // =========================================================
  // FLORIDA
  // =========================================================

  FL: {
    code: "FL",
    name: "Florida",

    country: "United States",
    countryCode: "US",
    countryIso3: "USA",

    flag: "/assets/flag/usa.png",

    region: "Southeast",

    topProducts: [
      "Oranges",
      "Tomatoes",
      "Strawberries",
      "Sugarcane",
      "Grapefruit",
    ],

    selectedProduct: "Oranges",

    impact: "Low",

    weather: {
      temperature: {
        value: "Above-normal",

        status: "Yes",
      },

      rainfall: {
        value: "Normal",

        status: "Normal",
      },

      extremeWeather: {
        value: "Hurricane monitoring",

        status: "Yes",
      },

      cropResponse: {
        value: "Mixed",

        status: "Yes",
      },
    },

    tradeImplication: {
      title: "Trade Implication",

      description:
        "Weather and hurricane conditions can influence citrus production and regional supply.",
    },

    topProductsTable: [
      {
        state: "Florida",

        product: "Oranges",

        sowing: "Mar – Apr",

        growing: "Apr – Nov",

        harvest: "Oct – Jun",

        ready: "Nov – Jun",

        impact: "Moderate",
      },

      {
        state: "Florida",

        product: "Tomatoes",

        sowing: "Aug – Sep",

        growing: "Sep – Jan",

        harvest: "Nov – Apr",

        ready: "Dec – Apr",

        impact: "Low",
      },

      {
        state: "Florida",

        product: "Sugarcane",

        sowing: "Aug – Jan",

        growing: "Sep – Mar",

        harvest: "Oct – Apr",

        ready: "Nov – Apr",

        impact: "Moderate",
      },
    ],

    cropCalendar: {
      flowering: "Mar – Apr",

      development: "Apr – Nov",

      harvest: "Oct – Jun",

      postHarvest: "Nov – Jun",

      readyMarket: "Nov – Jun",
    },

    seasonProgress: {
      condition: "68%",

      conditionLabel: "Good",

      harvestProgress: "14%",

      cropDevelopment: "16%",

      daysSuitable: "6.1 days",
    },

    forecast: {
      temperature: {
        value: "Above normal",

        probability: "Medium",
      },

      rainfall: {
        value: "Normal",

        probability: "High",
      },

      extremeWeather: {
        value: "Hurricane watch",

        probability: "Medium",
      },

      cropOutlook: {
        value: "Mixed regional outlook",

        probability: "Medium",
      },
    },

    marketReadiness: {
      currentDemand: "High",

      packAvailability: "Nov – Jun",

      marketTrend: "Stable",

      priceOutlook: "Slightly Elevated",
    },

    highlights: [
      {
        title:
          "Hurricane monitoring remains important for citrus production.",

        confidence: "High",
      },

      {
        title:
          "Domestic demand continues to support fruit prices.",

        confidence: "Medium",
      },

      {
        title:
          "Regional weather conditions remain mixed.",

        confidence: "Medium",
      },
    ],

    economicStats: {
      cropValue: "$27.3B",

      exports: "$8.6B",

      agriculturalJobs: "205K+",

      marketScore: "79",
    },
  },
};

// =============================================================
// COUNTRY CONFIG
// =============================================================

export const countryConfig = {
  US: {
    code: "US",

    iso3: "USA",

    name: "United States",

    flag: "/assets/flag/usa.png",

    defaultState: "CA",
  },

  // ===========================================================
  // FUTURE - INDIA
  // ===========================================================
  //
  // Jab India ka state data add karoge tab uncomment karna.
  //
  IN: {
    code: "IN",
    iso3: "IND",
    name: "India",
    flag: "/assets/flag/india.png",
    defaultState: "DL",
  },

  // ===========================================================
  // FUTURE - CANADA
  // ===========================================================
  //
  CA: {
    code: "CA",
    iso3: "CAN",
    name: "Canada",
    flag: "/assets/flag/canada.png",
    defaultState: "ON",
  },
};

// =========================================================
// INDIA — 4 STATES
// =========================================================

export const indiaStateData = {

  // =========================================================
  // UTTAR PRADESH
  // =========================================================

  UP: {
    code: "UP",
    name: "Uttar Pradesh",

    country: "India",
    countryCode: "IN",
    countryIso3: "IND",

    flag: "/assets/flag/india.png",

    region: "North",

    topProducts: [
      "Wheat",
      "Rice",
      "Sugarcane",
      "Potatoes",
      "Pulses",
    ],

    selectedProduct: "Wheat",

    impact: "Moderate",

    weather: {
      temperature: {
        value: "Above-normal heat",
        status: "Yes",
      },

      rainfall: {
        value: "Below-normal / Variable",
        status: "Dry",
      },

      extremeWeather: {
        value: "Heatwave & irregular rainfall",
        status: "Yes",
      },

      cropResponse: {
        value: "Moderate crop stress",
        status: "Yes",
      },
    },

    tradeImplication: {
      title: "Trade Implication",

      description:
        "Weather variability may affect wheat, rice and sugarcane production, influencing regional supply and market prices.",
    },

    topProductsTable: [
      {
        state: "Uttar Pradesh",
        product: "Wheat",
        sowing: "Oct – Nov",
        growing: "Nov – Mar",
        harvest: "Mar – Apr",
        ready: "Apr – Jun",
        impact: "Moderate",
      },

      {
        state: "Uttar Pradesh",
        product: "Rice",
        sowing: "Jun – Jul",
        growing: "Jul – Sep",
        harvest: "Sep – Nov",
        ready: "Oct – Dec",
        impact: "Moderate",
      },

      {
        state: "Uttar Pradesh",
        product: "Sugarcane",
        sowing: "Feb – Mar",
        growing: "Mar – Jan",
        harvest: "Nov – Apr",
        ready: "Dec – May",
        impact: "Low",
      },
    ],

    cropCalendar: {
      flowering: "Jan – Feb",
      development: "Nov – Mar",
      harvest: "Mar – Apr",
      postHarvest: "Apr – Jun",
      readyMarket: "Apr – Jun",
    },

    seasonProgress: {
      condition: "67%",
      conditionLabel: "Good",
      harvestProgress: "9%",
      cropDevelopment: "21%",
      daysSuitable: "6.0 days",
    },

    forecast: {
      temperature: {
        value: "Above normal",
        probability: "High",
      },

      rainfall: {
        value: "Below normal",
        probability: "Medium",
      },

      extremeWeather: {
        value: "Heat episodes likely",
        probability: "Medium",
      },

      cropOutlook: {
        value: "Moderate regional impact",
        probability: "Medium",
      },
    },

    marketReadiness: {
      currentDemand: "High",
      packAvailability: "Apr – Jun",
      marketTrend: "Growing",
      priceOutlook: "Slightly Elevated",
    },

    highlights: [
      {
        title:
          "Uttar Pradesh remains one of India's major foodgrain producing states.",
        confidence: "High",
      },

      {
        title:
          "Wheat and rice availability remains important for regional food supply.",
        confidence: "High",
      },

      {
        title:
          "Temperature and rainfall variability may influence crop yields.",
        confidence: "Medium",
      },
    ],

    economicStats: {
      cropValue: "₹2.1T",
      exports: "₹28.4B",
      agriculturalJobs: "8.5M+",
      marketScore: "86",
    },
  },


  // =========================================================
  // MAHARASHTRA
  // =========================================================

  MH: {
    code: "MH",
    name: "Maharashtra",

    country: "India",
    countryCode: "IN",
    countryIso3: "IND",

    flag: "/assets/flag/india.png",

    region: "West",

    topProducts: [
      "Sugarcane",
      "Soybeans",
      "Cotton",
      "Grapes",
      "Tur",
    ],

    selectedProduct: "Soybeans",

    impact: "High",

    weather: {
      temperature: {
        value: "Above-normal heat",
        status: "Yes",
      },

      rainfall: {
        value: "Below-normal / Variable",
        status: "Dry",
      },

      extremeWeather: {
        value: "Drought & heavy rainfall risk",
        status: "Yes",
      },

      cropResponse: {
        value: "Production pressure",
        status: "Yes",
      },
    },

    tradeImplication: {
      title: "Trade Implication",

      description:
        "Rainfall variability can affect soybean, cotton and sugarcane production, with potential effects on commodity availability and prices.",
    },

    topProductsTable: [
      {
        state: "Maharashtra",
        product: "Soybeans",
        sowing: "Jun – Jul",
        growing: "Jul – Sep",
        harvest: "Sep – Oct",
        ready: "Oct – Dec",
        impact: "High",
      },

      {
        state: "Maharashtra",
        product: "Cotton",
        sowing: "Jun – Jul",
        growing: "Jul – Oct",
        harvest: "Oct – Jan",
        ready: "Nov – Feb",
        impact: "Moderate",
      },

      {
        state: "Maharashtra",
        product: "Sugarcane",
        sowing: "Oct – Mar",
        growing: "Nov – Jan",
        harvest: "Oct – Apr",
        ready: "Nov – May",
        impact: "Moderate",
      },
    ],

    cropCalendar: {
      flowering: "Aug – Sep",
      development: "Jul – Oct",
      harvest: "Sep – Jan",
      postHarvest: "Oct – Feb",
      readyMarket: "Oct – Feb",
    },

    seasonProgress: {
      condition: "61%",
      conditionLabel: "Good",
      harvestProgress: "11%",
      cropDevelopment: "19%",
      daysSuitable: "5.2 days",
    },

    forecast: {
      temperature: {
        value: "Above normal",
        probability: "High",
      },

      rainfall: {
        value: "Variable",
        probability: "Medium",
      },

      extremeWeather: {
        value: "Heavy rainfall & dry spells",
        probability: "Medium",
      },

      cropOutlook: {
        value: "Production pressure",
        probability: "Medium",
      },
    },

    marketReadiness: {
      currentDemand: "High",
      packAvailability: "Oct – Feb",
      marketTrend: "Growing",
      priceOutlook: "Elevated",
    },

    highlights: [
      {
        title:
          "Soybean and cotton remain important commercial crops in Maharashtra.",
        confidence: "High",
      },

      {
        title:
          "Rainfall variability remains an important production factor.",
        confidence: "High",
      },

      {
        title:
          "Sugarcane production supports significant regional trade activity.",
        confidence: "Medium",
      },
    ],

    economicStats: {
      cropValue: "₹1.7T",
      exports: "₹42.6B",
      agriculturalJobs: "6.8M+",
      marketScore: "81",
    },
  },


  // =========================================================
  // PUNJAB
  // =========================================================

  PB: {
    code: "PB",
    name: "Punjab",

    country: "India",
    countryCode: "IN",
    countryIso3: "IND",

    flag: "/assets/flag/india.png",

    region: "North",

    topProducts: [
      "Wheat",
      "Rice",
      "Cotton",
      "Maize",
      "Potatoes",
    ],

    selectedProduct: "Wheat",

    impact: "Moderate",

    weather: {
      temperature: {
        value: "Above-normal during late season",
        status: "Yes",
      },

      rainfall: {
        value: "Variable",
        status: "Normal",
      },

      extremeWeather: {
        value: "Heatwave & storm risk",
        status: "Yes",
      },

      cropResponse: {
        value: "Moderate stress",
        status: "Yes",
      },
    },

    tradeImplication: {
      title: "Trade Implication",

      description:
        "Punjab's strong wheat and rice production supports national food supply, while heat and water conditions remain key production risks.",
    },

    topProductsTable: [
      {
        state: "Punjab",
        product: "Wheat",
        sowing: "Oct – Nov",
        growing: "Nov – Mar",
        harvest: "Apr",
        ready: "Apr – Jun",
        impact: "Moderate",
      },

      {
        state: "Punjab",
        product: "Rice",
        sowing: "Jun – Jul",
        growing: "Jul – Sep",
        harvest: "Oct – Nov",
        ready: "Oct – Dec",
        impact: "Moderate",
      },

      {
        state: "Punjab",
        product: "Cotton",
        sowing: "Apr – May",
        growing: "Jun – Sep",
        harvest: "Oct – Dec",
        ready: "Nov – Jan",
        impact: "Low",
      },
    ],

    cropCalendar: {
      flowering: "Jan – Feb",
      development: "Nov – Mar",
      harvest: "Apr – May",
      postHarvest: "May – Jun",
      readyMarket: "May – Jun",
    },

    seasonProgress: {
      condition: "70%",
      conditionLabel: "Good",
      harvestProgress: "10%",
      cropDevelopment: "23%",
      daysSuitable: "6.5 days",
    },

    forecast: {
      temperature: {
        value: "Above normal",
        probability: "Medium",
      },

      rainfall: {
        value: "Near normal",
        probability: "Medium",
      },

      extremeWeather: {
        value: "Heat episodes possible",
        probability: "Medium",
      },

      cropOutlook: {
        value: "Stable outlook",
        probability: "High",
      },
    },

    marketReadiness: {
      currentDemand: "High",
      packAvailability: "Apr – Jun",
      marketTrend: "Stable",
      priceOutlook: "Stable",
    },

    highlights: [
      {
        title:
          "Wheat and rice remain the key agricultural commodities in Punjab.",
        confidence: "High",
      },

      {
        title:
          "Late-season heat can affect wheat crop development and yield.",
        confidence: "High",
      },

      {
        title:
          "Water availability remains important for rice production.",
        confidence: "High",
      },
    ],

    economicStats: {
      cropValue: "₹650B",
      exports: "₹18.7B",
      agriculturalJobs: "2.9M+",
      marketScore: "89",
    },
  },


  // =========================================================
  // WEST BENGAL
  // =========================================================

  WB: {
    code: "WB",
    name: "West Bengal",

    country: "India",
    countryCode: "IN",
    countryIso3: "IND",

    flag: "/assets/flag/india.png",

    region: "East",

    topProducts: [
      "Rice",
      "Jute",
      "Potatoes",
      "Tea",
      "Vegetables",
    ],

    selectedProduct: "Rice",

    impact: "Moderate",

    weather: {
      temperature: {
        value: "Above-normal",
        status: "Yes",
      },

      rainfall: {
        value: "Monsoon dependent",
        status: "Normal",
      },

      extremeWeather: {
        value: "Flood & cyclone risk",
        status: "Yes",
      },

      cropResponse: {
        value: "Mixed",
        status: "Yes",
      },
    },

    tradeImplication: {
      title: "Trade Implication",

      description:
        "Rice, jute and horticultural production can be affected by flooding, cyclones and monsoon variability, influencing regional supply.",
    },

    topProductsTable: [
      {
        state: "West Bengal",
        product: "Rice",
        sowing: "Jun – Jul",
        growing: "Jul – Sep",
        harvest: "Nov – Dec",
        ready: "Dec – Feb",
        impact: "Moderate",
      },

      {
        state: "West Bengal",
        product: "Jute",
        sowing: "Mar – May",
        growing: "Apr – Jul",
        harvest: "Jul – Sep",
        ready: "Aug – Oct",
        impact: "Moderate",
      },

      {
        state: "West Bengal",
        product: "Potatoes",
        sowing: "Oct – Nov",
        growing: "Nov – Jan",
        harvest: "Jan – Mar",
        ready: "Feb – Apr",
        impact: "Low",
      },
    ],

    cropCalendar: {
      flowering: "Aug – Sep",
      development: "Jul – Oct",
      harvest: "Nov – Dec",
      postHarvest: "Dec – Feb",
      readyMarket: "Dec – Feb",
    },

    seasonProgress: {
      condition: "69%",
      conditionLabel: "Good",
      harvestProgress: "12%",
      cropDevelopment: "20%",
      daysSuitable: "6.3 days",
    },

    forecast: {
      temperature: {
        value: "Above normal",
        probability: "Medium",
      },

      rainfall: {
        value: "Near normal",
        probability: "Medium",
      },

      extremeWeather: {
        value: "Flood & cyclone episodes possible",
        probability: "Medium",
      },

      cropOutlook: {
        value: "Mixed regional outlook",
        probability: "Medium",
      },
    },

    marketReadiness: {
      currentDemand: "High",
      packAvailability: "Dec – Apr",
      marketTrend: "Stable",
      priceOutlook: "Slightly Elevated",
    },

    highlights: [
      {
        title:
          "Rice remains one of the most important crops in West Bengal.",
        confidence: "High",
      },

      {
        title:
          "Flooding and cyclone events can affect agricultural production.",
        confidence: "High",
      },

      {
        title:
          "Jute and horticultural crops contribute to regional agricultural trade.",
        confidence: "Medium",
      },
    ],

    economicStats: {
      cropValue: "₹1.1T",
      exports: "₹24.1B",
      agriculturalJobs: "5.2M+",
      marketScore: "83",
    },
  },
};

// =============================================================
// COUNTRY STATE DATA
// =============================================================

export const countryStateData = {
  US: stateData,

  // Future
  //
  IN: indiaStateData,
  // CA: canadaProvinceData,
};

// =============================================================
// GET COUNTRY CONFIG
// =============================================================

export function getCountryConfig(
  countryCode = ""
) {
  const normalizedCountryCode =
    String(
      countryCode || "",
    ).toUpperCase();

  if (!normalizedCountryCode) {
    return null;
  }

  return (
    countryConfig[
      normalizedCountryCode
    ] || null
  );
}

// =============================================================
// GET ALL STATES OF COUNTRY
// =============================================================

export function getStatesByCountry(countryCode = "US") {
  const normalizedCountryCode = String(
    countryCode || "US"
  ).toUpperCase();

  const countryStates =
    countryStateData[normalizedCountryCode];

  if (!countryStates) {
    return [];
  }

  return Object.values(countryStates);
}

// =============================================================
// GET SINGLE STATE
// =============================================================

export function getStateByCode(
  countryCode = "US",
  stateCode = ""
) {
  const normalizedCountryCode = String(
    countryCode || "US"
  ).toUpperCase();

  const normalizedStateCode = String(
    stateCode || ""
  ).toUpperCase();

  return (
    countryStateData[normalizedCountryCode]?.[
      normalizedStateCode
    ] || null
  );
}

// =============================================================
// GET DEFAULT STATE OF COUNTRY
// =============================================================

export function getDefaultState(countryCode = "US") {
  const config =
    getCountryConfig(countryCode);

  if (!config) {
    return null;
  }

  const preferredState =
    getStateByCode(
      config.code,
      config.defaultState
    );

  if (preferredState) {
    return preferredState;
  }

  const countryStates =
    getStatesByCountry(config.code);

  return countryStates[0] || null;
}

// =============================================================
// CHECK IF STATE EXISTS
// =============================================================

export function hasStateData(
  countryCode = "US",
  stateCode = ""
) {
  return Boolean(
    getStateByCode(
      countryCode,
      stateCode
    )
  );
}

// =============================================================
// GET COUNTRY ISO3
// =============================================================

export function getCountryIso3(
  countryCode = "US"
) {
  return (
    getCountryConfig(countryCode)?.iso3 ||
    "USA"
  );
}

// =============================================================
// BACKWARD COMPATIBILITY
// =============================================================
//
// Purana code agar kahin use ho raha hai:
//
// import stateData, { states } from ".../stateData";
//
// wo bhi abhi chalega.
//

export const states =
  getStatesByCountry("US");

// =============================================================
// DEFAULT EXPORT
// =============================================================

export default stateData;