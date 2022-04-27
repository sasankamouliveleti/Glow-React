import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductFeed/ProductCard";
import axios from "axios";

function Cart() {
    const [currCart, setcurrCart] = useState([]);
    useEffect(() => {
        axios.get("/Glow-React/data/products.json").then((res) => {
            let itemsTorender = [];
            if (res.data) {
                let products = res.data;
                let prodId = JSON.parse(sessionStorage.getItem('cart'));
                let uniqueChars = [...new Set(prodId)];
                console.log(uniqueChars)
                for (let i = 0; i < uniqueChars.length; i++) {
                    if (uniqueChars[i] != '') {
                        itemsTorender.push(products[uniqueChars[i] - 1]);
                    }
                }
            }
            setcurrCart(itemsTorender);
        });
    }, []);
    return (
        <React.Fragment>
            <Navbar loginflag={true} />
            <br />
            <div className="container">
                {currCart.length>0?<React.Fragment>{
                    
                    currCart.map((obj, key) => {
                        return (
                            <ProductCard id={obj.pid} pname={obj.pname} pimage={obj.pimage} pcost={obj.pcost} pdiscount={obj.pdiscount}
                                prating={obj.prating} pratingnumber={obj.pratingnumber} verified={obj.verified} category={obj.category} key={key} />
                        )
                    })
                    
                }</React.Fragment>:
                <div className="center">
                    <h3>Cart is Empty</h3>
                    </div>}
            </div>
        </React.Fragment>)

}

export default Cart;