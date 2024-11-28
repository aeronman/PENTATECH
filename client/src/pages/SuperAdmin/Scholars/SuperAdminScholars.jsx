import React, { useRef, useState } from "react";
import "./SuperAdminScholars.css";
import SuperAdminSidebar from "../common/SuperAdminSidebar/SuperAdminSidebar";
import RegProfile from "../../Registered/common/regprofile/regprofile";

// Add FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faFileExport, faFileAlt, faUserFriends, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";

const Scholars = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [filterModalPosition, setFilterModalPosition] = useState({ top: 0, left: 0 });
  const filterButtonRef = useRef(null);

  const rowsPerPage = 10;

  const scholarsData = [
    { id: "2023258995", name: "John H. Doe", address: "456 Mabini Avenue, Malolos City, Bulacan", program: "APMA" },
    { id: "2023051211", name: "Juanito M. Santos", address: "456 Luna Street, Malolos, Bulacan", program: "NAVMSP" },
    { id: "2021839024", name: "Maria T. dela Cruz", address: "Del Pilar Avenue, Barangay San Vicente, Malolos City, Bulacan", program: "APKA" },
    { id: "2023278902", name: "Antonio S. Reyes", address: "321 Jacinto Street, Barangay Tikay, Malolos City, Bulacan", program: "TPKM" },
    { id: "2024965173", name: "Luzviminda G. Garcia", address: "654 Rizal Street, Barangay Caingin, Malolos City, Bulacan", program: "TPKM" },
    { id: "2023930456", name: "Rodrigo C. Cruz", address: "987 Bonifacio Street, Barangay Atlag, Malolos City, Bulacan", program: "FASHS" },
    { id: "2024578312", name: "Estrella R. Martinez", address: "210 Quezon Street, Barangay Catmon, Malolos City, Bulacan", program: "NAVMSP" },
    { id: "2023857318", name: "Carmen L. Santos", address: "120 P. Gomez Street, Barangay Sto. Rosario, Malolos City, Bulacan", program: "APKA" },
    { id: "2023156719", name: "Fernando D. Cruz", address: "765 Rizal Avenue, Barangay Tikay, Malolos City, Bulacan", program: "FASHS" },
    { id: "2023245678", name: "Elena B. Lopez", address: "85 Zamora Street, Barangay San Agustin, Malolos City, Bulacan", program: "NAVMSP" },
    { id: "2023123456", name: "Jose C. Ramirez", address: "321 Mabini Avenue, Barangay Sto. Niño, Malolos City, Bulacan", program: "APKA" },
    { id: "2023987654", name: "Ana D. Reyes", address: "456 Luna Street, Barangay San Gabriel, Malolos City, Bulacan", program: "TPKM" },
    { id: "2023678945", name: "Carlos G. Torres", address: "567 Bonifacio Avenue, Barangay Tikay, Malolos City, Bulacan", program: "FASHS" },
    { id: "2023456123", name: "Laura E. Bautista", address: "789 Rizal Street, Barangay Catmon, Malolos City, Bulacan", program: "NAVMSP" },
    { id: "2023547865", name: "Victor F. Perez", address: "987 Jacinto Avenue, Barangay Atlag, Malolos City, Bulacan", program: "APMA" },
    { id: "2023987123", name: "Gloria G. Velasco", address: "654 Rizal Street, Barangay Caingin, Malolos City, Bulacan", program: "TPKM" },
    { id: "2023876543", name: "Francisco H. Villanueva", address: "432 P. Gomez Street, Barangay San Vicente, Malolos City, Bulacan", program: "FASHS" },
    { id: "2023765432", name: "Teresa I. De Leon", address: "345 Mabini Avenue, Barangay Sto. Rosario, Malolos City, Bulacan", program: "APKA" },
    { id: "2023654321", name: "Manuel J. Cruz", address: "210 Rizal Avenue, Barangay Tikay, Malolos City, Bulacan", program: "NAVMSP" },
    { id: "2023543210", name: "Isabel K. Santos", address: "123 Luna Street, Barangay Caingin, Malolos City, Bulacan", program: "TPKM" },
    { id: "2024012345", name: "Eleanor D. Aquino", address: "789 Rizal Avenue, Barangay San Vicente, Malolos City, Bulacan", program: "TPKM" },
    { id: "2024023456", name: "Juan A. Sanchez", address: "123 Bonifacio Street, Barangay Sto. Niño, Malolos City, Bulacan", program: "FASHS" },
    { id: "2024034567", name: "Miriam S. dela Rosa", address: "321 Mabini Avenue, Barangay Tikay, Malolos City, Bulacan", program: "NAVMSP" },
    { id: "2024045678", name: "Andrew G. Lopez", address: "654 Luna Street, Barangay Sto. Rosario, Malolos City, Bulacan", program: "TPKM" },
    { id: "2024056789", name: "Samantha R. Martinez", address: "456 Rizal Avenue, Barangay San Agustin, Malolos City, Bulacan", program: "APKA" },
    { id: "2024067890", name: "Lucas P. Aquino", address: "987 Jacinto Street, Barangay San Vicente, Malolos City, Bulacan", program: "FASHS" },
    { id: "2024078901", name: "Diana R. Mendoza", address: "210 Zamora Avenue, Barangay Atlag, Malolos City, Bulacan", program: "NAVMSP" },
    { id: "2024089012", name: "George L. Reyes", address: "567 Rizal Street, Barangay Tikay, Malolos City, Bulacan", program: "APMA" },
    { id: "2024090123", name: "Rachel A. Cruz", address: "432 P. Gomez Street, Barangay San Agustin, Malolos City, Bulacan", program: "TPKM" },
    { id: "2024101234", name: "Michael T. Villanueva", address: "120 Mabini Avenue, Barangay Sto. Niño, Malolos City, Bulacan", program: "FASHS" },
    { id: "2024112345", name: "Claire S. Bautista", address: "85 Zamora Street, Barangay Caingin, Malolos City, Bulacan", program: "APKA" },
    { id: "2024123456", name: "Jose E. Ramirez", address: "765 Luna Avenue, Barangay San Vicente, Malolos City, Bulacan", program: "FASHS" },
    { id: "2024134567", name: "Victor R. Perez", address: "345 Rizal Avenue, Barangay San Gabriel, Malolos City, Bulacan", program: "APKA" },
    { id: "2024145678", name: "Andrea D. Garcia", address: "789 Mabini Avenue, Barangay Catmon, Malolos City, Bulacan", program: "TPKM" },
    { id: "2024156789", name: "Henry S. Cruz", address: "210 Bonifacio Avenue, Barangay Sto. Rosario, Malolos City, Bulacan", program: "FASHS" },
    { id: "2024167890", name: "Sofia M. Velasco", address: "120 Luna Street, Barangay Atlag, Malolos City, Bulacan", program: "TPKM" },
    { id: "2024178901", name: "Brandon A. Santos", address: "654 Rizal Street, Barangay San Vicente, Malolos City, Bulacan", program: "APKA" },
    { id: "2024189012", name: "Isabella G. Lopez", address: "432 Mabini Avenue, Barangay Tikay, Malolos City, Bulacan", program: "NAVMSP" },
    { id: "2024190123", name: "David P. Ramirez", address: "321 Jacinto Street, Barangay Caingin, Malolos City, Bulacan", program: "TPKM" },
    { id: "2024201234", name: "Lillian A. Santos", address: "85 P. Gomez Avenue, Barangay Catmon, Malolos City, Bulacan", program: "FASHS" },
    { id: "2024212345", name: "Sophia T. Mendoza", address: "456 Rizal Street, Barangay San Agustin, Malolos City, Bulacan", program: "APKA" },
    { id: "2024223456", name: "Chris J. Bautista", address: "987 Bonifacio Street, Barangay Sto. Rosario, Malolos City, Bulacan", program: "NAVMSP" },
    { id: "2024234567", name: "Amelia D. Garcia", address: "765 Mabini Avenue, Barangay Tikay, Malolos City, Bulacan", program: "TPKM" },
    { id: "2024245678", name: "Emily T. Reyes", address: "123 Rizal Street, Barangay Atlag, Malolos City, Bulacan", program: "APMA" },
    { id: "2024256789", name: "Nathan G. Santos", address: "210 Bonifacio Avenue, Barangay San Gabriel, Malolos City, Bulacan", program: "TPKM" },
    { id: "2024267890", name: "Olivia M. Garcia", address: "345 Mabini Avenue, Barangay Sto. Niño, Malolos City, Bulacan", program: "FASHS" },
    { id: "2024278901", name: "Benjamin R. Velasco", address: "456 Luna Street, Barangay Catmon, Malolos City, Bulacan", program: "NAVMSP" },
    { id: "2024289012", name: "Chloe A. Cruz", address: "789 Jacinto Avenue, Barangay Tikay, Malolos City, Bulacan", program: "APKA" },
    { id: "2024290123", name: "Daniel S. Mendoza", address: "654 P. Gomez Street, Barangay San Vicente, Malolos City, Bulacan", program: "FASHS" },
    { id: "2024301234", name: "Ava B. Lopez", address: "987 Rizal Avenue, Barangay Caingin, Malolos City, Bulacan", program: "TPKM" }
];

