import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import "./RegLineChart.css"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function RegLineChart() {
    const chartData = {
        labels: ["LMSK", "FASHS", "APKA", "VSCP", "AVSP/ABOSP", "TPKM", "NMMMSP"],
        datasets: [
            {
                label: "Students Applied",
                data: [500, 700, 1200, 1500, 1800, 2100, 2500],
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)", 
                pointBorderColor: "rgba(255, 99, 132, 1)",
                pointBackgroundColor: "rgba(255, 255, 255, 1)", 
                tension: 0.4, 
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide legend to match design
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "SCHOLARSHIP PROGRAMS",
                    font: {
                        size: 15,
                        weight: "bold",
                    },
                    color: "#6c757d", // Gray color for consistency
                    padding: {
                        top: 10, // Space above the label
                    },
                },
                grid: {
                    display: false, // Hide x-axis grid lines
                },
                ticks: {
                    color: "#666",
                    font: {
                        size: 12,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: "STUDENTS APPLIED",
                    font: {
                        size: 15,
                        weight: "bold",
                    },
                    color: "#6c757d", // Gray color for consistency
                    padding: {
                        bottom: 10, // Space below the label
                    },
                },
                grid: {
                    color: "#eee",
                },
                ticks: {
                    color: "#666",
                    font: {
                        size: 12,
                    },
                    callback: function (value) {
                        return value.toLocaleString(); // Add commas for large numbers
                    },
                },
            },
        },
    };

    return (
        <div className="chart-container">
            <Line data={chartData} options={chartOptions} />
        </div>
    );
}