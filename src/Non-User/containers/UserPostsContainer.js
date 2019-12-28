import React from "react"
import Post from "../components/UserPosts"

class UserPostsContainer extends React.Component {
    render(){
        let orderedPost = this.props.posts.sort((a, b) => {
            return a.id > b.id ? -1 : 1
        })
        
        return (
            <div className="non-user-posts">
                <h1>Recent Posts</h1>
                <div className="user-profile-posts">
                    {orderedPost.slice(0,6).map(post => {
                        return < Post key={post.id} postObject={post}/>
                    })}                   
                </div>

            </div>
        )
    }
}

export default UserPostsContainer