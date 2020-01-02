import React from "react" 
import Post from "../../Non-User/components/UserPosts"
//RE USING COMPONENET FROM NON USER PAGE^

class ProfilePosts extends React.Component {
    constructor(){
        super()

        this.state = {
            myPosts: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/mainuser_posts', {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then(posts => {
            this.setState({myPosts: posts})
        })
    }

    deletePost = (postID) => {
        fetch(`http://localhost:3001/posts/${postID}`, {
            method: "DELETE",
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then( post => {
            this.filterOutDeletedPost(post)
        })
    }

    filterOutDeletedPost = (post) => {
        let filteredPosts = this.state.myPosts.filter(myPost => {
            return myPost.id !== post.id
        })

        this.setState({
            myPosts: filteredPosts
        })
    }


    render(){
        return (
            <div className="profile-post-container animated zoomIn"> 
                <h1>Recent Posts</h1>
                <div className="user-profile-posts">
                    {this.state.myPosts.slice(0,6).map(post => {
                        return < Post key={post.id} postObject={post} deletePost={this.deletePost} />
                    })}  
                </div>
            </div>
        )
    }
}

export default ProfilePosts