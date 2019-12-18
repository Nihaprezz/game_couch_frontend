import React from "react";
import { Link } from "react-router-dom"

const test = {
    width: '10vw',
    height: '10vh'
}

class Posts extends React.Component {
    render(){
        let {post_content, post_user, post_user_image, post_created, post_user_id} = this.props.postObj
        return (
            <div>
                <div className="post-avatar-container" >
                    <img style={test} alt="profile-pic" src={post_user_image}></img>  
                </div>
                <p>Post: {post_content}</p> 
                < Link to={`/user/${post_user_id}`}> Username: {post_user} </Link>
                <p>Created on: {post_created.split('T')[0]}</p> 
                
            </div>
        )
    }
}

export default Posts