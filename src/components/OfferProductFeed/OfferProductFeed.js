import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import '../ProductFeed/ProductFeed.css';
import axios from "axios";
import ProductCard from "../ProductFeed/ProductCard";
import FilterCard from "../ProductFeed/FiltersCard";
import { useNavigate } from "react-router-dom";

function OfferProductFeed() {
    const [products, setproducts] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        axios.get("/Glow-React/data/products.json").then((res) => {
            if (res.data) {
                // console.log(res.data);
                // setproducts(res.data);
                let productsVals = [];
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].pdiscount != '') {
                        productsVals.push(res.data[i]);
                    }
                }
                setproducts(productsVals);
            }
        });
    }, []);
    const calltoProddes = (key) => {
        sessionStorage.setItem("product-data", JSON.stringify(products[key]));
        let path = `/product-description`;
        navigate(path);
    }
    return (
        <React.Fragment>
            <Navbar loginflag={true} />
            <br />
            <div className="row">
                <div class="col s2">
                    <br />
                    <FilterCard />
                </div>
                <div class="col s10">
                    <br /><br />
                    <div className="container">
                        {
                            products.map((obj, key) => {
                                return (
                                    <div onClick={() => { calltoProddes(key) }}>
                                        <ProductCard id={obj.pid} pname={obj.pname} pimage={obj.pimage} pcost={obj.pcost} pdiscount={obj.pdiscount}
                                            prating={obj.prating} pratingnumber={obj.pratingnumber} verified={obj.verified} category={obj.category} key={key} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}


export default OfferProductFeed;