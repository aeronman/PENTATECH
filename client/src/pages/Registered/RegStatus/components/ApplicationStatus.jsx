import React from "react";
import "./ApplicationStatus.css";

const steps = [
  { label: "Application Form", date: "12/22/2023", status: "completed" },
  { label: "Verification", date: "12/22/2023", status: "completed" },
  { label: "Interview Scheduled", date: "12/24/2023", status: "completed" },
  { label: "Interview", date: "12/29/2023", status: "current" },
  { label: "Evaluation", date: "", status: "upcoming" },
  { label: "Result", date: "", status: "upcoming" },
  { label: "Payout", date: "", status: "upcoming" },
];

function ApplicationStatus() {
  return (
    <div className="application-status">
      {steps.map((step, index) => (
        <div key={index} className={`status-step ${step.status}`}>
          <div className="status-icon">
            {step.status === "completed" ? "✔️" : step.status === "current" ? "🔴" : "⚪️"}
          </div>
          <div className="status-info">
            <div className="status-label">{step.label}</div>
            <div className="status-date">{step.date || "Pending"}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApplicationStatus;