import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import PageTransition from "../components/shared/PageTransition";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Industries from "../pages/Industries";
import IndustryDetail from "../pages/IndustryDetail";
import CaseStudies from "../pages/CaseStudies";
import CaseStudyDetail from "../pages/CaseStudyDetail";
import Portfolio from "../pages/Portfolio";
import Clients from "../pages/Clients";
import Testimonials from "../pages/Testimonials";
import Process from "../pages/Process";
import Engagement from "../pages/Engagement";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";

import Privacy from "../pages/legal/Privacy";
import Terms from "../pages/legal/Terms";
import Refund from "../pages/legal/Refund";
import Cookie from "../pages/legal/Cookie";
import Founder from "../pages/Founder";
import OurTeam from "../components/sections/OurTeam";

export default function Router() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />

        <Route
          path="/services/:slug"
          element={
            <PageTransition>
              <ServiceDetail />
            </PageTransition>
          }
        />

        <Route
          path="/industries"
          element={
            <PageTransition>
              <Industries />
            </PageTransition>
          }
        />

        <Route
          path="/industries/:slug"
          element={
            <PageTransition>
              <IndustryDetail />
            </PageTransition>
          }
        />

        <Route
          path="/case-studies"
          element={
            <PageTransition>
              <CaseStudies />
            </PageTransition>
          }
        />

        <Route
          path="/case-studies/:slug"
          element={
            <PageTransition>
              <CaseStudyDetail />
            </PageTransition>
          }
        />

        <Route
          path="/portfolio"
          element={
            <PageTransition>
              <Portfolio />
            </PageTransition>
          }
        />

        <Route
          path="/clients"
          element={
            <PageTransition>
              <Clients />
            </PageTransition>
          }
        />

        <Route
          path="/testimonials"
          element={
            <PageTransition>
              <Testimonials />
            </PageTransition>
          }
        />

        <Route
          path="/process"
          element={
            <PageTransition>
              <Process />
            </PageTransition>
          }
        />

        <Route
          path="/engagement-models"
          element={
            <PageTransition>
              <Engagement />
            </PageTransition>
          }
        />

        <Route
          path="/blog"
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          }
        />

        <Route
          path="/blog/:slug"
          element={
            <PageTransition>
              <BlogDetail />
            </PageTransition>
          }
        />

        <Route
          path="/careers"
          element={
            <PageTransition > <Careers />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

        <Route
          path="/founder"
          element={
            <PageTransition>
              <Founder />
            </PageTransition>
          }
        />

        <Route
          path="/team"
          element={
            <PageTransition>
              <OurTeam/>
            </PageTransition>
          }
        />

        <Route path="/privacy-policy" element={<Privacy />} />

        <Route path="/terms-and-conditions" element={<Terms />} />

        <Route path="/refund-policy" element={<Refund />} />

        <Route path="/cookie-policy" element={<Cookie />} />
      </Routes>
    </AnimatePresence>
  );
}
