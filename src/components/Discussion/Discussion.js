import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import DiscussionCard from "./DiscussionCard";
import axios from "axios";

function Discussion() {
    const [disList, setdisList] = useState([]);

    useEffect(() => {
        axios.get("./data/discussions.json").then((res) => {
            if (res.data) {
                console.log(res.data);
                setdisList(res.data);
            }
        });
    }, []);
    return (<React.Fragment>
        <Navbar loginflag={true} />
        <div className="container">
            {disList.map((obj, key) => {
                return (
                    <DiscussionCard disucssionImg={obj.img} distitle={obj.title} disdesc={obj.desc} tags={obj.tags} key={key} />
                )
            })}
        </div>
    </React.Fragment>)
}

export default Discussion;