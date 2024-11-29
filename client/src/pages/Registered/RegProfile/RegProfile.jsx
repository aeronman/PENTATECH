import React, { useState, useEffect } from 'react';
import './RegProfile.css'; // Import your CSS styles
import RegSideBar from "../common/regsidebar/RegSidebar";
import RegProfile from "../common/regprofile/regprofile";

const UserProfile = () => {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/100"); // Initial avatar

  // Load avatar from local storage on component mount
  useEffect(() => {
    const storedAvatar = localStorage.getItem("avatar");
    if (storedAvatar) {
      setAvatar(storedAvatar);
    }
  }, [])

  // Handle avatar change
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newAvatar = e.target.result;
        setAvatar(newAvatar);
        localStorage.setItem("avatar", newAvatar); // Save to local storage
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="regProfile1">
      <div className="regProfile1-1">
        <RegSideBar />
      </div>
      <div className="regProfile1-2">
        <div className="regProfile1-2-1">
          <RegProfile />
        </div>
        <div className="profile-container">
          {/* Left Section */}
          <div className="profile-current">
            <div className="profile-card">
            <div className="avatar-container">
                <img
                  src={avatar}
                  alt="Profile Avatar"
                  className="profile-avatar"
                />
                <button
                  className="edit-avatar-button"
                  onClick={() => document.getElementById('avatar-upload').click()}
                >
                  <i className="pencil-icon">&#9998;</i> {/* Unicode pencil icon */}
                </button>
              </div>
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: 'none' }}
              />

              <h2 className="profile-id">20204758498</h2>
              <h1 className="profile-name">Carl Cedrick L. Tolentino</h1>
              <p className="profile-status">College Freshman</p>
              {/* Upload Avatar */}
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: 'none' }}
              />
              
            </div>
            <div className="details-section current-school-section">
              <div className="detail-item">
                <span className="detail-label">Current School:</span>
                <span className="detail-value">Bulacan State University</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Current Scholarship Program:</span>
                <span className="detail-value">APKA</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Current Application Status:</span>
                <span className="detail-value status-badge">In Progress</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Last Active:</span>
                <span className="detail-value">Currently Active</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="details-container">
            <div className="personal-info-section">
              <h3>Personal Information</h3>
              <div className="detail-item">
                <span className="detail-label">Date of Birth:</span>
                <span className="detail-value">06/14/2003</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Address:</span>
                <span className="detail-value">Bulacan, Malolos, Catmon, Blk. 143, Sikatuna St.</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Sex:</span>
                <span className="detail-value">Male</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Civil Status:</span>
                <span className="detail-value">Single</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">PWD:</span>
                <span className="detail-value">No</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Religion:</span>
                <span className="detail-value">Roman Catholic</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Phone Number:</span>
                <span className="detail-value">091953654850</span>
              </div>
            </div>
            <div className="education-status-section">
              <h3>Education Status</h3>
              <div className="detail-item">
                <span className="detail-label">Course:</span>
                <span className="detail-value">BSIT</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Number of Units:</span>
                <span className="detail-value">5</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">General Average:</span>
                <span className="detail-value">1.183</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Level/Year:</span>
                <span className="detail-value">4th Year</span>
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Semester:</span>
                <span className="detail-value">2nd Semester</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;