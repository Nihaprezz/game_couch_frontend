import React from "react";
import SearchPosts from "../components/SearchPosts"
import Posts from "../components/Posts"

class PostsContainer extends React.Component {

    render(){
        return (
            <div>
                This is the PostsContainer Component
                < SearchPosts />
                < Posts />
            </div>
        )
    }
}

export default PostsContainer