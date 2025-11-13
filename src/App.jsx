import React from "react";

import University1 from "./pages/University1";
import Navbar from "./components/navbar/Navbar";
import Overview from "./components/OverView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./pages/Cources";
import Fees from "./pages/FeesStucture";
import Placements from "./pages/Placements";
import Facilities from "./pages/Facilites";
import LeadForm from "./components/LeadForm";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/overview" element={<Overview/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/fees" element={<Fees/>}/>
      <Route path="/placements" element={<Placements/>}/>
      <Route path="/facilities" element={<Facilities/>}/>
      <Route path="/apply"  element={<LeadForm/>}/>
      
      <Route path="/" element={
        <>
          <Navbar />
          <div className="space-y-10 bg-gradient-to-br from-blue-500 to-pink-500 p-4  shadow-xl text-white h-full min-h-screen">
          <University1 />
          </div>
        </>
      } />
      
    </Routes>
      
    </BrowserRouter>
   
  );
}
