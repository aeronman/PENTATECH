import React from "react";
import "./RegApplication5.css"; 

export default function RegApplication1() {
    return (
        <div className="application-page">
            <div className="document-container">

                <div className="document-input-section">
                    <div className="document-column">
                        <div className="document-input">
                            <label htmlFor="bills">Meralco and Water Bill<span className="required">*</span></label>
                            <input type="file" name="bills" id="bills" />
                        </div>
                        <div className="document-input">
                            <label htmlFor="brgyIndigency">Barangay Indigency and Proof of Residency<span className="required">*</span></label>
                            <input type="file" name="brgyIndigency" id="brgyIndigency" />
                        </div>
                        <div className="document-input">
                            <label htmlFor="cedula">Parent or Guardian’s Cedula (Scanned Copy)<span className="required">*</span></label>
                            <input type="file" name="cedula" id="cedula" />
                        </div>
                        <div className="document-input">
                            <label htmlFor="socialCase">Social Case Study<span className="required">*</span></label>
                            <input type="file" name="socialCase" id="socialCase" />
                        </div>
                    </div>

                    <div className="document-column">
                        <div className="document-input">
                            <label htmlFor="form138">Form 138 / Certificate of Grades (front and back)<span className="required">*</span></label>
                            <input type="file" name="form138" id="form138" />
                        </div>
                        <div className="document-input">
                            <label htmlFor="certificateEnrollment">Certificate of Enrollment / Registration with University / School Seal<span className="required">*</span></label>
                            <input type="file" name="certificateEnrollment" id="certificateEnrollment" />
                        </div>
                        <div className="document-input">
                            <label htmlFor="certificateMembership">Certificate of Membership / Oath Certificate of Parent/s<span className="required">*</span></label>
                            <input type="file" name="certificateMembership" id="certificateMembership" />
                        </div>
                        <div className="document-input">
                            <label htmlFor="certificateEmployment">Certificate of Employment<span className="required">*</span></label>
                            <input type="file" name="certificateEmployment" id="certificateEmployment" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
