import React, { useState, useEffect } from "react"
import "./AdminTotalScholars.css"

// Simulated data fetching function (replace with your actual API or database call)
const fetchScholars = async () => {
    // Replace this with actual API call, for now, it's static
    return 1011; // Example static number of scholars
};

export default function AdminTotalScholars() {
    const [totalScholars, setTotalScholars] = useState(0); // Default value is 0

    useEffect(() => {
        // Fetch the current number of scholars when component mounts
        const getScholarsData = async () => {
            const data = await fetchScholars();
            setTotalScholars(data);
        };

        getScholarsData();
    }, []); // Empty dependency array means this runs once when the component mounts

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="totalScholarsDiv">
            <p className="p1">As of <span className="redText">{currentDate}</span></p>
            <p className="p2 redText">{totalScholars.toLocaleString()}</p>
            <p className="p3">Total no. of Scholars</p>
        </div>
    );
}
