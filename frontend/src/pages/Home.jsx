import Hero from "../components/sections/Hero";
// import TrustedBy from "../components/sections/TrustedBy";
// import Expertise from "../components/sections/Expertise";
// import ServicesPreview from "../components/sections/ServicesPreview";
// import Industries from "../components/sections/Industries";
import CaseStudies from "../components/sections/CaseStudies";
// import Stats from "../components/sections/Stats";
// import WhyChoose from "../components/sections/WhyChoose";
// import TechStack from "../components/sections/TechStack";
// import Testimonials from "../components/sections/Testimonials";
// import WorkCulture from "../components/sections/WorkCulture";
// import CTA from "../components/sections/CTA";
// import OurTeam from "../components/sections/OurTeam";
// import HowItsWork from "../components/sections/HowItsWork";

// import OurSectorsWeDeal from "../components/sections/OurSectorsWeDeal";
import BuyersAvForm from "../components/sections/connectwithbuyers/buyersAvForm";
import SuppliersAvForm from "../components/sections/connectwithbuyers/suppliersAvForm";
// import BuyersSuppliersConnect from "../components/sections/connectwithbuyers/BuyersSuppliersConnect";
import InternationalRFQ from "../components/sections/InternationalRFQ";
import AnalyzeCompany from "../components/sections/AnalyzeCompany";
import OurFourDivision from "../components/sections/OurFourDivision";
import KeyMetrics from "../components/sections/KeyMetrics";
import HowItWorks from "../components/sections/HowItWorks";
import LatestInsights from "../components/sections/LatestInsights";
import KeyMetrics2 from "../components/sections/KeyMetrics2";
import GlobalTradeHero from "../components/sections/home/GlobalTradeHero/GlobalTradeHero";
// import InternationalRFQ from "../components/sections/InternationalRFQ.jsx";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <GlobalTradeHero/>
      
      {/* <WhyChoose />
      <TrustedBy />
     
      <ServicesPreview /> */}
      {/* <HowItsWork/> */}
      <KeyMetrics/>
      
      <InternationalRFQ/>
      {/* <BuyersSuppliersConnect/> */}
      <AnalyzeCompany/>
      <HowItWorks/>
      {/* <OurSectorsWeDeal/> */}
      <OurFourDivision/>
      <LatestInsights/>
      <KeyMetrics2/>
      {/* <CaseStudies />
      <Stats /> */}

      {/* <TechStack /> */}

      {/* <Testimonials />

      <WorkCulture />

      <OurTeam />

      <CTA /> */}
    </>
  );
}
