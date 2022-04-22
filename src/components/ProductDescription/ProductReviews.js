import React, { useState, useEffect } from "react";
import "./ProductReviews.css";
import ReactStars from 'react-stars';

function ProductReviews(props) {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        setReviews(props.reviews);
    }, []);
    console.log(props.reviews)
    return (
        <React.Fragment>
            <div className="row review-cards">
            {
                reviews.map((obj, key) => {
                    return (
                        <div className="card-review col s4" key={key}>
                            <span><ReactStars
                                value={obj.reviewrating}
                                size={24}
                                edit={false}
                                color2={'#ffd700'} /></span>
                            <p>{obj.review}</p>
                        </div>
                    )
                })
            }
            </div>
        </React.Fragment>
    )
}

export default ProductReviews;