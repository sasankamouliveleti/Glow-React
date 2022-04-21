import './FilterCard.css';
function FilterCard(props) {
    return (
        <div class="filter-card">
            <div class="filter-content">
                <h4>Filter</h4>
                <form action="#">
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Top Rated</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Verified</span>
                        </label>
                    </p>
                    <p>
                        Price: <input type="number"/> to <input type="number"/>
                    </p>
                </form>
                <br />
                <br />
                <h5>Sort By</h5>
                <a class="waves-effect waves-light btn-small">Price</a>
                <br />
                <br />
                <a class="waves-effect waves-light btn-small">Rating</a>
            </div>
        </div>
    )
}

export default FilterCard;