import React from "react";
import UserPostContainer from "./containers/UserPostContainer"
import PostsContainer from "./containers/PostsContainer"
import RecommendedContainer from "./containers/RecommendedContainer"
import "../styles/feed_page.scss"
import { connect } from "react-redux"
import { setAllRelatedPosts } from '../redux/actions'

class FeedPage extends React.Component {

    componentDidMount(){
        fetch('http://localhost:3001/posts', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            let allRelatedPosts = data.usersPosts.concat(data.usersFriendsPosts)
            this.props.setAllRelatedPosts(allRelatedPosts)
        })
    }

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

const mapDispatchToState = (dispatch) => {
    return {
        setAllRelatedPosts: (posts) => {dispatch(setAllRelatedPosts(posts))}
    }
}

export default connect(null, mapDispatchToState)(FeedPage)