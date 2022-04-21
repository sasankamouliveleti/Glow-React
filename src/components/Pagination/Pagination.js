function Pagination(props) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.total / props.perPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <ul className="pagination">
            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
            {pageNumbers.map((number) => {
                return (<li key={number} className="waves-effect">
                    <a onClick={() => { props.paginate(number) }}>{number}</a>
                </li>)
            })}
            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
        </ul>
    )
}

export default Pagination;