import React, { useState } from "react";
import Navbar from "./navbar/Navbar";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    course: "",
    year: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://eocj4y5prvpniuk.m.pipedream.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("✅ Submitted successfully!");
        
      } else {
        alert("❌ Submission failed");
      }
    } catch {
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-10"
      >
        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2"
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          pattern="[0-9]{10}"
          placeholder="Phone Number (10-digit)"
          className="w-full border p-2"
          onChange={handleChange}
          required
        />
        <input
          name="state"
          placeholder="State"
          className="w-full border p-2"
          onChange={handleChange}
          required
        />
        <input
          name="course"
          placeholder="Course Interested"
          className="w-full border p-2"
          onChange={handleChange}
          required
        />
        <select name="year" onChange={handleChange} className="w-full border p-2">
          <option value="">Select Intake Year</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
        </select>
        <label className="flex items-center">
          <input type="checkbox" name="consent" onChange={handleChange} required />
          <span className="ml-2">I agree to be contacted</span>
        </label>

        <button
          disabled={loading}
          className={`w-full p-2 rounded-md text-white transition-all duration-200 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}
