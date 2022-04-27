import React from "react";
import Navbar from "../Navbar/Navbar";
function Profile() {
    return (<React.Fragment>
        <Navbar loginflag={true} />
        <div className="center">
            <h3>Profile Page</h3>
        </div>
    </React.Fragment>);
}

export default Profile;