const totalPages = Math.ceil(scholarsData.length / rowsPerPage);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

const currentData = scholarsData.slice(
  (currentPage - 1) * rowsPerPage,
  currentPage * rowsPerPage
);

const toggleFilterModal = () => {
  if (!isFilterModalOpen && filterButtonRef.current) {
    const buttonRect = filterButtonRef.current.getBoundingClientRect();
    const containerRect = document.querySelector(".SuperAdminSholars1-2-2").getBoundingClientRect();

    setFilterModalPosition({
      top: buttonRect.bottom - containerRect.top + 5,
      left: buttonRect.left - containerRect.left,
    });
  }
  setFilterModalOpen(!isFilterModalOpen);
};

return (
  <div className="SuperAdminSholars1">
    <div className="SuperAdminSholars1-1">
      <SuperAdminSidebar />
    </div>
    <div className="SuperAdminSholars1-2">
      <div className="SuperAdminSholars1-2-1">
        <RegProfile />
      </div>
      <div className="formTitle">
        <FontAwesomeIcon icon={faUserFriends} />
        <span>Scholars</span>
      </div>
      <div className="SuperAdminSholars1-2-2">
      <div className="header-section">
        <div className="search-and-actions">
          <div className="search-bar-container">
            <input type="text" placeholder="Search user" className="search-bar" />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
          <div className="action-buttons">
            <button className="filter-btn">
              <FontAwesomeIcon icon={faFilter} /> Filter
            </button>
            <button className="export-btn">
              <FontAwesomeIcon icon={faFileExport} /> Export
            </button>
            <button className="report-btn">
              <FontAwesomeIcon icon={faFileAlt} /> Report
            </button>
          </div>
        </div>
      </div>
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>Scholar ID</th>
              <th>Student Name</th>
              <th>Address</th>
              <th>Program</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((scholar, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{scholar.id}</td>
                <td>{scholar.name}</td>
                <td>{scholar.address}</td>
                <td>{scholar.program}</td>
                <td>
                  <button className="view-btn">
                    <FontAwesomeIcon icon={faEye} /> View
                  </button>
                  <button className="edit-btn">
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active-page" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {isFilterModalOpen && (
        <div
          className="filter-modal"
          style={{
            top: `${filterModalPosition.top}px`,
            left: `${filterModalPosition.left}px`,
          }}
        >
          <div className="filter-header">
            <h3>Filter Contents</h3>
            <button className="close-btn" onClick={toggleFilterModal}>
              &times;
            </button>
          </div>
          <div className="filter-content">
            {/* Filter options go here */}
            <button className="apply-filter-btn" onClick={toggleFilterModal}>
              Save
            </button>
              </div>
              <div className="filter-content">
                <div className="filter-columns">
                  <div className="left-column">
                    <h4>Sort By</h4>
                    <select>
                      <option value="">-- Select a column --</option>
                      <option value="name">Full Name</option>
                      <option value="id">ID</option>
                      <option value="scholarshipProgram">Scholarship Program</option>
                      <option value="scholarshipStatus">Scholarship Status</option>
                    </select>
                    <h5>Include:</h5>
                    <label><input type="checkbox" /> Active phone number</label>
                    <label><input type="checkbox" /> Pending electricity bill</label>
                    <label><input type="checkbox" /> Barangay</label>
                    <label><input type="checkbox" /> City/Municipality</label>
                    <label><input type="checkbox" /> Civil Status</label>
                    <label><input type="checkbox" /> Course</label>
                    <label><input type="checkbox" /> Current Level of Education (Sibling)</label>
                    <label><input type="checkbox" /> Date of Birth</label>
                    <label><input type="checkbox" /> Single parent?</label>
                    <label><input type="checkbox" /> Full name of the Father</label>
                    <label><input type="checkbox" /> Full name of the Mother</label>
                    <label><input type="checkbox" /> Grades/Marks (General Average)</label>
                    <label><input type="checkbox" /> Hobbies and other interests</label>
                    <label><input type="checkbox" /> ID/School/LRN Number</label>
                    <label><input type="checkbox" /> Last school attended</label>
                    <label><input type="checkbox" /> Level/Year</label>
                  </div>
                  <div className="right-column">
                    <h4>Order</h4>
                    <select>
                      <option value="ascending">Ascending</option>
                      <option value="descending">Descending</option>
                    </select>
                    <h5>                </h5>
                    <label><input type="checkbox" /> Full Name</label>
                    <label><input type="checkbox" /> Monthly Income/Salary</label>
                    <label><input type="checkbox" /> Name of sibling</label>
                    <label><input type="checkbox" /> Number of Units (if college)</label>
                    <label><input type="checkbox" /> Number of siblings</label>
                    <label><input type="checkbox" /> Number of siblings with own families</label>
                    <label><input type="checkbox" /> Occupation</label>
                    <label><input type="checkbox" /> Other Expenses?</label>
                    <label><input type="checkbox" /> PWD?</label>
                    <label><input type="checkbox" /> Province</label>
                    <label><input type="checkbox" /> Religion</label>
                    <label><input type="checkbox" /> Scholarship Program</label>
                    <label><input type="checkbox" /> School about to Attend</label>
                    <label><input type="checkbox" /> Semester</label>
                    <label><input type="checkbox" /> Sex</label>
                    <label><input type="checkbox" /> Street Address</label>
                    </div>
                </div>
                <button className="apply-filter-btn" onClick={toggleFilterModal}>
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
  
  );
};

export default Scholars;
