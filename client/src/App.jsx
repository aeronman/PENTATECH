import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Utility for GAPI Client Initialization
import { initializeGapiClient } from "./utils/googleCalendarUtils";

// Guest Pages
import HomePage from "./pages/Guest/Homepage/Homepage";
import SignUp from "./pages/Guest/Sign-Up/SignUp";
import AboutUs from "./pages/Guest/About Us/AboutUs";
import Login from "./pages/Guest/Login/Login";

// Registered User Pages
import RegHome from "./pages/Registered/RegHome/RegHome";
import RegApplication1 from "./pages/Registered/RegApplication/RegApplicationForm";
import RegStatus from "./pages/Registered/RegStatus/RegStatus";
import RegProfile from "./pages/Registered/RegProfile/RegProfile";
import RegFAQs from "./pages/Registered/RegFAQs/RegFAQs";
import RegFeedbacks from "./pages/Registered/RegFeedbacks/RegFeedback";

// Admin Pages

import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";
import AdminApplication from "./pages/Admin/Application/AdminApplication";
import AdminFAQs from "./pages/Admin/FAQ's/AdminFAQs";
import AdminFeedbacks from "./pages/Admin/Feedback/AdminFeedbacks";
import AdminInterview from "./pages/Admin/Interview/AdminInterview";
import AdminScholars from "./pages/Admin/Scholars/AdminScholars";
import AdminStatus from "./pages/Admin/Status/AdminStatus";
import AdminProfile from "./pages/Admin/Profile/AdminProfile";


import "./App.css";

export default function App() {
  useEffect(() => {
    // Initialize the Google API Client
    initializeGapiClient()
      .then(() => {
        console.log("GAPI client initialized successfully!");
      })
      .catch((error) => {
        console.error("Error initializing GAPI client:", error);
      });
  }, []);

  return (
    <div>
      <Routes>
        {/* Guest Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Registered User Routes */}
        <Route path="/regDashboard" element={<RegHome />} />
        <Route path="/regFAQs" element={<RegFAQs />} />
        <Route path="/regFeedbacks" element={<RegFeedbacks />} />
        <Route path="/regApplication" element={<RegApplication1 />} />
        <Route path="/regStatus" element={<RegStatus />} />
        <Route path="/regProfile" element={<RegProfile />} />

        {/* Admin Routes */}
        <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
        <Route path="/Admin/Application" element={<AdminApplication />} />
        <Route path="/Admin/FAQs" element={<AdminFAQs />} />
        <Route path="/Admin/Feedbacks" element={<AdminFeedbacks />} />
        <Route
          path="/Admin/Interview"
          element={
            <AdminInterview
              applicantEmail="applicant@example.com" // Replace dynamically
            />
          }
        />
        <Route path="/Admin/Scholars" element={<AdminScholars />} />
        <Route path="/Admin/Status" element={<AdminStatus />} />
        <Route path="/Admin/Profile" element={<AdminProfile />} />

      </Routes>
    </div>
  );
}
