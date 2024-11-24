import React from "react";
import RegSideBar from "../common/regsidebar/RegSidebar";
import "./RegProfile.css";

export default function RegStatus() {
    return (
        <div className="RegStatusDiv1">
            <div className="RegStatusDiv1-1">
                <RegSideBar />
            </div>
            <div className="RegStatusDiv1-2">
                <div className="profile-header">
                    <div className="profile-info">
                        <img src="profile-image-url" alt="Profile" className="profile-picture" />
                        <h2 className="profile-name">Juan Dela Cruz L.</h2>
                        <p className="profile-role">College Freshman</p>
                        <p className="profile-id">20204758498</p>
                    </div>
                </div>
                <div className="profile-content">
                    <div className="profile-section">
                        <h3>Personal Information</h3>
                        <ul>
                            <li>Date of Birth: 01/21/2000</li>
                            <li>Address: Bulacan, Malolos, Catmon, Blk. 143, Sikatuna St.</li>
                            <li>Sex: Male</li>
                            <li>Civil Status: Single</li>
                            <li>PWD: Yes</li>
                            <li>Religion: Roman Catholic</li>
                            <li>Phone Number: 091953654850</li>
                        </ul>
                    </div>
                    <div className="profile-section">
                        <h3>Current Status</h3>
                        <ul>
                            <li>Current School: Bulacan State University</li>
                            <li>Current Scholarship Program: APKA</li>
                            <li>Current Application Status: In Progress</li>
                            <li>Last Active: Currently Active</li>
                        </ul>
                    </div>
                    <div className="profile-section">
                        <h3>Education Status</h3>
                        <ul>
                            <li>Course: BSIT</li>
                            <li>Number of Units: 23</li>
                            <li>General Average: 1.183</li>
                            <li>Level/Year: 1st Year</li>
                            <li>Semester: 2nd Semester</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
