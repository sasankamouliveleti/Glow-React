import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Tracker.css"
function Tracker() {
    
    return (<React.Fragment>
        <Navbar loginflag={true} />
        <div id="calendar"></div>
    </React.Fragment>)

}

export default Tracker;