import React, { useState } from "react";
import "./AdminStatus.css";
import AdminSideBar from "../common/AdminSidebar/AdminSidebar";
import RegProfile from "../common/regprofile/regprofile";
import { FaFilter, FaSync, FaFileImport, FaFileExport, FaCheck, FaTimes, FaClock } from "react-icons/fa";

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
  const itemsPerPage = 11;

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

  return (
    <div className="statusFeedbacksDiv1">
      <div className="statusFeedbacksDiv1-1">
        <AdminSideBar />
      </div>

      <div className="statusRegApplicationDiv1-2">
        <div className="statusRegApplicationDiv1-2-1">
          <RegProfile />
        </div>

        <header className="statusHeader">
          <div className="statusHeader-actions">
            <input type="text" placeholder="Search user" className="statusSearch-bar" />
            <button className="statusFilter-btn"><FaFilter /> Filter</button>
            <button className="statusUpdate-btn"><FaSync /> Update</button>
            <button className="statusImport-btn"><FaFileImport /> Import</button>
            <button className="statusExport-btn"><FaFileExport /> Export</button>
          </div>
        </header>

        <h1 className="statusManage-scholarship-header">Scholarship Applicants</h1>

        <div className="statusStudinfo">
          <div className="statusHeader-item"><strong>Student Name</strong></div>
          <div className="statusHeader-item"><strong>Mobile Number</strong></div>
          <div className="statusHeader-item"><strong>School Email</strong></div>
          <div className="statusHeader-item">
            <strong>Status</strong>
            <div className="statusButton">
              <div className="statusItem">
                <span className="statusBox approved"></span>
                <span className="statusLabel">Approved</span>
              </div>
              <div className="statusItem">
                <span className="statusBox inprogress"></span>
                <span className="statusLabel">In Progress</span>
              </div>
              <div className="statusItem">
                <span className="statusBox declined"></span>
                <span className="statusLabel">Declined</span>
              </div>
            </div>
          </div>
        </div>

        <div className="statusPage">
          <table className="statusApplicant-table">
            <tbody>
              {currentApplicants.map((applicant, index) => (
                <tr key={applicant.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{applicant.name}</td>
                  <td>{applicant.mobile}</td>
                  <td>{applicant.email}</td>
                  <td>
                    <span className={`status ${applicant.status.replace(" ", "").toLowerCase()}`}>
                      {applicant.status === "Approved" && <FaCheck />}
                      {applicant.status === "In Progress" && <FaClock />}
                      {applicant.status === "Declined" && <FaTimes />}
                      {applicant.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="statusPagination">
            <button
              className={`statusPagination-btn ${currentPage === 1 ? "disabled" : ""}`}
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="statusPagination-info">
              Page {currentPage} of {Math.ceil(applicants.length / itemsPerPage)}
            </span>
            <button
              className={`statusPagination-btn ${currentPage === Math.ceil(applicants.length / itemsPerPage) ? "disabled" : ""}`}
              onClick={nextPage}
              disabled={currentPage === Math.ceil(applicants.length / itemsPerPage)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
