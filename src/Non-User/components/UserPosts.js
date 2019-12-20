import React from "react"
import { connect } from "react-redux"

class UserPosts extends React.Component {

    render(){
        let {content, created_at, mainuser_id, id } = this.props.postObject
      
        return (
            
            <div>
                UserPost: 
                <p>{content}</p>
                <p>{created_at.split("T")[0]}</p>
                {this.props.currentUser.id === mainuser_id && <button onClick={() =>  this.props.deletePost(id)}>Delete</button> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(UserPosts)