import React, { useState, useEffect } from 'react';
import './RegProfile.css';
import RegSidebar from "../common/regsidebar/RegSidebar"
import RegProfile from "../common/regprofile/regprofile"

const regProfile = () => {
  // State to hold the profile image URL
  const [profileImage, setProfileImage] = useState('');

  // Load the saved image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Set the image URL in state
        localStorage.setItem('profileImage', reader.result); // Save the image in localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="regProfile1">
        <div className="regProfile1-1">
            <RegSidebar />
        </div>
        <div className="regProfile1-2">
        <div className="regProfile1-2-1">
            <RegProfile />
        </div>
        </div>  
    </div>      
  );
};
export default regProfile;
