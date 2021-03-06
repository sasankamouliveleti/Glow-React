import { useEffect, useState } from 'react';
import ReactStars from 'react-stars';
import './ProductCard.css';

function ProductCard(props) {
    const [pageBool, setPageBool] = useState(false);
    const [feedBool, setfeedBool] = useState(false)

    useEffect(() => {
        if (window.location.href.indexOf('product-description') > 0) {
            setPageBool(true);
        }
        else {
            setPageBool(false);
        }
        if (window.location.href.indexOf('product-feed') > 0) {
            setfeedBool(false);
        }
        else {
            setfeedBool(true);
        }
    }, []);
    return (
        <div class="product-card">
            <div class="row">
                <div class="col s3">
                    <br />
                    <img src={props.pimage} alt={props.name} width="180px" height="200px" />
                </div>
                <div class="col s6">
                    <h4>{props.pname}</h4>
                    <h6>${props.pcost}</h6>
                    <br /><br /><br />
                    <span><ReactStars
                        value={props.prating}
                        size={24}
                        edit={false}
                        color2={'#ffd700'} />({props.pratingnumber})</span>
                </div>
                <div class="col s3">
                    {props.verified ? <h5>Verified <span>&#9989;</span></h5> : ''}
                    <br />
                    {feedBool ?
                        <div className='row'>
                            <div className='col s2'>
                                <h6>Track </h6>
                            </div>
                            <div className='col s2'>
                                <div class="switch">
                                    <label>
                                        <input type="checkbox" />
                                        <span class="lever"></span>
                                    </label>
                                </div>
                            </div>
                        </div> : ''}
                    <br /><br /><br />
                    <div className='row'>
                        <div className='col s4 discount'>
                            {props.pdiscount ? <b> {props.pdiscount} Off</b> : ''}
                        </div>
                        {props.category.map((obj, key) => {
                            return (<div className='col s3 boxed' key={key}>{obj}</div>)
                        })}
                    </div>
                    {pageBool ? <a class="waves-effect waves-light btn cart" onClick={() => { props.addToCart(props.id) }}>Add to Cart</a> : ''}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;