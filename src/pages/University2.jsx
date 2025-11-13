import React from "react";
import { useState } from "react";
import LeadForm from "../components/LeadForm";
import FeeModal from "../components/FeeModal";

export default function University1() {
  const [showModal, setShowModal] = useState(false);
  const backend = "https://your-backend.onrender.com/api/university2";

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Bright Future University</h1>
      <p>Known for excellence in engineering, management, and computer science education.</p>

      <div className="mt-6 space-x-3">
        <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md">Check Course-wise Fees</button>
        <a href="#" className="bg-green-600 text-white px-4 py-2 rounded-md">Download Brochure</a>
        <a href="#apply" className="bg-yellow-500 text-white px-4 py-2 rounded-md">Apply Now</a>
      </div>

      <h2 id="apply" className="text-2xl mt-8 mb-4 font-semibold">Apply Now</h2>
      <LeadForm />

      <FeeModal open={showModal} onClose={() => setShowModal(false)} apiUrl={backend} />
    </div>
  );
}
