import React from 'react';
import './ApplicationDetailsForm.css';

function ApplicationDetailsForm() {
    return (
        <div className="application-form">
            <h2>Application Details</h2>
            <h4>Personal Information of the Applicant</h4>
            <p>Make sure to answer items marked with * and read each item carefully.</p>

            <div className="form-grid">
                <div className="form-group">
                    <label>ID/School/LRN Number <span className="required">*</span></label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Date of Birth <span className="required">*</span></label>
                    <input type="date" />
                </div>
                <div className="form-group">
                    <label>Age <span className="required">*</span></label>
                    <input type="number" min="0" />
                </div>

                <div className="form-group">
                    <label>First Name <span className="required">*</span></label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Middle Name</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Last Name <span className="required">*</span></label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <label>Place of Birth <span className="required">*</span></label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Sex <span className="required">*</span></label>
                    <div className="radio-group">
                        <label><input type="radio" name="sex" defaultChecked /> Male</label>
                        <label><input type="radio" name="sex" /> Female</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Phone Number <span className="required">*</span></label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <label>Province <span className="required">*</span></label>
                    <p className="static-text">Bulacan</p>
                </div>
                <div className="form-group">
                    <label>City/Municipality <span className="required">*</span></label>
                    <p className="static-text">Malolos</p>
                </div>
                <div className="form-group">
                    <label>Barangay <span className="required">*</span></label>
                    <select>
                        <option value="" disabled selected>Select Barangay</option>
                        <option value="Barangay 1">Anilao</option>
                        <option value="Barangay 2">Atlag</option>
                        <option value="Barangay 3">Babatnin</option>
                        <option value="Barangay 4">Bagna</option>
                        <option value="Barangay 5">Bagong Bayan</option>
                        <option value="Barangay 6">Balayong</option>
                        <option value="Barangay 7">Balite</option>
                        <option value="Barangay 8">Bangkal</option>
                        <option value="Barangay 9">Barihan</option>
                        <option value="Barangay 10">Bulihan</option>
                        <option value="Barangay 11">Bungahan</option>
                        <option value="Barangay 12">Caingin</option>
                        <option value="Barangay 13">Calero</option>
                        <option value="Barangay 14">Caliligawan</option>
                        <option value="Barangay 15">Canalate</option>
                        <option value="Barangay 16">Caniogan</option>
                        <option value="Barangay 17">Cofradia</option>
                        <option value="Barangay 18">Catmon</option>
                        <option value="Barangay 19">Dakila</option>
                        <option value="Barangay 20">Guinhawa</option>
                        
                    </select>
                </div>
                <div className="form-group full-width">
                    <label>Street Address <span className="required">*</span></label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <label>PWD? <span className="required">*</span></label>
                    <div className="radio-group">
                        <label><input type="radio" name="pwd" defaultChecked /> Yes</label>
                        <label><input type="radio" name="pwd" /> No</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Religion</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Civil Status <span className="required">*</span></label>
                    <select>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ApplicationDetailsForm;