import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);

const AdminDonutChart = () => {
    const data = {
        labels: ["In Progress", "Approved", "Denied"],
        datasets: [
            {
                label: "Applicants Breakdown",
                data: [300, 150, 50], // Example counts
                backgroundColor: ["#FFB6C1", "#98FB98", "#FF6347"],
                borderColor: ["#FFB6C1", "#98FB98", "#FF6347"],
                borderWidth: 1,
            },
        ],
    };

    const totalApplicants = data.datasets[0].data.reduce((sum, value) => sum + value, 0);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "right", // Move legend to the right
                labels: {
                    boxWidth: 20,
                    generateLabels: (chart) => {
                        // Generate percentage labels for the legend
                        const dataset = chart.data.datasets[0];
                        return chart.data.labels.map((label, index) => {
                            const value = dataset.data[index];
                            const percentage = ((value / totalApplicants) * 100).toFixed(1);
                            return {
                                text: `${label} (${percentage}%)`,
                                fillStyle: dataset.backgroundColor[index],
                                hidden: false,
                                lineCap: "round",
                                lineDash: [],
                                lineDashOffset: 0,
                                lineJoin: "round",
                                strokeStyle: dataset.borderColor[index],
                                pointStyle: "circle",
                                datasetIndex: 0,
                                index,
                            };
                        });
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const value = context.raw;
                        const percentage = ((value / totalApplicants) * 100).toFixed(1);
                        return `${context.label}: ${value} (${percentage}%)`;
                    },
                },
            },
        },
    };

    return (
        <div style={{ height: "400px", position: "relative" }}>
            {/* Applicant Status Breakdown */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>Scholarship Application Status Breakdown</h2>
                <p style={{ color: "#6c757d", fontSize: "16px" }}>
                    <strong>Total Applicants:</strong> {totalApplicants} | <strong>In Progress:</strong> {data.datasets[0].data[0]} | <strong>Approved:</strong> {data.datasets[0].data[1]} | <strong>Denied:</strong> {data.datasets[0].data[2]}
                </p>
            </div>
            {/* Donut Chart */}
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default AdminDonutChart;
