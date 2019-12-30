import React from "react" ;
import { Link } from "react-router-dom";
import { connect } from "react-redux"

class GameReview extends React.Component {

    render() {
        let {content, username, created_at, mainuser_id, id} = this.props.reviewObject
        return (
            <div className="game-review-card">
                <Link to={`/user/${mainuser_id}`}>{username}</Link>
                <h1>{content}</h1>
                <p>Created On: {created_at.split('T')[0]}</p>

                {this.props.currentUser.id === mainuser_id && <button className="button is-light" onClick={() =>  this.props.deleteReview(id)}>Delete</button> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, null)(GameReview)