import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import PageTransition from "../components/shared/PageTransition";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import MarketAnalyses from "../pages/MarketAnalyses";

import Portfolio from "../pages/Portfolio";

import Testimonials from "../pages/Testimonials";
import Process from "../pages/Process";

import Contact from "../pages/Contact";

import CreateAccount from "../pages/CreateAccount/CreateAccount";
import BusinessType from "../pages/CreateAccount/BusinessType";
import BasicDetails from "../pages/CreateAccount/BesicDetails";
import IndustryBuyer from "../pages/CreateAccount/IndustryBuyer";
import ProductListing from "../pages/CreateAccount/ProductListing";
import Plans from "../pages/CreateAccount/Plans";
import Success from "../pages/CreateAccount/Success";

import Privacy from "../pages/legal/Privacy";
import Terms from "../pages/legal/Terms";
import Refund from "../pages/legal/Refund";
import Cookie from "../pages/legal/Cookie";

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
          path="/market-analyses"
          element={
            <PageTransition>
              <MarketAnalyses />
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

        {/* <Route
          path="/clients"
          element={
            <PageTransition>
              <Clients />
            </PageTransition>
          }
        /> */}

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
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/create-account"
          element={
            <PageTransition>
              <CreateAccount />
            </PageTransition>
          }
        />
        <Route
          path="/create-account"
          element={
            <PageTransition>
              <BusinessType />
            </PageTransition>
          }
        />

        <Route
          path="/create-account/basic-details"
          element={
            <PageTransition>
              <BasicDetails />
            </PageTransition>
          }
        />

        <Route
          path="/create-account/industry-buyer"
          element={
            <PageTransition>
              <IndustryBuyer />
            </PageTransition>
          }
        />

        <Route
          path="/create-account/products"
          element={
            <PageTransition>
              <ProductListing />
            </PageTransition>
          }
        />

        <Route
          path="/create-account/plans"
          element={
            <PageTransition>
              <Plans />
            </PageTransition>
          }
        />

        <Route
          path="/create-account/success"
          element={
            <PageTransition>
              <Success />
            </PageTransition>
          }
        />

        <Route
          path="/team"
          element={
            <PageTransition>
              <OurTeam />
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
