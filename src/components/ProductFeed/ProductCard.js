import ReactStars from 'react-stars';
import './ProductCard.css';

function ProductCard(props) {

    return (
        <div class="product-card">
            <div class="row">
                <div class="col s3">
                    <br/>
                    <img src={props.pimage} alt={props.name} width="180px" height="200px"/>
                </div>
                <div class="col s6">
                    <h4>{props.pname}</h4>
                    <h6>{props.pcost}</h6>
                    <br /><br /><br />
                    <span><ReactStars
                        value={props.prating}
                        size={24}
                        edit={false}
                        color2={'#ffd700'} />({props.pratingnumber})</span>
                </div>
                <div class="col s3">
                    <h4>Verified</h4>
                    <h5>Track</h5>
                    <br/><br/><br/>
                    <div className='row'>
                        <div className='col s4'>
                            {props.pdiscount} Off
                        </div>
                        {props.category.map((obj, key) => {
                            return (<div className='col s4' key={key}>{obj}</div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;