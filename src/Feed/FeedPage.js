import React from "react";
import UserPostContainer from "./containers/UserPostContainer"
import PostsContainer from "./containers/PostsContainer"
import RecommendedContainer from "./containers/RecommendedContainer"
import "../styles/feed_page.scss"

class FeedPage extends React.Component {

    render(){
        return (
            <div className="feed-page-container">
                < UserPostContainer />
                < PostsContainer />
                < RecommendedContainer />
            </div>
        )
    }
}

export default FeedPage