import React from "react" ;
import { Link } from "react-router-dom";

class GameReview extends React.Component {
    render() {
        let {content, username, created_at, mainuser_id} = this.props.reviewObject
        return (
            <div>
                GameReview: 
                <Link to={`/user/${mainuser_id}`}>{username}</Link>
                <h1>Content: {content}</h1>
                <p>Review Created On: {created_at.split('T')[0]}</p>
            </div>
        )
    }
}

export default GameReview