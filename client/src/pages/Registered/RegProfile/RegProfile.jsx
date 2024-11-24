import React from "react";
import RegSideBar from "../common/regsidebar/RegSidebar";
import RegProfile from "../common/regprofile/regprofile";
import "./RegProfile.css";

export default function RegStatus() {
    return (
        <div className="RegStatusDiv1">
            <div className="RegStatusDiv1-1">
                <RegSideBar />
            </div>
            <div className="RegStatusDiv1-2">
                <RegProfile /> 
            </div>
            
        </div>
    );
}
