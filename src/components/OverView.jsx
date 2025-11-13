import React from "react";
import { useNavigate } from "react-router-dom";
import CTAButtons from "./CTAButton";
export default function Overview() {
    const navigate = useNavigate();
    const university = {
        name: "Bright Future University",
        courses: ["B.Tech", "MBA", "BCA"],
        fees: { min: 100000, max: 250000 },
        placements: { averagePackage: "8 LPA" },
        facilities: ["Library", "Hostel", "Wi-Fi", "Labs"],
      };
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 onClick={() => navigate("/")} className="text-3xl font-bold text-blue-700 mb-4 cursor-pointer">{"RSMT"}</h1>
        <p className="text-gray-700 mb-8">
          {"A leading institution committed to excellence in academics, innovation, and holistic student development."}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl bg-blue-50">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">📘 Courses Offered</h2>
            <ul className="list-disc ml-5 text-gray-700">
              {university.courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 border rounded-xl bg-green-50">
            <h2 className="text-xl font-semibold text-green-800 mb-3">🏫 Facilities</h2>
            <ul className="list-disc ml-5 text-gray-700">
              {university.facilities.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 border rounded-xl bg-yellow-50">
            <h2 className="text-xl font-semibold text-yellow-800 mb-3">💰 Fee Range</h2>
            <p className="text-gray-700">
              ₹{university.fees.min.toLocaleString()} – ₹{university.fees.max.toLocaleString()} per year
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-purple-50">
            <h2 className="text-xl font-semibold text-purple-800 mb-3">🎓 Placements</h2>
            <p className="text-gray-700">
              Average Package: <strong>{university.placements.averagePackage}</strong>
            </p>
          </div>
        </div>

        
      </div>
      <CTAButtons/>
    </div>
  );
}
