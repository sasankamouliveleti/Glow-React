import React, { useEffect, useState } from "react";
import "../ProductDescription/ProductReviews.css";

function DiscussionComments(props) {
    const [comments, setcomments] = useState([]);
    useEffect(() => {
        console.log(props.commentsVal);
        setcomments(props.commentsVal)
    }, []);
    return (
        <React.Fragment>
            <div className="row review-cards center">
                {
                    comments.map((obj, key) => {
                        return (
                            <div className="card-review col s4" key={key}>
                                <p>{obj.comment}</p>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>)
}

export default DiscussionComments;