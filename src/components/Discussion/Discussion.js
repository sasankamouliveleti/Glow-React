import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import DiscussionCard from "./DiscussionCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Discussion() {
    const [disList, setdisList] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        axios.get("/Glow-React/data/discussions.json").then((res) => {
            if (res.data) {
                console.log(res.data);
                setdisList(res.data);
            }
        });
    }, []);
    const calltoDesDec = (key) => {
        sessionStorage.setItem("discussion-data", JSON.stringify(disList[key]));
        let path = `/discussion-description`;
        navigate(path);
    }
    return (<React.Fragment>
        <Navbar loginflag={true} />
        <div className="container">
            {disList.map((obj, key) => {
                return (
                    <div onClick={() => { calltoDesDec(key) }} key={key}>
                        <DiscussionCard disucssionImg={obj.img} distitle={obj.title} disdesc={obj.desc} tags={obj.tags} key={key} />
                        <br/>
                    </div>
                )
            })}
        </div>
    </React.Fragment>)
}

export default Discussion;