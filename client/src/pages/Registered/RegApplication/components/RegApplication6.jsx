import React from "react";
import './RegApplication6.css';

const RegApplication6 = ({ formData }) => {
    return (
        <div className="container">
            <div className="review-sections-container">
                {/* Scholarship Program Section */}
                <div className="review-section">
                    <h4>SCHOLARSHIP PROGRAM</h4>
                    <p>{formData.scholarshipProgram}</p>
                </div>

                {/* Personal Information Section */}
                <div className="review-section">
                    <h4>PERSONAL INFORMATION</h4>
                    <div className="data-grid">
                        <div>
                            <label>ID/LRN/School Number: </label>
                            <p>{formData.personalInfo.id}</p>
                        </div>
                        <div>
                            <label>Date of Birth: </label>
                            <p>{formData.personalInfo.dob}</p>
                        </div>
                        <div>
                            <label>Age: </label>
                            <p>{formData.personalInfo.age}</p>
                        </div>
                        <div>
                            <label>First Name: </label>
                            <p>{formData.personalInfo.firstName}</p>
                        </div>
                        <div>
                            <label>Middle Name: </label>
                            <p>{formData.personalInfo.middleName}</p>
                        </div>
                        <div>
                            <label>Last Name: </label>
                            <p>{formData.personalInfo.lastName}</p>
                        </div>
                        <div>
                            <label>Place of Birth: </label>
                            <p>{formData.personalInfo.placeOfBirth}</p>
                        </div>
                        <div>
                            <label>Sex: </label>
                            <p>{formData.personalInfo.sex}</p>
                        </div>
                        <div>
                            <label>Contact Number: </label>
                            <p>{formData.personalInfo.phoneNum}</p>
                        </div>
                        <div>
                            <label>Province: </label>
                            <p>{formData.personalInfo.Provinces}</p>
                        </div>
                        <div>
                            <label>City/Municipality: </label>
                            <p>{formData.personalInfo.City}</p>
                        </div>
                        <div>
                            <label>Barangay: </label>
                            <p>{formData.personalInfo.Baranggay}</p>
                        </div>
                        <div>
                            <label>Street Address: </label>
                            <p>{formData.personalInfo.streetAddress}</p>
                        </div>
                        <div>
                            <label>PWD? </label>
                            <p>{formData.personalInfo.PWD}</p>
                        </div>
                        <div>
                            <label>Religion: </label>
                            <p>{formData.personalInfo.religion}</p>
                        </div>
                        <div>
                            <label>Civil Status: </label>
                            <p>{formData.personalInfo.civilStatus}</p>
                        </div>
                    </div>
                </div>

                {/* Family Information Section */}
                <div className="review-section">
                    <h4>FAMILY INFORMATION</h4>
                    <div className="data-grid">
                        <div>
                            <label>Full name of the Father : </label>
                            <p>{formData.familyInfo.father}</p>
                        </div>
                        <div>
                            <label>Occupation: </label>
                            <p>{formData.familyInfo.fatherOccupation}</p>
                        </div>
                        <div>
                            <label>Monthly Income/Salary: </label>
                            <p>{formData.familyInfo.fatherSalary}</p>
                        </div>
                        <div>
                            <label>Full name of the Mother: </label>
                            <p>{formData.familyInfo.mother}</p>
                        </div>
                        <div>
                            <label>Occupation: </label>
                            <p>{formData.familyInfo.motherOccupation}</p>
                        </div>
                        <div>
                            <label>Monthly Income/Salary: </label>
                            <p>{formData.familyInfo.motherSalary}</p>
                        </div>
                        <div>
                            <label>How many siblings have their own family? </label>
                            <p>{formData.familyInfo.siblingsWithFamily}</p>
                        </div>
                        <div>
                            <label>How many siblings have their own work? </label>
                            <p>{formData.familyInfo.siblingsWithWork}</p>
                        </div>
                        <div>
                            <label>How many siblings are still studying? </label>
                        </div>
                        <div>
                            <label>Elementary: ? </label>
                            <p>{formData.familyInfo.siblingsElementary}</p>
                        </div>
                        <div>
                            <label>High School:? </label>
                            <p>{formData.familyInfo.siblingHighSchool}</p>
                        </div>
                        <div>
                            <label>College: </label>
                            <p>{formData.familyInfo.siblingCollege}</p>
                        </div>
                        <div>
                            <label>Elementary : </label>
                            <p>{formData.familyInfo.motherSalary}</p>
                        </div>
                        <div>
                            <label>Amount of pending electric bill: </label>
                            <p>{formData.familyInfo.electricBill}</p>
                        </div>
                        <div>
                            <label>Amount of pending water bill: </label>
                            <p>{formData.familyInfo.waterBill}</p>
                        </div>
                        <div>
                            <label>Other Expenses: </label>
                            <p>{formData.familyInfo.otherExpenses}</p>
                        </div>
                    </div>
                </div>

                {/* Education Status Section */}
                <div className="review-section">
                    <h4>EDUCATION STATUS</h4>
                    <div className="data-grid">
                        <div>
                            <label>Last school attended: </label>
                            <p>{formData.educationStatus.lastSchool}</p>
                        </div>
                        <div>
                            <label>Course: </label>
                            <p>{formData.educationStatus.lastCourse}</p>
                        </div>
                        <div>
                            <label>Grade/Marks (General Average): </label>
                            <p>{formData.educationStatus.grades}</p>
                        </div>
                        <div>
                            <label>Number of Units (if college): </label>
                            <p>{formData.educationStatus.numOfUnits}</p>
                        </div>
                        <div>
                            <label>School about to attend: </label>
                            <p>{formData.educationStatus.newSchool}</p>
                        </div>
                        <div>
                            <label>Course: </label>
                            <p>{formData.educationStatus.levelYear}</p>
                        </div>
                        <div>
                            <label>Level/Year: </label>
                            <p>{formData.educationStatus.lastCourse}</p>
                        </div>
                        <div>
                            <label>Semester: </label>
                            <p>{formData.educationStatus.semester}</p>
                        </div>
                    </div>
                </div>

                {/* Documents Section */}
                <div className="review-section">
                    <h4>DOCUMENTS</h4>
                    <ul>
                        {Object.keys(formData.documents).map((docKey, index) => (
                            <li key={index}>
                                <strong>{docKey}</strong>: 
                                <ul>
                                    {Array.from(formData.documents[docKey]).map((file, fileIndex) => (
                                        <li key={fileIndex}>
                                            {file.name} {/* Displaying the file name */}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RegApplication6;