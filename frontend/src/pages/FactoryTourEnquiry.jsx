import { useState } from "react";
import "../components/sections/home/FactoryTourEnquiry/factoryTourEnquiry.css";
import EnquiryStepper from "../components/sections/home/FactoryTourEnquiry/EnquiryStepper";
import EnquiryForm from "../components/sections/home/FactoryTourEnquiry/EnquiryForm";
import EnquiryReview from "../components/sections/home/FactoryTourEnquiry/EnquiryReview";
import EnquirySidebar from "../components/sections/home/FactoryTourEnquiry/EnquirySidebar";

export default function FactoryTourEnquiry() {
  const [reviewData, setReviewData] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleEdit = () => {
    setConfirmed(false);
    setReviewData((current) => ({ ...current }));
  };

  return (
    <main className="factory-enquiry-page">
      <section className="enquiry-hero">
        <div>
          <p className="enquiry-kicker">IGBN Factory Tours</p>
          <h1>Factory Tour Enquiry</h1>
          <p>Tell us your requirements and we will find the best verified Indian manufacturers for your business visit.</p>
        </div>
        <div className="enquiry-hero-image" />
      </section>

      <EnquiryStepper activeStep={reviewData ? (confirmed ? 2 : 1) : 0} />

      <div className="enquiry-layout">
        <div>
          {reviewData ? (
            <EnquiryReview
              data={reviewData}
              confirmed={confirmed}
              onEdit={handleEdit}
              onConfirm={() => setConfirmed(true)}
            />
          ) : (
            <>
              <div className="enquiry-page-heading">
                <h2>Enquiry Details</h2>
                <p>Please provide the following information to help us find suitable manufacturers and arrange your factory visit.</p>
                <b>All fields marked * are required</b>
              </div>
              <EnquiryForm initialValues={reviewData || {}} onReview={setReviewData} />
            </>
          )}
        </div>
        <EnquirySidebar />
      </div>
    </main>
  );
}
