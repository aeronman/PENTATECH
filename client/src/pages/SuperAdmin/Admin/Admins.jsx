import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEye, FaEdit } from 'react-icons/fa'; // Importing icons
import SuperAdminSidebar from "../common/SuperAdminSidebar/SuperAdminSidebar";
import RegProfile from "../common/regprofile/regprofile";
import "./Admins.css";

const Admins = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="AdminStatus1">
      <div className="AdminStatus1-1">
        <SuperAdminSidebar />
      </div>
      <div className="AdminStatus1-2">
        <div className="AdminStatus1-2-1">
          <RegProfile />
        </div>
        <div className="AdminStatus1-2-2">
          {/* Title Section */}
          <div className="table-header">
            <h2>Admins</h2>
          </div>
        {/* Divider Line */}
        <hr className="divider-line" />

          {/* Actions Section (Search Bar + Add Admin Button) */}
          <div className="actions-container">
            {/* Search Bar */}
            <div className="search-container">
              <input
                type="text"
                className="search-bar"
                placeholder="Search Admins..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <FaSearch className="search-icon" />
            </div>

            {/* Add Admin Button */}
            <button className="add-admin-btn">
              <FaPlus className="add-icon" />
              Add Admin
            </button>
          </div>


          {/* Table */}
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th> {/* New Actions column */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>johndoe@example.com</td>
                <td>Active</td>
                <td>
                  <button className="action-btn view-btn">
                    <FaEye /> View
                  </button>
                  <button className="action-btn edit-btn">
                    <FaEdit /> Edit
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>janesmith@example.com</td>
                <td>Inactive</td>
                <td>
                  <button className="action-btn view-btn">
                    <FaEye /> View
                  </button>
                  <button className="action-btn edit-btn">
                    <FaEdit /> Edit
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Emily Davis</td>
                <td>emilydavis@example.com</td>
                <td>Active</td>
                <td>
                  <button className="action-btn view-btn">
                    <FaEye /> View
                  </button>
                  <button className="action-btn edit-btn">
                    <FaEdit /> Edit
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Michael Brown</td>
                <td>michaelbrown@example.com</td>
                <td>Pending</td>
                <td>
                  <button className="action-btn view-btn">
                    <FaEye /> View
                  </button>
                  <button className="action-btn edit-btn">
                    <FaEdit /> Edit
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Sarah Wilson</td>
                <td>sarahwilson@example.com</td>
                <td>Active</td>
                <td>
                  <button className="action-btn view-btn">
                    <FaEye /> View
                  </button>
                  <button className="action-btn edit-btn">
                    <FaEdit /> Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admins;
