import React from "react";
import UserPostContainer from "./containers/UserPostContainer"
import PostsContainer from "./containers/PostsContainer"
import RecommendedContainer from "./containers/RecommendedContainer"

class FeedPage extends React.Component {

    render(){
        return (
            <div>
                This is the FeedPage Component
                < UserPostContainer />
                < PostsContainer />
                < RecommendedContainer />
            </div>
        )
    }
}

export default FeedPage