import React from "react";
import { useNavigate } from "react-router-dom";
import CTAButtons from "../components/CTAButton";

export default function Fees() {
    const navigate = useNavigate();
const universityName = "RSMT";
    const feesData = [
      {
        courseName: "B.Tech",
        tuitionFee: 100000,
        hostelFee: 50000,
        scholarships: ["Scholarship 1", "Scholarship 2"],
      },
      {
        courseName: "MBA",
        tuitionFee: 120000,
        hostelFee: 60000,
        scholarships: ["Scholarship 3", "Scholarship 4"],
      },
      {
        courseName: "BCA",
        tuitionFee: 80000,
        hostelFee: 40000,
        scholarships: ["Scholarship 5", "Scholarship 6"],
      },
    ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 onClick={()=>navigate("/")} className="text-3xl font-bold text-blue-700 mb-2 cursor-pointer">
          {universityName} – Fee Structure
        </h1>
        <p className="text-gray-600 mb-8">
          Detailed breakdown of course-wise fees, including tuition, hostel, and available scholarships.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Course</th>
                <th className="px-4 py-3 text-left">Tuition Fee (₹/Year)</th>
                <th className="px-4 py-3 text-left">Hostel Fee (₹/Year)</th>
                <th className="px-4 py-3 text-left">Scholarships</th>
              </tr>
            </thead>
            <tbody>
              {feesData.map((fee, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-3">{fee.courseName}</td>
                  <td className="px-4 py-3">{fee.tuitionFee}</td>
                  <td className="px-4 py-3">{fee.hostelFee}</td>
                  <td className="px-4 py-3">{fee.scholarships.join(", ")}</td>
                </tr>
              ))}
            </tbody>        
          </table>
        </div>
      </div>
      <CTAButtons/>
    </div>
  );
};  
    