import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import StepProgress from "../../components/signup/StepProgress";

// Steps
import BusinessType from "./BusinessType";
import BasicDetails from "./BesicDetails";
import IndustryBuyer from "./IndustryBuyer";
import ProductListing from "./ProductListing";
import Plans from "./Plans";
import Success from "./Success";

export default function CreateAccount() {
  const [currentStep, setCurrentStep] = useState(1);

  // All registration data
  const [formData, setFormData] = useState({
    businessType: "",

    companyDetails: {
      companyName: "",
      email: "",
      country: "",
      state: "",
      city: "",
    },

    industryDetails: {
      industry: "",
      products: [],
      buyers: [],
    },

    products: [],

    plan: null,
  });

  // Update data from every step

  const updateFormData = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  // Next Step

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // Previous Step

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BusinessType
            next={nextStep}
            updateData={updateFormData}
            data={formData}
          />
        );

      case 2:
        return (
          <BasicDetails
            next={nextStep}
            back={previousStep}
            updateData={updateFormData}
            data={formData}
          />
        );

      case 3:
        return (
          <IndustryBuyer
            next={nextStep}
            back={previousStep}
            updateData={updateFormData}
            data={formData}
          />
        );

      case 4:
        return (
          <ProductListing
            next={nextStep}
            back={previousStep}
            updateData={updateFormData}
            data={formData}
          />
        );

      case 5:
        return (
          <Plans
            next={nextStep}
            back={previousStep}
            updateData={updateFormData}
            data={formData}
          />
        );

      case 6:
        return <Success data={formData} />;

      default:
        return null;
    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-[#f8f9fc]
      py-8
    "
    >
      {/* Top Step Progress */}

      <StepProgress currentStep={currentStep} />

      {/* Step Content */}

      <div
        className="
        max-w-[1200px]
        mx-auto
        px-5
        mt-8
      "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -50,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
