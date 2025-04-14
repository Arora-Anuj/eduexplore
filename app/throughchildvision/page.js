"use client";

import { useState } from "react";

export default function ThroughChildVisionPage() {
  const [showForm, setShowForm] = useState(true);

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSehIBv36U6iY2rIKjUhtZ4mO89ERSoIC6OHzrC3jX8unn3J1g/viewform?embedded=true"; // <-- Replace with your actual form embed link

  const googleSheetUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1MI0DDtlcSnj9gtSDyt8cXXsqDvwc-eVU89l5wgYu6RxlT8YWFiVwMymW3Q8bLpdaJ9z1kCCSn_QH/pubhtml?widget=true&amp;headers=false"; // <-- Replace with your actual sheet embed link

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#1B1D30]">
            Through Child Vision Dashboard
          </h1>
          <button
            className="bg-[#1B1D30] text-white px-6 py-2 rounded-lg hover:bg-[#111322] transition"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "View Responses" : "Back to Form"}
          </button>
        </div>

        <div className="w-full h-[80vh] rounded-lg overflow-hidden shadow-lg border">
          <iframe
            src={showForm ? googleFormUrl : googleSheetUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title={showForm ? "Google Form" : "Google Sheet"}
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
