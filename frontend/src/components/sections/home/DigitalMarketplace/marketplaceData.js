import digitalWebImage from "../../../../assets/igbndivision/digitalweb.png";
import homeServiceImage from "../../../../assets/case-studies/home-service-01.png";
import homeServiceImageTwo from "../../../../assets/case-studies/home-service-03.png";
import hukmeeImage from "../../../../assets/case-studies/hukmee-01.png";
import hukmeeImageTwo from "../../../../assets/case-studies/hukmee-03.png";
import friendsHubImage from "../../../../assets/case-studies/friendshub-01.png";
import friendsHubImageTwo from "../../../../assets/case-studies/friendshub-02.png";

export const marketplaceSlides = [
  {
    eyebrow: "Digital products, built for growth",
    title: "Your next big idea,",
    highlight: "ready for launch.",
    description:
      "Explore modern websites and mobile apps designed around the way your business works.",
    image: digitalWebImage,
    action: "Explore solutions",
  },
  {
    eyebrow: "Websites & web platforms",
    title: "A better digital",
    highlight: "experience starts here.",
    description:
      "From a sharp business website to a complete marketplace, build a web presence that moves business forward.",
    image: homeServiceImage,
    action: "Browse websites",
  },
  {
    eyebrow: "Mobile apps & portals",
    title: "Make every tap",
    highlight: "count.",
    description:
      "Create useful, polished app experiences that keep your customers connected wherever they are.",
    image: friendsHubImage,
    action: "Browse apps",
  },
];

export const marketplaceProducts = [
  {
    id: "healthcare-web",
    type: "Web",
    industry: "Healthcare",
    title: "Healthcare Patient Portal",
    description:
      "A connected patient experience for appointments, records and care teams.",
    image: digitalWebImage,
    tags: ["Patient portal", "Appointments", "Admin dashboard"],
    featured: true,
  },
  {
    id: "healthcare-app",
    type: "App",
    industry: "Healthcare",
    title: "CareConnect Mobile App",
    description:
      "A friendly mobile experience for patients and healthcare providers.",
    image: homeServiceImage,
    tags: ["iOS & Android", "Patient profiles", "Notifications"],
  },
  {
    id: "commerce-web",
    type: "Web",
    industry: "Ecommerce",
    title: "Commerce Storefront",
    description:
      "A flexible online store with product discovery and a smooth checkout.",
    image: digitalWebImage,
    tags: ["Online store", "Payments", "Order management"],
    featured: true,
  },
  {
    id: "commerce-app",
    type: "App",
    industry: "Ecommerce",
    title: "Shop & Order App",
    description:
      "Bring your catalogue, customer offers and order updates into one app.",
    image: hukmeeImage,
    tags: ["Product catalogue", "Checkout", "Order tracking"],
  },
  {
    id: "education-web",
    type: "Web",
    industry: "Education",
    title: "Learning Management Platform",
    description:
      "A simple home for courses, learning resources and student progress.",
    image: digitalWebImage,
    tags: ["Course library", "Student portal", "Progress tracking"],
  },
  {
    id: "education-app",
    type: "App",
    industry: "Education",
    title: "LearnAnywhere App",
    description:
      "Give learners an easy way to discover lessons and learn on the go.",
    image: friendsHubImageTwo,
    tags: ["Video lessons", "Learning plans", "Mobile first"],
  },
  {
    id: "manufacturing-web",
    type: "Web",
    industry: "Manufacturing",
    title: "Industrial Business Website",
    description:
      "Showcase products, capabilities and enquiries in a polished web presence.",
    image: digitalWebImage,
    tags: ["Product catalogue", "Lead generation", "CMS"],
  },
  {
    id: "manufacturing-app",
    type: "App",
    industry: "Manufacturing",
    title: "Factory Operations App",
    description:
      "A practical mobile workspace for teams, tasks and operational updates.",
    image: homeServiceImageTwo,
    tags: ["Team workflows", "Task updates", "Role based access"],
  },
  {
    id: "real-estate-web",
    type: "Web",
    industry: "Real Estate",
    title: "Property Discovery Website",
    description:
      "Help buyers explore listings, compare details and connect with your team.",
    image: digitalWebImage,
    tags: ["Property listings", "Search & filters", "Enquiries"],
  },
  {
    id: "real-estate-app",
    type: "App",
    industry: "Real Estate",
    title: "Property Companion App",
    description:
      "Keep property search, saved listings and agent conversations together.",
    image: hukmeeImageTwo,
    tags: ["Saved properties", "Maps", "Agent chat"],
  },
  {
    id: "food-web",
    type: "Web",
    industry: "Food & Agriculture",
    title: "Food Brand Online Store",
    description:
      "Tell your brand story and make product discovery easy for every buyer.",
    image: digitalWebImage,
    tags: ["Brand website", "Product pages", "Enquiry forms"],
  },
  {
    id: "food-app",
    type: "App",
    industry: "Food & Agriculture",
    title: "Farm-to-Market App",
    description:
      "Connect suppliers and buyers through a clear, mobile-first experience.",
    image: friendsHubImage,
    tags: ["Supplier profiles", "Orders", "Buyer messaging"],
  },
];
