import React from "react"

import "./regprofile.css"

export default function RegProfile() {
    return (
        <div className="ProfileDiv">
            <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1725511392/Profile_img_xz1n2v.png" alt="" />
            <div className="nameStatusDiv">
                <p className="profileName">{localStorage.getItem("fullname")}</p>
                <p className="profileStatus">Student</p>
            </div>
            <div className="profileVR" ></div>
            <div className="profileCalendarDiv">
                <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1725512512/profile_calendar_lnuh7j.png" alt="" />
                <p>5 Sept</p>
            </div>
            <div className="profileIconsDiv">
                <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1725512956/profile_message_icon_gb99jx.png" alt="" />
                <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1725512956/profile_notif_icon_f51d4l.png" alt="" />
            </div>
        </div>
    )
}