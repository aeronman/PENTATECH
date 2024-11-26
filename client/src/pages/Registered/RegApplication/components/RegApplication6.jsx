import React from "react";
import "./RegApplication6.css";

const RegApplication6 = ({ formData }) => {
    const handleSubmit = () => {
        // Add form submission logic here
        console.log("Form submitted:", formData);
        alert("Your application has been submitted successfully!");
    };

    return (
        <div className="container">
            <div className="review-sections-container">
                {/* Scholarship Program Section */}
                <div className="review-section">
                    <h4>SCHOLARSHIP PROGRAM</h4>
                    <p>{formData.scholarshipProgram || "N/A"}</p>
                </div>

                {/* Personal Information Section */}
                <div className="review-section">
                    <h4>PERSONAL INFORMATION</h4>
                    <div className="data-grid">
                        {[
                            { label: "ID/LRN/School Number", value: formData.personalInfo?.id },
                            { label: "Date of Birth", value: formData.personalInfo?.dob },
                            { label: "Age", value: formData.personalInfo?.age },
                            { label: "First Name", value: formData.personalInfo?.firstName },
                            { label: "Middle Name", value: formData.personalInfo?.middleName },
                            { label: "Last Name", value: formData.personalInfo?.lastName },
                            { label: "Place of Birth", value: formData.personalInfo?.placeOfBirth },
                            { label: "Sex", value: formData.personalInfo?.sex },
                            { label: "Contact Number", value: formData.personalInfo?.phoneNum },
                            { label: "Province", value: formData.personalInfo?.Provinces },
                            { label: "City/Municipality", value: formData.personalInfo?.City },
                            { label: "Barangay", value: formData.personalInfo?.Baranggay },
                            { label: "Street Address", value: formData.personalInfo?.streetAddress },
                            { label: "PWD?", value: formData.personalInfo?.PWD },
                            { label: "Religion", value: formData.personalInfo?.religion },
                            { label: "Civil Status", value: formData.personalInfo?.civilStatus },
                        ].map((item, index) => (
                            <div key={index}>
                                <label>{item.label}: </label>
                                <p>{item.value || "N/A"}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Family Information Section */}
                <div className="review-section">
                    <h4>FAMILY INFORMATION</h4>
                    <div className="data-grid">
                        {[
                            { label: "Father's Name", value: formData.familyInfo?.father },
                            { label: "Father's Occupation", value: formData.familyInfo?.fatherOccupation },
                            { label: "Father's Monthly Salary", value: formData.familyInfo?.fatherSalary },
                            { label: "Mother's Name", value: formData.familyInfo?.mother },
                            { label: "Mother's Occupation", value: formData.familyInfo?.motherOccupation },
                            { label: "Mother's Monthly Salary", value: formData.familyInfo?.motherSalary },
                            { label: "Siblings with Family", value: formData.familyInfo?.siblingsWithFamily },
                            { label: "Siblings with Work", value: formData.familyInfo?.siblingsWithWork },
                            { label: "Siblings in Elementary", value: formData.familyInfo?.siblingsElementary },
                            { label: "Siblings in High School", value: formData.familyInfo?.siblingHighSchool },
                            { label: "Siblings in College", value: formData.familyInfo?.siblingCollege },
                            { label: "Pending Electric Bill", value: formData.familyInfo?.electricBill },
                            { label: "Pending Water Bill", value: formData.familyInfo?.waterBill },
                            { label: "Other Expenses", value: formData.familyInfo?.otherExpenses },
                        ].map((item, index) => (
                            <div key={index}>
                                <label>{item.label}: </label>
                                <p>{item.value || "N/A"}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Status Section */}
                <div className="review-section">
                    <h4>EDUCATION STATUS</h4>
                    <div className="data-grid">
                        {[
                            { label: "Last School Attended", value: formData.educationStatus?.lastSchool },
                            { label: "Course", value: formData.educationStatus?.lastCourse },
                            { label: "General Average", value: formData.educationStatus?.grades },
                            { label: "Number of Units", value: formData.educationStatus?.numOfUnits },
                            { label: "School About to Attend", value: formData.educationStatus?.newSchool },
                            { label: "Level/Year", value: formData.educationStatus?.levelYear },
                            { label: "Semester", value: formData.educationStatus?.semester },
                        ].map((item, index) => (
                            <div key={index}>
                                <label>{item.label}: </label>
                                <p>{item.value || "N/A"}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Documents Section */}
                <div className="review-section">
                    <h4>DOCUMENTS</h4>
                    <ul>
                        {Object.keys(formData.documents || {}).map((docKey, index) => (
                            <li key={index}>
                                <strong>{docKey}</strong>:
                                <ul>
                                    {(formData.documents[docKey] || []).map((file, fileIndex) => (
                                        <li key={fileIndex}>{file.name || "File Name Missing"}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Submit Button */}
            <div className="footerButton">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default RegApplication6;
