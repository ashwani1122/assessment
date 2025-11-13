import React from "react";
import { useNavigate } from "react-router-dom";
import CTAButtons from "../components/CTAButton";
export default function Facilities() {


    const navigate = useNavigate();
    let universityName = "RSMT";
    let facilities = [
      {
        name: "Modern Library",
        icon: "📚",
        description: "Over 50,000 books and digital resources for research and learning."
      },
      {
        name: "Computer Labs",
        icon: "💻",
        description: "High-speed internet and advanced hardware for coding and development."
      },
      {
        name: "Hostel Accommodation",
        icon: "🏠",
        description: "Safe, hygienic, and comfortable on-campus living for students."
      },
      {
        name: "Sports Complex",
        icon: "🏸",
        description: "Facilities for cricket, basketball, football, badminton, and more."
      },
      {
        name: "Cafeteria",
        icon: "☕",
        description: "Multi-cuisine cafeteria offering healthy and affordable meals."
      },
      {
        name: "Wi-Fi Enabled Campus",
        icon: "📶",
        description: "Seamless internet access across the entire campus."
      }
    ]

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 cursor-pointer">
        <h1 onClick={()=>navigate("/")} className="text-3xl font-bold text-blue-700 mb-2">
          {universityName} – Campus Facilities
        </h1>
        <p className="text-gray-600 mb-8">
          Discover our world-class facilities designed to enhance your learning and living experience.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((f, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-3">{f.icon || "🏫"}</div>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">{f.name}</h2>
              <p className="text-gray-700">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
      <CTAButtons/>
    </div>
  );
}
