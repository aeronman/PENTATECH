import React from "react"
import { Link } from "react-router-dom"

import "./AdminSidebar.css"

export default function AdminSideBar() {
    return (
        <div className="AdminsidebarDiv">
            <div className="AdminLogoNameDiv">
                <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1719735599/Ph_seal_bulacan_malolos_400x400_nkfoxm.png" alt="" />
                <h1>ScholarEase</h1>
            </div>
            <div className="AdminListDiv">
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677133/Home_icon_sidebar_2_aol1vd.png" alt="" />
                    <Link className="removeDeco black" to="/Admin/Dashboard">Dashboard</Link>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677064/Application_icon_jaxjqy.png" alt="" />
                    <Link className="removeDeco black" to="/Admin/Application">Application</Link>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677064/status_icon_r5r668.png" alt="" />
                    <Link className="removeDeco black" to="/Admin/Status">Status</Link>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677064/Profile_icon_sidebar_vo9p4a.png" alt="" />
                    <Link className="removeDeco black" to="/Admin/Scholars">Scholars</Link>
                </span>
                
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677064/Profile_icon_sidebar_vo9p4a.png" alt="" />
                    <Link className="removeDeco black" to="/Admin/Profile">Profile</Link>
                </span>
            </div>
            <div className="AdminListDiv2">
                <hr />
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677064/FAQs_icon_a1cuib.png" alt="" />
                    <Link className="removeDeco black" to="/Admin/FAQs">FAQs</Link>
                </span>
                <span>
                    <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1724677064/Feedback_icon_pwduql.png" alt="" />
                    <Link className="removeDeco black" to="/Admin/Feedbacks">Feedbacks</Link>
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