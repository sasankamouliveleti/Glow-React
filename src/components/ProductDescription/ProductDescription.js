import React, { useState, useEffect } from "react";
import ProductCard from "../ProductFeed/ProductCard";
import Navbar from "../Navbar/Navbar";
import "./ProductDescription.css";
import ReactStars from 'react-stars';
import ProductReviews from "./ProductReviews";
import Pagination from "../Pagination/Pagination";

function ProductDescription() {
    const [prodInfo, setProdInfo] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [reviewsPerPage, setReviewsPerPage] = useState(3);
    const [currentReviews, setCurrentReviews] = useState();
    const postUseeffectops = (prodVals) => {
        const indexOfLastReview = currentPage * reviewsPerPage;
        const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
        setCurrentReviews(prodVals.reviews.slice(indexOfFirstReview, indexOfLastReview));
    }
    useEffect(() => {
        setProdInfo(JSON.parse(sessionStorage.getItem("product-data")));
        postUseeffectops(JSON.parse(sessionStorage.getItem("product-data")));
    }, []);
    const paginate = (val) => {
        console.log("here I am");
        setCurrentPage(val);
        postUseeffectops(prodInfo);
    }
    console.log(currentReviews);
    const reviewsCards = (currentReviews ? <ProductReviews reviews={currentReviews} /> : '')
    return (
        <React.Fragment>
            <Navbar loginflag={true} />
            <br />
            <div className="container">
                {
                    prodInfo ? <ProductCard id={prodInfo.pid} pname={prodInfo.pname} pimage={prodInfo.pimage} pcost={prodInfo.pcost} pdiscount={prodInfo.pdiscount}
                        prating={prodInfo.prating} pratingnumber={prodInfo.pratingnumber} verified={prodInfo.verified} category={prodInfo.category} /> : ''
                }
                <fieldset>
                    <legend className="legend"><b>Overall Rating & Review Summary</b></legend>
                    <span><ReactStars
                        value={prodInfo.prating}
                        size={24}
                        edit={false}
                        color2={'#ffd700'} />({prodInfo.pratingnumber})</span>
                    <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                    </h5>
                </fieldset>
                <br />
                {reviewsCards}
                <Pagination total={4} perPage={reviewsPerPage} paginate={paginate} />
            </div>
        </React.Fragment>
    )
}

export default ProductDescription;