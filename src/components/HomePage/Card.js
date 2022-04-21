import './Card.css';
function Card(props) {
    return (
        <div class="card">
            <div class="container">
                <h4><b>{props.name}</b></h4>
            </div>
        </div>
    )
}

export default Card;