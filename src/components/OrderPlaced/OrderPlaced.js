import React from "react";
import Navbar from "../Navbar/Navbar";


function OrderPlaced() {
    return (
        <React.Fragment>
            <Navbar loginflag = {true}/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <h3 className="center">Order Placed <span>&#9989;</span></h3>
        </React.Fragment>
    )
}

export default OrderPlaced