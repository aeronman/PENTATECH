import React, { useState, useEffect } from "react";
import "./RegApplicationCommon.css";

export default function RegApplication1() {
    const [formData, setFormData] = useState({
        userID: localStorage.getItem("id"),
        Student_ID: "",
        FIRST_NAME: "",
        MIDDLE_NAME: "",  // Optional field
        LAST_NAME: "",
        DATE_OF_BIRTH: "",
        age: "",
        PLACE_OF_BIRTH: "",
        Province: "Bulacan",
        CITY_MUNICIPALITY: "Malolos",
        BARANGAY: "",
        STREET_ADDRESS: "",
        SEX: "",  // Default empty string to ensure controlled value
        CIVIL_STATUS: "",
        PWD: "",  // Default empty string to ensure controlled value
        RELIGION: "",
        CONTACT_NO: "",
        PWD_ID: null,
        PWDPreview: null // To store the preview image URL
    });

    // Fetch existing data based on localStorage ID
    useEffect(() => {
        const storedId = localStorage.getItem("id");
        if (storedId) {
            fetchData(storedId);
        }
    }, []);

    const fetchData = async (id) => {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/get/getPersonalDetails.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({ userId: id })
        });

        const result = await response.json();
        if (result.success) {
            const retrievedData = result.data;

            // Ensure all fields have valid values (using default values where necessary)
            setFormData({
                ...formData,
                Student_ID: retrievedData.studentID|| "",
                FIRST_NAME: retrievedData.firstName || "",
                MIDDLE_NAME: retrievedData.middleName || "", // Optional field
                LAST_NAME: retrievedData.lastName || "",
                DATE_OF_BIRTH: retrievedData.dateOfBirth || "",
                age: retrievedData.age || "",
                PLACE_OF_BIRTH: retrievedData.placeOfBirth|| "",
                Province: retrievedData.province || "Bulacan",
                CITY_MUNICIPALITY: retrievedData.cityMunicipality || "Malolos",
                BARANGAY: retrievedData.barangay || "",
                SEX: retrievedData.sex || "",  // Default empty string if undefined
                CIVIL_STATUS: retrievedData.civilStatus || "",
                PWD: retrievedData.pwd || "",  // Default empty string if undefined
                RELIGION: retrievedData.religion || "",
                CONTACT_NO: retrievedData.contactNo || "",
                PWD_ID: retrievedData.pwdID || null,
                PWDPreview: retrievedData.PWDPreview || null, // Handle file preview
            });
        }
    };

    const validateForm = () => {
        for (let key in formData) {
            if (!formData[key] && key !== 'PWDPreview' && key !== 'PWD_ID') {  // Skip PWD fields from required check
                alert(`${key} is required!`);
                return false;
            }
        }
        return true;
    };

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "DATE_OF_BIRTH") {
            const age = calculateAge(value);
            setFormData({ ...formData, [name]: value, age: age.toString() });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                PWD_ID: file,
                PWDPreview: URL.createObjectURL(file), // Generate preview URL for the file
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const dataToSend = {
            ...formData,
            page: "personalInfo",
            PWD: formData.PWD === "Yes" ? 1 : 0, // Convert "Yes" and "No" to boolean
        };

        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/post/savePersonalDetails.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(dataToSend)
        });

        const result = await response.json();
        if (result.success) {
            alert("Data saved successfully!");
        } else {
            alert("Failed to save data: " + result.message);
        }
    };

    return (
        <form className="input-main-container" onSubmit={handleSubmit}>
            <div className="input-container-1">
                <div className="input-container-1-1">
                    <label className="applicationLabel" htmlFor="Student_ID">ID/LRN/School Number<span className="red">*</span></label>
                    <input type="text" name="Student_ID" id="Student_ID" value={formData.Student_ID} onChange={handleChange} required />
                </div>
                <div className="input-container-1-2">
                    <label className="applicationLabel" htmlFor="FIRST_NAME">First Name<span className="red">*</span></label>
                    <input type="text" name="FIRST_NAME" id="FIRST_NAME" value={formData.FIRST_NAME} onChange={handleChange} required />
                </div>
                <div className="input-container-1-3">
                    <label className="applicationLabel" htmlFor="MIDDLE_NAME">Middle Name</label>
                    <input type="text" name="MIDDLE_NAME" id="MIDDLE_NAME" value={formData.MIDDLE_NAME} onChange={handleChange} />
                </div>
                <div className="input-container-1-4">
                    <label className="applicationLabel" htmlFor="LAST_NAME">Last Name<span className="red">*</span></label>
                    <input type="text" name="LAST_NAME" id="LAST_NAME" value={formData.LAST_NAME} onChange={handleChange} required />
                </div>
            </div>

            <div className="input-container-2">
                <div className="input-container-2-1">
                    <label className="applicationLabel" htmlFor="DATE_OF_BIRTH">Date of Birth<span className="red">*</span></label>
                    <input type="date" name="DATE_OF_BIRTH" id="DATE_OF_BIRTH" value={formData.DATE_OF_BIRTH} onChange={handleChange} required />
                </div>
                <div className="input-container-2-2">
                    <label className="applicationLabel" htmlFor="age">Age</label>
                    <input type="text" name="age" id="age" value={formData.age} readOnly />
                </div>
                <div className="input-container-2-3">
                    <label className="applicationLabel" htmlFor="SEX">Gender<span className="red">*</span></label>
                    <div id="SEX">
                        <div className="radioDiv">
                            <input type="radio" name="SEX" id="male" value="Male" checked={formData.SEX === "Male"} onChange={handleChange} required />
                            <label className="applicationLabel" htmlFor="male">Male</label>
                            <input type="radio" name="SEX" id="female" value="Female" checked={formData.SEX === "Female"} onChange={handleChange} required />
                            <label className="applicationLabel" htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                <div className="input-container-2-4">
                    <label className="applicationLabel" htmlFor="PLACE_OF_BIRTH">Place Of Birth<span className="red">*</span></label>
                    <input type="text" name="PLACE_OF_BIRTH" id="PLACE_OF_BIRTH" value={formData.PLACE_OF_BIRTH} onChange={handleChange} required />
                </div>
            </div>

            <div className="input-container-3">
                <div className="input-container-3-1">
                    <label className="applicationLabel" htmlFor="PROVINCE">Province</label>
                    <input type="text" name="Province" id="Province" value={formData.Province} readOnly />
                </div>
                <div className="input-container-3-2">
                    <label className="applicationLabel" htmlFor="CITY_MUNICIPALITY">City/Municipality</label>
                    <input type="text" name="CITY_MUNICIPALITY" id="CITY_MUNICIPALITY" value={formData.CITY_MUNICIPALITY} readOnly />
                </div>
                <div className="input-container-3-3">
                    <label className="applicationLabel" htmlFor="BARANGAY">Barangay<span className="red">*</span></label>
                    <input type="text" name="BARANGAY" id="BARANGAY" value={formData.BARANGAY} onChange={handleChange} required />
                </div>
            </div>

            <div className="input-container-4">
                <div className="input-container-4-1">
                    <label className="applicationLabel" htmlFor="PWD">PWD<span className="red">*</span></label>
                    <select name="PWD" id="PWD" value={formData.PWD} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                {formData.PWD === "Yes" && (
                    <div className="input-container-4-2">
                        <label className="applicationLabel" htmlFor="PWD_ID">PWD ID</label>
                        <input type="file" name="PWD_ID" id="PWD_ID" onChange={handleFileChange} />
                        {formData.PWDPreview && <img src={formData.PWDPreview} alt="PWD ID Preview" />}
                    </div>
                )}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}
