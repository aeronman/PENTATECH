import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { initializeGapiClient } from "./utils/googleCalendarUtils";
import PageWithChatbot from "./components/PageWithChatbot";

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
import RegInterview from "./pages/Registered/Interview/RegisteredInterview";

// Admin Pages
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";
import AdminApplication from "./pages/Admin/Application/AdminApplication";
import AdminFAQs from "./pages/Admin/FAQ's/AdminFAQs";
import AdminFeedbacks from "./pages/Admin/Feedback/AdminFeedbacks";
import AdminInterview from "./pages/Admin/Interview/AdminInterview";
import AdminScholars from "./pages/Admin/Scholars/AdminScholars";
import AdminStatus from "./pages/Admin/Status/AdminStatus";
import AdminProfile from "./pages/Admin/Profile/AdminProfile";
import AdminViewDetails from "./pages/Admin/ViewDetails/ViewDetails";
import AdminEditDetails from "./pages/Admin/EditDetails/RegApplicationForm";
import AdminQR from "./pages/Admin/ScanQR/ScanQR";

// SuperAdmin Pages
import SuperAdminDashboard from "./pages/SuperAdmin/Dashboard/SuperAdminDashboard";
import SuperAdminApplication from "./pages/SuperAdmin/Application/SuperAdminApplication";
import SuperAdminFAQs from "./pages/SuperAdmin/FAQ's/SuperAdminFAQs";
import SuperAdminFeedbacks from "./pages/SuperAdmin/Feedback/SuperAdminFeedbacks";
import SuperAdminInterview from "./pages/SuperAdmin/Interview/SuperAdminInterview";
import SuperAdminScholars from "./pages/SuperAdmin/Scholars/SuperAdminScholars";
import SuperAdminStatus from "./pages/SuperAdmin/Status/SuperAdminStatus";
import SuperAdminProfile from "./pages/SuperAdmin/Profile/SuperAdminProfile";
import SuperAdminAdmins from "./pages/SuperAdmin/Admin/Admins";

import "./App.css";

export default function App() {
  const [userType, setUserType] = useState(null);
  
  useEffect(() => {
    // Initialize the Google API Client
    initializeGapiClient()
      .then(() => {
        console.log("GAPI client initialized successfully!");
      })
      .catch((error) => {
        console.error("Error initializing GAPI client:", error);
      });
      
    // Fetch user type from localStorage
    const storedUserType = localStorage.getItem("usertype");
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  // Function to protect routes based on user type
  const ProtectedRoute = ({ element, allowedUserTypes }) => {
    // Ensure that userType is initialized before rendering routes
    if (userType === null) {
      return <div>Loading...</div>; // You can show a loading indicator while fetching the user type
    }
    
    if (!allowedUserTypes.includes(userType)) {
      return <Navigate to="/" />; // Redirect to homepage if userType doesn't match
    }

    return element;
  };

  return (
    <div>
      <Routes>
        {/* Guest Routes */}
        <Route element={<PageWithChatbot />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* Registered User Routes */}
        <Route element={<PageWithChatbot />}>
          <Route
            path="/regDashboard"
            element={<ProtectedRoute element={<RegHome />} allowedUserTypes={["Student"]} />}
          />
          <Route
            path="/regFAQs"
            element={<ProtectedRoute element={<RegFAQs />} allowedUserTypes={["Student"]} />}
          />
          <Route
            path="/regFeedbacks"
            element={<ProtectedRoute element={<RegFeedbacks />} allowedUserTypes={["Student"]} />}
          />
          <Route
            path="/regApplication"
            element={<ProtectedRoute element={<RegApplication1 />} allowedUserTypes={["Student"]} />}
          />
          <Route
            path="/regStatus"
            element={<ProtectedRoute element={<RegStatus />} allowedUserTypes={["Student"]} />}
          />
          <Route
            path="/regProfile"
            element={<ProtectedRoute element={<RegProfile />} allowedUserTypes={["Student"]} />}
          />
          <Route
            path="/regInterview"
            element={<ProtectedRoute element={<RegInterview />} allowedUserTypes={["Student"]} />}
          />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/Admin/Dashboard"
          element={<ProtectedRoute element={<AdminDashboard />} allowedUserTypes={["admin"]} />}
        />
        <Route
          path="/Admin/Application"
          element={<ProtectedRoute element={<AdminApplication />} allowedUserTypes={["admin"]} />}
        />
        <Route
          path="/Admin/Feedbacks"
          element={<ProtectedRoute element={<AdminFeedbacks />} allowedUserTypes={["admin"]} />}
        />
        <Route
          path="/Admin/ViewDetails"
          element={<ProtectedRoute element={<AdminViewDetails />} allowedUserTypes={["admin","superadmin"]} />}
        />
        <Route
          path="/Admin/EditDetails"
          element={<ProtectedRoute element={<AdminEditDetails />} allowedUserTypes={["admin"]} />}
        />
        <Route
          path="/Admin/Scholars"
          element={<ProtectedRoute element={<AdminScholars />} allowedUserTypes={["admin"]} />}
        />
        <Route
          path="/Admin/Status"
          element={<ProtectedRoute element={<AdminStatus />} allowedUserTypes={["admin"]} />}
        />
        <Route
          path="/Admin/Profile"
          element={<ProtectedRoute element={<AdminProfile />} allowedUserTypes={["admin"]} />}
        />
        <Route
          path="/Admin/Interview"
          element={<ProtectedRoute element={<AdminInterview />} allowedUserTypes={["admin"]} />}
        />
         <Route
          path="/Admin/QR"
          element={<ProtectedRoute element={<AdminQR />} allowedUserTypes={["admin"]} />}
        />

        {/* SuperAdmin Routes */}
        <Route
          path="/SuperAdmin/Dashboard"
          element={<ProtectedRoute element={<SuperAdminDashboard />} allowedUserTypes={["superadmin"]} />}
        /> 
         <Route
          path="/SuperAdmin/Application"
          element={<ProtectedRoute element={<SuperAdminApplication />} allowedUserTypes={["superadmin"]} />}
        />
        <Route
          path="/SuperAdmin/FAQs"
          element={<ProtectedRoute element={<SuperAdminFAQs />} allowedUserTypes={["superadmin"]} />}
        />
        <Route
          path="/SuperAdmin/Feedbacks"
          element={<ProtectedRoute element={<SuperAdminFeedbacks />} allowedUserTypes={["superadmin"]} />}
        />
        <Route
          path="/SuperAdmin/Interview"
          element={<ProtectedRoute element={<SuperAdminInterview />} allowedUserTypes={["superadmin"]} />}
        />
        <Route
          path="/SuperAdmin/Scholars"
          element={<ProtectedRoute element={<SuperAdminScholars />} allowedUserTypes={["superadmin"]} />}
        />
        <Route
          path="/SuperAdmin/Status"
          element={<ProtectedRoute element={<SuperAdminStatus />} allowedUserTypes={["superadmin"]} />}
        />
        <Route
          path="/SuperAdmin/Profile"
          element={<ProtectedRoute element={<SuperAdminProfile />} allowedUserTypes={["superadmin"]} />}
        />
        <Route
          path="/SuperAdmin/Admins"
          element={<ProtectedRoute element={<SuperAdminAdmins />} allowedUserTypes={["superadmin"]} />}
        />
    

      </Routes>
    </div>
  );
}
