import homeService01 from "../assets/case-studies/home-service-01.png";
import homeService02 from "../assets/case-studies/home-service-02.png";
import homeService03 from "../assets/case-studies/home-service-03.png";
import homeService04 from "../assets/case-studies/home-service-04.png";

import hukmee01 from "../assets/case-studies/hukmee-01.png";
import hukmee02 from "../assets/case-studies/hukmee-02.png";
import hukmee03 from "../assets/case-studies/hukmee-03.png";
import hukmee04 from "../assets/case-studies/hukmee-04.png";

import friendsHub01 from "../assets/case-studies/friendshub-01.png";
import friendsHub02 from "../assets/case-studies/friendshub-02.png";
import friendsHub03 from "../assets/case-studies/friendshub-03.png";

export const cases = [
  {
    id: 1,
    name: "Home Services Application",
    subtitle: "Book trusted services from one application",
    industry: "On-Demand Services",
    platform: "Android & iOS",

    description:
      "A complete home-service booking platform where users can explore services, choose packages, apply coupons and manage bookings from a modern mobile application.",

    images: [
      homeService01,
      homeService02,
      homeService03,
      homeService04,
    ],

    tech: [
      "React Native",
      "Node.js",
      "SQL Server",
      "Razorpay",
      "Firebase",
    ],

    stats: [
      {
        value: "25+",
        label: "Service categories",
      },
      {
        value: "4.8/5",
        label: "Customer experience",
      },
    ],
  },

  {
    id: 2,
    name: "Hukmee",
    subtitle: "Mobile repair and service marketplace",
    industry: "Mobile Services",
    platform: "Android Application",

    description:
      "A mobile repair and service platform with device selection, repair booking, order tracking, wallet, referral rewards and customer support features.",

    images: [hukmee01, hukmee02, hukmee03, hukmee04],

    tech: [
      "React Native",
      "ASP.NET",
      "SQL Server",
      "Firebase",
      "Google Maps",
    ],

    stats: [
      {
        value: "10K+",
        label: "Service requests",
      },
      {
        value: "30+",
        label: "Supported devices",
      },
    ],
  },

  {
    id: 3,
    name: "FriendsHub",
    subtitle: "A modern short-video social community",
    industry: "Social Networking",
    platform: "Android & iOS",

    description:
      "An interactive social application with short videos, live streaming, user profiles, chat, following system and content engagement functionality.",

    images: [friendsHub01, friendsHub02, friendsHub03],

    tech: [
      "Flutter",
      "Node.js",
      "Socket.io",
      "Agora",
      "Firebase",
    ],

    stats: [
      {
        value: "Live",
        label: "Video streaming",
      },
      {
        value: "Real-time",
        label: "Chat experience",
      },
    ],
  },
];