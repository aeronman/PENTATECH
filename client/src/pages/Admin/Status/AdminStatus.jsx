import React, { useState } from "react";
import "./AdminStatus.css";
import AdminSidebar from "../common/AdminSidebar/AdminSidebar";
import RegProfile from "../../Registered/common/regprofile/regprofile";

// Add FontAwesome icons
import { FaCheck, FaClock, FaTimes, FaFilter, FaSearch, FaFileExport, FaSync } from "react-icons/fa";
import { FaGraduationCap } from 'react-icons/fa';

const StatusPage = () => {
  const applicants = [
    { id: 1, name: "Elijah B. Dela Cruz", mobile: "09125487456", email: "elijah.b.delacruz@gmail.com", status: "Approved" },
    { id: 2, name: "John H. Doe", mobile: "09239847563", email: "john.h.doe@gmail.com", status: "In Progress" },
    { id: 3, name: "Mark M. Santos", mobile: "09567483921", email: "mark.gantos.m@bulsu.edu.ph", status: "In Progress" },
    { id: 4, name: "Jane T. Cruz", mobile: "09337841731", email: "jane.cruz.t@ceu.edu.ph", status: "Approved" },
    { id: 5, name: "Mary C. Aquino", mobile: "09753641849", email: "aquino.c.mary@sti.edu.ph", status: "Declined" },
    { id: 6, name: "Paul A. Garcia", mobile: "09978456312", email: "paul.garcia.123@bulsu.edu.ph", status: "Approved" },
    { id: 7, name: "Samantha V. Reyes", mobile: "09456321789", email: "samantha.reyes@lyceum.edu.ph", status: "In Progress" },
    { id: 8, name: "George E. Tan", mobile: "09217845673", email: "george.tan@ue.edu.ph", status: "Declined" },
    { id: 9, name: "Angela P. Dizon", mobile: "09631247859", email: "angela.dizon@ateneo.edu.ph", status: "Approved" },
    { id: 10, name: "Bryan L. Gomez", mobile: "09185647321", email: "bryan.gomez@ust.edu.ph", status: "Declined" },
    { id: 11, name: "Carla J. Fernandez", mobile: "09258671345", email: "carla.fernandez@tip.edu.ph", status: "In Progress" },
    { id: 12, name: "Kenneth Galman", mobile: "09410482921", email: "kenneth.galman@tip.edu.ph", status: "In Progress" },
    { id: 13, name: "Sophia T. Cruz", mobile: "09173584726", email: "sophia.cruz@ceu.edu.ph", status: "Approved" },
    { id: 14, name: "Michael J. Rivera", mobile: "09284573812", email: "michael.rivera@ust.edu.ph", status: "Declined" },
    { id: 15, name: "Patricia L. Ramos", mobile: "09432658741", email: "patricia.ramos@lyceum.edu.ph", status: "Approved" },
    { id: 16, name: "James K. Velasco", mobile: "09158473925", email: "james.velasco@up.edu.ph", status: "In Progress" },
    { id: 17, name: "Emily C. Bautista", mobile: "09365487123", email: "emily.bautista@ust.edu.ph", status: "Declined" },
    { id: 18, name: "Nathan G. Salvador", mobile: "09487563124", email: "nathan.salvador@tip.edu.ph", status: "Approved" },
    { id: 19, name: "Isabella V. Mendoza", mobile: "09138475621", email: "isabella.mendoza@lyceum.edu.ph", status: "Approved" },
    { id: 20, name: "Liam J. Tan", mobile: "09265473815", email: "liam.tan@ceu.edu.ph", status: "Declined" },
    { id: 21, name: "Olivia P. Reyes", mobile: "09485761234", email: "olivia.reyes@up.edu.ph", status: "In Progress" },
    { id: 22, name: "Lucas A. Cruz", mobile: "09275846132", email: "lucas.cruz@ust.edu.ph", status: "Approved" },
    { id: 23, name: "Grace C. Delos Santos", mobile: "09164328756", email: "grace.delossantos@ceu.edu.ph", status: "Declined" },
    { id: 24, name: "Ryan E. Garcia", mobile: "09284671359", email: "ryan.garcia@tip.edu.ph", status: "In Progress" },
    { id: 25, name: "Hannah M. Tan", mobile: "09473618254", email: "hannah.tan@lyceum.edu.ph", status: "Approved" },
    { id: 26, name: "Gabriel L. Santos", mobile: "09185476321", email: "gabriel.santos@sti.edu.ph", status: "Declined" },
    { id: 27, name: "Chloe B. Bautista", mobile: "09273614528", email: "chloe.bautista@up.edu.ph", status: "In Progress" },
    { id: 28, name: "Ethan M. Cruz", mobile: "09387621435", email: "ethan.cruz@ceu.edu.ph", status: "Approved" },
    { id: 29, name: "Sofia K. Ramos", mobile: "09173826541", email: "sofia.ramos@tip.edu.ph", status: "Declined" },
    { id: 30, name: "Jacob V. Salvador", mobile: "09284673152", email: "jacob.salvador@ust.edu.ph", status: "Approved" },
    { id: 31, name: "Victoria A. Lim", mobile: "09123765489", email: "victoria.lim@up.edu.ph", status: "Approved" },
    { id: 32, name: "Daniel G. Torres", mobile: "09348576213", email: "daniel.torres@lyceum.edu.ph", status: "In Progress" },
    { id: 33, name: "Alyssa P. Lopez", mobile: "09273841654", email: "alyssa.lopez@bulsu.edu.ph", status: "Declined" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentApplicants = applicants.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(applicants.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Approved":
        return (
          <span className="status-badge approved">
            <FaCheck className="status-icon" /> Approved
          </span>
        );
      case "In Progress":
        return (
          <span className="status-badge in-progress">
            <FaClock className="status-icon" /> In Progress
          </span>
        );
      case "Declined":
        return (
          <span className="status-badge declined">
            <FaTimes className="status-icon" /> Declined
          </span>
        );
      default:
        return null;
    }
  };
  

  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  return (
    <div className="AdminStatus1">
      <div className="AdminStatus1-1">
        <AdminSidebar />
      </div>
      <div className="AdminStatus1-2">
        <div className="AdminStatus1-2-1">
          <RegProfile />
        </div>
        <div className="formTitle">
          <span className="scholarship-status-title">
            <FaGraduationCap className="status-icon" /> Scholarship Status
          </span>
        </div>
        <div className="AdminStatus1-2-2">
          <div className="header-section">
            <div className="search-and-actions">
              <div className="search-bar-container">
                <input type="text" placeholder="Search user" className="search-bar" />
                <FaSearch className="search-icon" />
              </div>
              <div className="action-buttons">
                <button className="filter-btn" onClick={toggleFilterModal}>
                  <FaFilter /> Filter
                </button>
                <button className="export-btn">
                  <FaSync /> Update
                </button>
                <button className="report-btn">
                  <FaFileExport /> Export
                </button>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Select</th>
                <th>Student Name</th>
                <th>Mobile Number</th>
                <th>School Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentApplicants.map((applicant) => (
                <tr key={applicant.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{applicant.name}</td>
                  <td>{applicant.mobile}</td>
                  <td>{applicant.email}</td>
                  <td>{getStatusBadge(applicant.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button onClick={prevPage}>Previous</button>
            <button onClick={nextPage}>Next</button>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      {isFilterModalOpen && (
        <div className="filter-modal">
          <div className="filter-header">
            <h3>Filter Contents</h3>
            <button className="close-btn" onClick={toggleFilterModal}>
              &times;
            </button>
          </div>
          <div className="status-filter-content">
                <div className="status-filter-columns">
                  <div className="status-left-column">
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
                  <div className="status-right-column">
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
                <button className="status-apply-filter-btn" onClick={toggleFilterModal}>
                  Save
                </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusPage;