import React from "react"
import { Link } from "react-router-dom"

import "./regsidebar.css"

export default function RegSideBar() {
    return (
        <div className="sidebarDiv">
            <div className="regLogoNameDiv">
                <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1719735599/Ph_seal_bulacan_malolos_400x400_nkfoxm.png" alt="" />
                <h1>ScholarEase</h1>
            </div>
            <div className="regListDiv">
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677133/Home_icon_sidebar_2_aol1vd.png" alt="" />
                    <Link className="removeDeco black" to="/regdashboard">Dashboard</Link>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677064/Application_icon_jaxjqy.png" alt="" />
                    <Link className="removeDeco black" to="/regApplication">Application</Link>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677064/status_icon_r5r668.png" alt="" />
                    <Link className="removeDeco black" to="/regStatus">Status</Link>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677064/Profile_icon_sidebar_vo9p4a.png" alt="" />
                    <Link className="removeDeco black" to="/regProfile">Profile</Link>
                </span>
            </div>
            <div className="regListDiv2">
                <hr />
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677064/FAQs_icon_a1cuib.png" alt="" />
                    <Link className="removeDeco black" to="/regFAQs">FAQs</Link>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677064/Feedback_icon_pwduql.png" alt="" />
                    <Link className="removeDeco black" to="/regFeedbacks">Feedbacks</Link>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677065/Sign_out_icon_dyfcss.png" alt="" />
                    <Link className="removeDeco black" to="/login">Sign Out</Link>
                </span>
                <p>ScholarEase @2024</p>
            </div>
        </div>
    )
}