import React, { useState } from "react";

import RegSideBar from "../common/regsidebar/RegSidebar";
import RegProfile from "../common/regprofile/regprofile";

import RegApplication1 from "./components/RegApplication1";
import RegApplication2 from "./components/RegApplication2";
import RegApplication3 from "./components/RegApplication3";
import RegApplication4 from "./components/RegApplication4";
import RegApplication5 from "./components/RegApplication5";
import RegApplication6 from "./components/RegApplication6";

import "./RegApplicationForm.css";

export default function RegApplication() {
    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        scholarshipProgram: "",
        personalInfo: {},
        familyInfo: {},
        educationStatus: {},
        documents: {}
    });

    const formTitles = [
        "Scholarship Programs Available",
        "Personal Information",
        "Family Information",
        "Education Status",
        "Documents",
        "Review"
    ];

    const formTitleDetails = [
        "Choose one and proceed.",
        "Make sure to answer items marked with * and read each items and answers you input carefully.",
        "Make sure to answer items marked with * and read each items and answers you input carefully.",
        "Make sure to answer items marked with * and read each items and answers you input carefully.",
        "Make sure to answer items marked with * and read each items and answers you input carefully. Please submit a clear picture, scanned copy, or pdf file. Each form accepts multiple files if necessary.",
        "Please make sure that all of the information you input is correct."
    ];

    const pageDisplay = () => {
        switch (page) {
            case 0:
                return (
                    <RegApplication1
                        formData={formData}
                        setFormData={setFormData}
                        onApply={() => setPage(1)}
                    />
                );
            case 1:
                return (
                    <RegApplication2
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
            case 2:
                return (
                    <RegApplication3
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
            case 3:
                return (
                    <RegApplication4
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
            case 4:
                return (
                    <RegApplication5
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
            case 5:
                return <RegApplication6 formData={formData} />;
            default:
                return null;
        }
    };

    const handleSubmit = () => {
        // Add your submit logic here
        console.log("Form submitted", formData);
        // You can redirect to a confirmation page or handle the form submission as needed
    };

    return (
        <div className="RegApplicationDiv1">
            <div className="RegApplicationDiv1-1">
                <RegSideBar />
            </div>
            <div className="RegApplicationDiv1-2">
                <div className="RegApplicationDiv1-2-1">
                    <RegProfile />
                </div>
                <div className="formheader">{formTitles[page]}</div>
                <div className="formheaderDetails">{formTitleDetails[page]}</div>
                <div className="RegApplicationDiv1-2-2">
                    <div className="body">{pageDisplay()}</div>
                </div>
                <div className="footerButton">
                    {page > 0 && (
                        <button
                            onClick={() => setPage((currPage) => currPage - 1)}
                        >
                            Prev
                        </button>
                    )}
                    {page < 4 && page !== 0 && (
                        <button
                            onClick={() => setPage((currPage) => currPage + 1)}
                        >
                            Next
                        </button>
                    )}
                    {page === 4 && (
                        <button
                            onClick={() => setPage(5)} // Redirects to RegApplication6
                        >
                            Review
                        </button>
                    )}
                    {page === 5 && (
                        <button onClick={handleSubmit}>Submit</button> // Submit button
                    )}
                </div>
            </div>
        </div>
    );
}
