import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import './DiscussionDescription.css';
import DiscussionComments from "./DiscussionComments";

function DiscussionDescription() {
    const [post, setPost] = useState({});

    useEffect(() => {
        console.log(sessionStorage.getItem("discussion-data"));
        setPost(JSON.parse(sessionStorage.getItem("discussion-data")));
    }, []);
    console.log(post);
    const thePostPlaceHolder = post ? (
        <React.Fragment>
            <div class="description-card">
                <div class="row">
                    <div class="col s12"></div>
                    <div class="col s3">
                        <img src={post.img} alt={post.title} width="250px" height="250px" />
                    </div>
                    <div class="col s9"> <h4>{post.title}</h4>
                        {/* <p>{props.disdesc}</p> */}
                    </div>
                </div>
            </div>
            <div class="description-card">
                <div class="col s9 descrip">
                    <p className="">{post.desc}</p>
                </div>
            </div>
            <br/>
            {post.comments ? <DiscussionComments commentsVal={post.comments} /> : ''}
        </React.Fragment>) : '';
    return (
        <React.Fragment>
            <Navbar loginflag={true} />
            <div className="container">
                {thePostPlaceHolder}

            </div>
        </React.Fragment>
    )
}

export default DiscussionDescription;