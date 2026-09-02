const stateData = {
  CA: {
    code: "CA",
    name: "California",
    country: "United States",

    flag: "/assets/flag/usa.png",

    region: "West",

    topProducts: ["Almonds", "Pistachios", "Grapes", "Walnuts", "Citrus"],

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
        title: "Recent heat conditions may affect crop development.",
        confidence: "Medium",
      },
      {
        title: "Export demand remains steady across major markets.",
        confidence: "High",
      },
      {
        title: "Water availability remains a key production factor.",
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

  TX: {
    code: "TX",
    name: "Texas",
    country: "United States",

    flag: "/assets/flag/usa.png",

    region: "South",

    topProducts: ["Cotton", "Corn", "Sorghum", "Wheat", "Cattle"],

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
        title: "Dry conditions are increasing crop monitoring requirements.",
        confidence: "High",
      },
      {
        title: "Cotton export demand remains strong.",
        confidence: "High",
      },
      {
        title: "Regional rainfall could influence crop yields.",
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

  IA: {
    code: "IA",
    name: "Iowa",
    country: "United States",

    flag: "/assets/flag/usa.png",

    region: "Midwest",

    topProducts: ["Corn", "Soybeans", "Pork", "Eggs", "Wheat"],

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
        title: "Crop conditions remain favorable across major producing areas.",
        confidence: "High",
      },
      {
        title: "Corn demand continues to support regional trade activity.",
        confidence: "High",
      },
      {
        title: "Storm monitoring remains important during the growing season.",
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

  WA: {
    code: "WA",
    name: "Washington",
    country: "United States",

    flag: "/assets/flag/usa.png",

    region: "Northwest",

    topProducts: ["Apples", "Wheat", "Potatoes", "Cherries", "Grapes"],

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
        title: "Fruit production remains stable across major growing regions.",
        confidence: "High",
      },
      {
        title: "Export demand continues across Asian markets.",
        confidence: "High",
      },
      {
        title: "Weather conditions remain favorable for production.",
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

  FL: {
    code: "FL",
    name: "Florida",
    country: "United States",

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
        title: "Hurricane monitoring remains important for citrus production.",
        confidence: "High",
      },
      {
        title: "Domestic demand continues to support fruit prices.",
        confidence: "Medium",
      },
      {
        title: "Regional weather conditions remain mixed.",
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

export const states = Object.values(stateData);

export default stateData;
