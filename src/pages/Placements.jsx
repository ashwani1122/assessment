import React from "react";
import { useNavigate } from "react-router-dom";
import CTAButtons from "../components/CTAButton";
export default function Placements() {
    

    const navigate = useNavigate();
    const universityName = "RSMT";
    const placements = {
      highestPackage: 45,
      averagePackage: 12,
      placementRate: 90,
      topRecruiters: ["Google", "Amazon", "Microsoft", "Meta"],
      topDomain: "Computer Science",
    };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 onClick={()=>navigate("/")} className="text-3xl font-bold text-blue-700 mb-2 cursor-pointer">
          {universityName} – Placement Overview
        </h1>
        <p className="text-gray-600 mb-8">
          Here’s an insight into our recent placement statistics and top recruiters.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-xl bg-green-50">
            <h2 className="text-xl font-semibold text-green-800 mb-3">Placement Highlights</h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Highest Package: ₹{placements.highestPackage} LPA</li>
              <li>Average Package: ₹{placements.averagePackage} LPA</li>
              <li>Placement Rate: {placements.placementRate}%</li>
              <li>Top Domain: {placements.topDomain}</li>
            </ul>
          </div>

          <div className="p-6 border rounded-xl bg-blue-50">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Top Recruiters</h2>
            <div className="grid grid-cols-2 gap-3 text-gray-700">
              {placements.topRecruiters.map((company, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 bg-white rounded-lg shadow-sm text-center border"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
      <CTAButtons/>
    </div>
  );
}
