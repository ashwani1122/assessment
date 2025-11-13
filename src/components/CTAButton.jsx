import React from "react";

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      <a
        href="/fees"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 shadow-md transition-all"
      >
        Check Course-wise Fees
      </a>

      <a
        href="/brochure.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 shadow-sm transition-all"
      >
        Download Brochure
      </a>

      <a
        href="/apply"
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 shadow-md transition-all"
      >
        Apply Now
      </a>
    </div>
  );
}
