import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import { FaHome, FaFileAlt, FaUserGraduate, FaSignOutAlt, FaTasks, FaCommentDots, FaUserTie, FaUser } from "react-icons/fa"; // React Icons

import "./AdminSidebar.css";

export default function AdminSideBar() {
    const location = useLocation(); // Get the current location

    return (
        <div className="AdminsidebarDiv">
            <div className="AdminLogoNameDiv">
                <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1719735599/Ph_seal_bulacan_malolos_400x400_nkfoxm.png" alt="Philippine Seal" />
                <h1>ScholarEase</h1>
            </div>
            <div className="AdminListDiv">
                <span className={location.pathname === "/Admin/Dashboard" ? "active" : ""}>
                    <FaHome />
                    <Link className="removeDeco" to="/Admin/Dashboard">Dashboard</Link>
                </span>
                <span className={location.pathname === "/Admin/Application" ? "active" : ""}>
                    <FaFileAlt />
                    <Link className="removeDeco" to="/Admin/Application">Application</Link>
                </span>
                <span className={location.pathname === "/Admin/Status" ? "active" : ""}>
                    <FaTasks />
                    <Link className="removeDeco" to="/Admin/Status">Status</Link>
                </span>
                <span className={location.pathname === "/Admin/Scholars" ? "active" : ""}>
                    <FaUserGraduate />
                    <Link className="removeDeco" to="/Admin/Scholars">Scholars</Link>
                </span>
                <span className={location.pathname === "/Admin/Profile" ? "active" : ""}>
                    <FaUser />
                    <Link className="removeDeco" to="/Admin/Profile">Profile</Link>
                </span>
            </div>
            <div className="AdminListDiv2">
                <hr />
                <span className={location.pathname === "/Admin/Feedbacks" ? "active" : ""}>
                    <FaCommentDots />
                    <Link className="removeDeco" to="/Admin/Feedbacks">Feedbacks</Link>
                </span>
                <span className={location.pathname === "/login" ? "active" : ""}>
                    <FaSignOutAlt />
                    <Link className="removeDeco" to="/login">Sign Out</Link>
                </span>
                <p>ScholarEase @2024</p>
            </div>
        </div>
    );
}
