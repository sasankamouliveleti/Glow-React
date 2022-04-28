import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import './ProductFeed.css';
import axios from "axios";
import ProductCard from "./ProductCard";
import FilterCard from "./FiltersCard";
import { useNavigate } from "react-router-dom";
function ProductFeed() {
    const [products, setproducts] = useState([]);
    const [filterVerify, setFilterVerify] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        axios.get("/Glow-React/data/products.json").then((res) => {
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
    const filterRatedMain = (flag) => {
        if (!flag) {
            let newproducts = [...products];
            newproducts.sort(function (a, b) {
                return b.prating - a.prating;
            });
            console.log(newproducts);
            setproducts(newproducts);
        }
    };
    const filterVerifyMain = (flag) => {
        setFilterVerify(!filterVerify);
    };
    const sorttheProducts = () => {
        console.log("fsafsd");
        let newproducts = [...products];
        newproducts.sort(function (a, b) {
            return b.pcost - a.pcost;
        });
        console.log(newproducts);
        setproducts(newproducts);
    };

    let list = filterVerify ? (<React.Fragment>{
        products.filter(objVal => objVal.verified == "true").map((obj, key) => {
            return (
                <div onClick={() => { calltoProddes(key) }}>
                    <ProductCard id={obj.pid} pname={obj.pname} pimage={obj.pimage} pcost={obj.pcost} pdiscount={obj.pdiscount}
                        prating={obj.prating} pratingnumber={obj.pratingnumber} verified={obj.verified} category={obj.category} key={key} />
                    <br />
                </div>
            );
        })
    }</React.Fragment>) : (<React.Fragment>{
        products.map((obj, key) => {
            return (
                <div onClick={() => { calltoProddes(key) }}>
                    <ProductCard id={obj.pid} pname={obj.pname} pimage={obj.pimage} pcost={obj.pcost} pdiscount={obj.pdiscount}
                        prating={obj.prating} pratingnumber={obj.pratingnumber} verified={obj.verified} category={obj.category} key={key} />
                    <br />
                </div>
            );
        })
    }</React.Fragment>);
    return (
        <React.Fragment>
            <Navbar loginflag={true} />
            <br /><br />
            <div className="row">
                <div class="col s2">
                    <br />
                    <FilterCard filterRated={filterRatedMain} filterVerify={filterVerifyMain} sortProducts={sorttheProducts} />
                </div>
                <div class="col s10">
                    <br /><br />
                    <div className="container">
                        {list}
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ProductFeed;