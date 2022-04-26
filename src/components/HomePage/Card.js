import './Card.css';
function Card(props) {
    return (
        <div class="card">
            <h4><b>{props.name}</b></h4>
            {props.children}
        </div>
    )
}

export default Card;