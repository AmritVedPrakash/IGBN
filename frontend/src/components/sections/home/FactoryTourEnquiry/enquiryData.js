export const enquirySteps = [
  ["1", "Enquiry Details", "(You are here)"],
  ["2", "Review & Confirm", ""],
  ["3", "Pay Processing Fee", "(US$ 2)"],
  ["4", "Supplier Search", "by IGBN"],
  ["5", "Receive Meeting", "Offer"],
  ["6", "Payment & Booking", "Confirmed"],
  ["7", "Visit, Meet & Source", ""],
];

export const enquirySections = [
  { number: "1", title: "Visit Schedule", fields: [["preferredDate", "Preferred Visit Date", "date"], ["alternativeDates", "Alternative Dates", "date"], ["dateFlexibility", "Date Flexibility", "select", ["Select Option", "Flexible", "Fixed Date"]]] },
  { number: "2", title: "Location", fields: [["preferredCity", "Preferred City", "select", ["Select City", "Mumbai", "Delhi", "Ahmedabad", "Bengaluru", "Chennai", "Hyderabad", "Other"]], ["region", "Industrial Region / Manufacturing Hub", "select", ["Select Region", "North India", "West India", "South India", "East India", "Multiple Regions"]]] },
  { number: "3", title: "Product Requirements", fields: [["productCategory", "Product Category", "select", ["Select Product Category", "Textiles & Garments", "Engineering & Machinery", "Food & Beverages", "Chemicals & Plastics", "Auto Components", "Electronics", "Other"]], ["specificProducts", "Specific Products", "text", "e.g. Leather bags, Wallets, Belts"], ["specifications", "Specifications", "text", "e.g. Material, size, quality, etc."], ["estimatedQuantity", "Estimated Quantity", "select", ["Select Estimated Quantity", "Small Quantity", "Medium Quantity", "Large Quantity", "To be discussed"]]] },
  { number: "4", title: "Visitors", fields: [["numberOfVisitors", "Number of Visitors", "select", ["Select Number", "1", "2", "3", "4", "5+"]], ["meetingType", "Preferred Meeting Type", "select", ["Select Meeting Type", "Factory Visit", "Supplier Meeting", "Factory Visit + Meeting"]]] },
  { number: "5", title: "Company Details", fields: [["companyName", "Company Name", "text", "Enter company name"], ["country", "Country", "select", ["Select Country", "India", "United States", "United Kingdom", "UAE", "Singapore", "Other"]], ["companyWebsite", "Company Website (Optional)", "text", "https://"]] },
  { number: "6", title: "Contact Details", fields: [["contactPerson", "Contact Person Name", "text", "Enter full name"], ["businessEmail", "Business Email", "email", "Enter business email"], ["phoneNumber", "Phone Number", "tel", "Enter phone number"]] },
  { number: "7", title: "Travel Details", optional: true, fields: [["arrivalDate", "Arrival Date", "date"], ["airport", "Airport", "text", "e.g. Indira Gandhi International (DEL)"], ["hotelDetails", "Hotel Details", "text", "Hotel name or area (if known)"]] },
  { number: "8", title: "Additional Requirements", optional: true, fields: [["specialRequests", "Special Requests", "text", "e.g. specific certifications, factory size, etc."], ["languageAssistance", "Language Assistance", "select", ["Select Option", "English", "Hindi", "Arabic", "Mandarin", "Other"]], ["additionalNotes", "Additional Notes", "textarea", "Any other information"]] },
];

export const enquiryWhySubmit = ["We find verified Indian manufacturers based on your requirements.", "You receive meeting offers with full details before making the balance payment.", "We assist with travel, local coordination and on-ground support.", "Transparent process with no commission on your business deals."];
export const enquiryNextSteps = ["Submit this enquiry form", "Review your information", "Pay US$ 2 processing fee", "We start searching for suitable suppliers", "You receive a meeting offer with supplier details", "Pay the balance amount to confirm your booking"];
