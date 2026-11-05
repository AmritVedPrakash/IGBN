import { useState } from "react";
import "../components/sections/home/FactoryTourEnquiry/factoryTourEnquiry.css";
import EnquiryStepper from "../components/sections/home/FactoryTourEnquiry/EnquiryStepper";
import EnquiryForm from "../components/sections/home/FactoryTourEnquiry/EnquiryForm";
import EnquiryReview from "../components/sections/home/FactoryTourEnquiry/EnquiryReview";
import EnquiryPayment from "../components/sections/home/FactoryTourEnquiry/EnquiryPayment";
import PaymentNextSteps from "../components/sections/home/FactoryTourEnquiry/PaymentNextSteps";
import SupplierSearchStatus from "../components/sections/home/FactoryTourEnquiry/SupplierSearchStatus";
import SupplierMeetingOffer from "../components/sections/home/FactoryTourEnquiry/SupplierMeetingOffer";
import BookingConfirmed from "../components/sections/home/FactoryTourEnquiry/BookingConfirmed";
import VisitMeetSource from "../components/sections/home/FactoryTourEnquiry/VisitMeetSource";
import EnquirySidebar from "../components/sections/home/FactoryTourEnquiry/EnquirySidebar";

export default function FactoryTourEnquiry() {
  const [reviewData, setReviewData] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [paid, setPaid] = useState(false);
  const [meetingOffer, setMeetingOffer] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [visitStarted, setVisitStarted] = useState(false);

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

      <EnquiryStepper activeStep={reviewData ? (visitStarted ? 6 : bookingConfirmed ? 5 : meetingOffer ? 4 : paid ? 3 : confirmed ? 2 : 1) : 0} onStepClick={(step) => { if (paid && step === 4) setMeetingOffer(true); if (bookingConfirmed && step === 6) setVisitStarted(true); }} />

      {visitStarted ? <VisitMeetSource /> : bookingConfirmed ? <BookingConfirmed /> : meetingOffer ? <SupplierMeetingOffer onAccept={() => setBookingConfirmed(true)} /> : paid ? <SupplierSearchStatus onViewOffer={() => setMeetingOffer(true)} /> : <div className="enquiry-layout">
        <div>
          {reviewData && confirmed ? (
            <EnquiryPayment onPaid={() => setPaid(true)} />
          ) : reviewData ? (
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
      </div>}
      {reviewData && confirmed && !paid && <div className="enquiry-payment-next"><PaymentNextSteps /></div>}
    </main>
  );
}
