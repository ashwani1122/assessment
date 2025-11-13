import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white shadow-md sticky top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4 py-3 flex justify-around items-center">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer tracking-wide"
        >
          RSMT
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="/overview" className="hover:text-gray-300">
              Overview
            </a>
          </li>
          <li>
            <a href="/courses" className="hover:text-gray-300">
              Courses
            </a>
          </li>
          <li>
            <a href="/fees" className="hover:text-gray-300">
              Fees
            </a>
          </li>
          <li>
            <a href="/placements" className="hover:text-gray-300">
              Placements
            </a>
          </li>
          <li>
            <a href="/facilities" className="hover:text-gray-300">
              Facilities
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-center py-3 space-y-3">
          <a
            href="/overview"
            className="block hover:bg-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Overview
          </a>
          <a
            href="/courses"
            className="block hover:bg-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </a>
          <a
            href="/fees"
            className="block hover:bg-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Fees
          </a>
          <a
            href="/placements"
            className="block hover:bg-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Placements
          </a>
          <a
            href="/facilities"
            className="block hover:bg-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Facilities
          </a>
        </div>
      )}
    </nav>
  );
}
