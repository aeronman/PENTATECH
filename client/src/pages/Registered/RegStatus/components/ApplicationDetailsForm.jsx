import React from 'react';
import './ApplicationDetailsForm.css';

function ApplicationDetailsForm() {
    return (
        <div className="application-form">
            <h2>Application Details</h2>
            <h4>Personal Information of the Applicant</h4>
            <p>This section displays the applicant's submitted information.</p>

            <div className="form-grid">
                <div className="form-group">
                    <label>ID/School/LRN Number:</label>
                    <p>--</p>
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <p>--</p>
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <p>--</p>
                </div>

                <div className="form-group">
                    <label>First Name:</label>
                    <p>--</p>
                </div>
                <div className="form-group">
                    <label>Middle Name:</label>
                    <p>--</p>
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <p>--</p>
                </div>

                <div className="form-group">
                    <label>Place of Birth:</label>
                    <p>--</p>
                </div>
                <div className="form-group">
                    <label>Sex:</label>
                    <p>--</p>
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <p>--</p>
                </div>

                <div className="form-group">
                    <label>Province:</label>
                    <p>--</p>
                </div>
                <div className="form-group">
                    <label>City/Municipality:</label>
                    <p>--</p>
                </div>
                <div className="form-group">
                    <label>Barangay:</label>
                    <p>--</p>
                </div>
                <div className="form-group full-width">
                    <label>Street Address:</label>
                    <p>--</p>
                </div>

                <div className="form-group">
                    <label>PWD?</label>
                    <p>--</p>
                </div>
                <div className="form-group">
                    <label>Religion:</label>
                    <p>--</p>
                </div>
                <div className="form-group">
                    <label>Civil Status:</label>
                    <p>--</p>
                </div>
            </div>
        </div>
    );
}

export default ApplicationDetailsForm;
