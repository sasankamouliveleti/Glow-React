import "./DiscussionCard.css";
function DiscussionCard(props) {
    return (
        <div class="discussion-card">

            <div class="row">
            <div class="col s12"></div>
                <div class="col s3">
                    <img src={props.disucssionImg} alt={props.distitle} width="250px" height="250px" />
                </div>
                <div class="col s9"> <h4>{props.distitle}</h4>
                    <p>{props.disdesc}</p>
                </div>
            </div>

            <div className="row">
                <div className="col s8">
                    {props.tags.map((obj, key) => {
                        return (
                            <div className="col 4 tags-font" key={key}>
                                <b>{obj}</b>
                            </div>
                        )
                    })}
                </div>
                <div className="col s4">
                    {/* Upvote downvote */}
                </div>
            </div>
        </div>
    )
}

export default DiscussionCard;