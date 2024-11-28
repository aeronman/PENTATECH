import React from "react";
import RegSideBar from "../common/regsidebar/RegSidebar";
import RegProfile from "../common/regprofile/regprofile";
import "./RegProfile.css";

export default function RegStatus() {
    return (
        <div className="RegProfileDiv1">
            <div className="RegProfileDiv1-1">
                <RegSideBar />
            </div>
            <div className="RegProfileDiv1-2">
                <RegProfile /> 
            </div>
            
        </div>
    );
}
