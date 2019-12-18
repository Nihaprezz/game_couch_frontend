import React from "react"

class UserPosts extends React.Component {
    render(){
        let {content, created_at} = this.props.postObject
        return (
            <div>
                UserPost: 
                <p>{content}</p>
                <p>{created_at.split("T")[0]}</p>
            </div>
        )
    }
}

export default UserPosts