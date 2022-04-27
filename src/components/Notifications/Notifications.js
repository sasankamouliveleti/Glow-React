import React from "react";
import Navbar from "../Navbar/Navbar";

function Notification() {
    return (
        <React.Fragment>
            <Navbar loginflag={true} />
            <div className="center">
                <h3>No Notifications</h3>
            </div>
        </React.Fragment>
    )
}

export default Notification;