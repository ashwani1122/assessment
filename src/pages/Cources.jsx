import React from "react";
import { useNavigate } from "react-router-dom";
import CTAButtons from "../components/CTAButton";

export default function Courses() {
    

    const navigate = useNavigate();

    const universityName = "RSMT";
    const courses = [
      {
        name: "B.Tech",
        duration: "4 years",
        fees: "₹1,00,000 - ₹2,50,000",
      },
      {
        name: "MBA",
        duration: "2 years",
        fees: "₹80,000 - ₹200,000",
      },
      {
        name: "BCA",
        duration: "3 years",
        fees: "₹60,000 - ₹150,000",
      },
      {
        name:"BBA",
        duration:"3 years",
        fees:"₹60,000 - ₹150,000"
      }
    ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 onClick={()=> navigate("/")} className="text-3xl font-bold text-blue-700 mb-2 cursor-pointer">
          {universityName} – Courses Offered
        </h1>
        <p className="text-gray-600 mb-8">
          Explore our range of undergraduate and postgraduate programs designed to equip you
          with the skills needed for a successful career.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {course.name}
              </h2>

              <p className="text-gray-600 mb-2">
                <strong>Duration:</strong> {course.duration}
              </p>

              <p className="text-gray-600 mb-2">
                <strong>Eligibility:</strong> {course.eligibility}
              </p>

              <p className="text-gray-600 mb-2">
                <strong>Fee:</strong> ₹{course?.fee?.toLocaleString()} / year
              </p>

              {course.specializations && course.specializations.length > 0 && (
                <div className="mt-3">
                  <strong className="text-gray-700">Specializations:</strong>
                  <ul className="list-disc ml-5 text-gray-700">
                    {course.specializations.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <CTAButtons/>
    </div>
  );
}
