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

    // Add form data state here
    const [formData, setFormData] = useState({
        scholarshipProgram: "",
        personalInfo: {},
        familyInfo: {},
        educationStatus: {},
        documents: {} // Use an object to store document file data
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
        if (page === 0) {
            return <RegApplication1 formData={formData} setFormData={setFormData} />;
        }
        else if (page === 1) {
            return <RegApplication2 formData={formData} setFormData={setFormData} />;
        }
        else if (page === 2) {
            return <RegApplication3 formData={formData} setFormData={setFormData} />;
        }
        else if (page === 3) {
            return <RegApplication4 formData={formData} setFormData={setFormData} />;
        }
        else if (page === 4) {
            return <RegApplication5 formData={formData} setFormData={setFormData} />;
        }
        else if (page === 5) {
            return <RegApplication6 formData={formData} />;
        }
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
                    {page !== 0 && page !== 5 && (
                        <button
                            disabled={page === 0}
                            onClick={() => { setPage((currPage) => currPage - 1) }}
                        >
                            prev
                        </button>
                    )}
                    {page !== 0 && page !== 5 && (
                        <button
                            disabled={page === formTitles.length - 1}
                            onClick={() => { setPage((currPage) => currPage + 1) }}
                        >
                            next
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}