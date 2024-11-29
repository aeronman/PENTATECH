import React, { useState, useEffect } from "react";
import "./AdminProfile.css"; // Import your CSS styles
import RegSideBar from "../common/AdminSidebar/AdminSidebar";
import RegProfile from "../common/regprofile/regprofile";

const AdminProfile = () => {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/100"); // Initial avatar
  const [editName, setEditName] = useState(false); // Track name edit mode
  const [name, setName] = useState("Carl Cedrick L. Tolentino"); // Profile name state

   // Load avatar from local storage on component mount
   useEffect(() => {
    const storedAvatar = localStorage.getItem("adminavatar");
    if (storedAvatar) {
      setAvatar(storedAvatar);
    }
    const storedFormData = localStorage.getItem("formData");
  if (storedFormData) {
    setFormData(JSON.parse(storedFormData));
  }
  }, []);

  const [formData, setFormData] = useState({
    email: "carlcedrick.tolentino@gmail.com",
    linkedin: "https://www.linkedin.com/...",
    phoneNumber: "09614369512",
    lastActive: "Currently Active",
    dateOfBirth: "06/14/2003",
    address: "Bulacan, Malolos, Catmon, Blk. 143, Sikatuna St.",
    sex: "Male",
    civilStatus: "Single",
    pwd: "No",
    religion: "Roman Catholic",
  });

  const [editMode, setEditMode] = useState({
    detailsAdmin: false,
    personalInfo: false,
  });

  // Handle avatar change
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newAvatar = e.target.result;
        setAvatar(newAvatar);
        localStorage.setItem("adminavatar", newAvatar);  // Save to local storage
      };
      reader.readAsDataURL(file);
    }
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData)); // Save changes immediately
  };
  

  // Toggle edit mode for a box
  const toggleEditMode = (section) => {
    setEditMode((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleNameChange = (event) => {
    setName(event.target.value); // Update name state
  };

  return (
    <div className="regProfile1">
      <div className="regProfile1-1">
        <RegSideBar />
      </div>
      <div className="regProfile1-2">
        <div className="RegApplicationDiv1-2-1">
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
                  onClick={() => document.getElementById("avatar-upload").click()}
                >
                  <i className="pencil-icon">&#9998;</i> {/* Unicode pencil icon */}
                </button>
              </div>
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: "none" }}
              />
              {/* Name Section */}
        <div className="name-container">
          <button
            className="edit-name-button"
            onClick={() => setEditName(!editName)}
          >
            {editName ? "Save" : "Edit"}
          </button>
          {editName ? (
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="edit-name-input"
            />
          ) : (
            <h1 className="profile-name">{name}</h1>
          )}
        </div>
              <h2 className="profile-id">20204758498</h2>
              
              <p className="profile-admin">Admin</p>
            </div>

            <div className="details-admin">
              <button
                className="edit-button"
                onClick={() => toggleEditMode("detailsAdmin")}
              >
                {editMode.detailsAdmin ? "Save" : "Edit"}
              </button>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                {editMode.detailsAdmin ? (
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span className="detail-value">{formData.email}</span>
                )}
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Linkedin:</span>
                {editMode.detailsAdmin ? (
                  <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span className="detail-value">{formData.linkedin}</span>
                )}
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Phone Number:</span>
                {editMode.detailsAdmin ? (
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span className="detail-value">{formData.phoneNumber}</span>
                )}
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Last Active:</span>
                {editMode.detailsAdmin ? (
                  <input
                    type="text"
                    name="lastActive"
                    value={formData.lastActive}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span className="detail-value">{formData.lastActive}</span>
                )}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="details-container">
            <div className="personal-info-admin">
              <button
                className="edit-button"
                onClick={() => toggleEditMode("personalInfo")}
              >
                {editMode.personalInfo ? "Save" : "Edit"}
              </button>
              <h3>Personal Information</h3>
              <div className="detail-item">
                <span className="detail-label">Date of Birth:</span>
                {editMode.personalInfo ? (
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span className="detail-value">{formData.dateOfBirth}</span>
                )}
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Address:</span>
                {editMode.personalInfo ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span className="detail-value">{formData.address}</span>
                )}
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Sex:</span>
                {editMode.personalInfo ? (
                  <input
                    type="text"
                    name="sex"
                    value={formData.sex}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span className="detail-value">{formData.sex}</span>
                )}
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Civil Status:</span>
                {editMode.personalInfo ? (
                  <input
                    type="text"
                    name="civilStatus"
                    value={formData.civilStatus}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span className="detail-value">{formData.civilStatus}</span>
                )}
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">PWD:</span>
                {editMode.personalInfo ? (
                  <input
                    type="text"
                    name="pwd"
                    value={formData.pwd}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span className="detail-value">{formData.pwd}</span>
                )}
              </div>
              <div className="divider-line"></div>
              <div className="detail-item">
                <span className="detail-label">Religion:</span>
                {editMode.personalInfo ? (
                  <input
                    type="text"
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span className="detail-value">{formData.religion}</span>
                )}
              </div>
            </div>
            <div className="activity-log">
  <h3>Activity Log</h3>
  <div className="log-item">
    <span className="log-date">Date: April 15, 2024</span>
    <span className="log-activity">
      Activity: Approved scholarship application #SCH20240012 for student Juan Dela Cruz.
    </span>
  </div>
  <div className="divider-line"></div>
  <div className="log-item">
    <span className="log-date">Date: April 14, 2024</span>
    <span className="log-activity">
      Activity: Updated scholarship details for the "APKA" to extend application deadline to May 15, 2024.
    </span>
  </div>
  <div className="divider-line"></div>
  <div className="log-item">
    <span className="log-date">Date: April 12, 2024</span>
    <span className="log-activity">
      Activity: Sent notification to all scholarship applicants regarding upcoming interview schedule.
    </span>
  </div>
  <div className="divider-line"></div>
  <div className="log-item">
    <span className="log-date">Date: April 10, 2024</span>
    <span className="log-activity">
      Activity: Reviewed and processed documents submitted by scholarship applicant Maria Santos.
    </span>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
