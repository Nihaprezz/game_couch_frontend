import React from "react";
import { Link } from "react-router-dom"
import "../../styles/post.scss"

const test = {
    borderRadius: '50%',
    height: '10vh'
}

class Posts extends React.Component {
    render(){
        let {post_content, post_user, post_user_image, post_created, post_user_id} = this.props.postObj
        return (
            <div className="post-container">
                <div className="post-avatar-container" >
                    <img style={test} alt="profile-pic" src={post_user_image}></img>  
                </div>
                <div className="post-details-container">
                    < Link to={`/user/${post_user_id}`}> {post_user} </Link>
                    <p>{post_content}</p> 
                    <p className="post-created-on">Posted on: {post_created.split('T')[0]}</p> 
                </div>
            </div>
        )
    }
}

export default Posts