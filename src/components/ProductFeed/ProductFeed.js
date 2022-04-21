import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import './ProductFeed.css';
import axios from "axios";
import ProductCard from "./ProductCard";
import FilterCard from "./FiltersCard";
import { useNavigate } from "react-router-dom";
function ProductFeed() {
    const [products, setproducts] = useState([]);
    let navigate = useNavigate(); 
    useEffect(() => {
        axios.get("./data/products.json").then((res) => {
            if (res.data) {
                console.log(res.data);
                setproducts(res.data);
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
            <div className="row">
                <div class="col s2">
                    <br />
                    <FilterCard />
                </div>
                <div class="col s10">
                    <div className="container">
                        {
                            products.map((obj, key) => {
                                return (
                                    <div onClick={()=>{calltoProddes(key)}}>
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

export default ProductFeed;