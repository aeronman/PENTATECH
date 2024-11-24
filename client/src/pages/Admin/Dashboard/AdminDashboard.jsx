import React from "react";

import AdminSidebar from "../common/AdminSidebar/AdminSidebar";
import AdminProfile from "../common/regprofile/regprofile";
import AdminTotalScholars from "./common/AdminTotalScholars/AdminTotalScholars";
import AdminTotalApplicants from "./common/AdminTotalApplicants/AdminTotalApplicants";
import AdminMission from "./common/AdminMission/AdminMission";
import AdminLineChart from "./common/AdminLineChart/AdminLineChart";
import AdminDonutChart from "./common/AdminDonutChart/AdminDonutChart";
import AdminGraphChart from "./common/AdminGraphChart/AdminGraphChart";

import "./AdminDashboard.css";

export default function AdminDashboard() {
    return (
        <div className="AdminDashboardDiv1">
            {/* Sidebar */}
            <div className="AdminDashboardDiv1-1">
                <AdminSidebar />
            </div>

            {/* Main Content */}
            <div className="AdminDashboardDiv1-2">
                {/* Profile Section */}
                <div className="AdminDashboardDiv1-2-1">
                    <AdminProfile />
                </div>

                {/* Scholars, Applicants, Mission */}
                <div className="AdminDashboardDiv1-2-2">
                    <div className="AdminDashboardDiv1-2-2-1">
                        <div className="AdminDashboardDiv1-2-2-1-1">
                            <AdminTotalScholars />
                        </div>
                        <div className="AdminDashboardDiv1-2-2-1-1">
                            <AdminTotalApplicants />
                        </div>
                    </div>
                    <div className="AdminDashboardDiv1-2-2-2">
                        <AdminMission />
                    </div>
                </div>

                {/* Donut and Graph Chart Section */}
                <div className="AdminDashboardCharts">
                    <div className="DonutGraphWrapper">
                        <div className="AdminDonutChartContainer">
                            <AdminDonutChart />
                        </div>
                        <div className="AdminGraphChartContainer">
                            <AdminGraphChart />
                        </div>
                    </div>

                    {/* Line Chart Section */}
                    <div className="LineChartContainer">
                        <AdminLineChart />
                    </div>
                </div>
            </div>
        </div>
    );
}