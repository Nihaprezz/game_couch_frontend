import React from "react"
import { connect } from "react-redux"

class UserPosts extends React.Component {

    render(){
        let {content, created_at, mainuser_id, id } = this.props.postObject
      
        return (
            
            <div>
                <p>{content}</p>
                <p>Posted on: {created_at.split("T")[0]}</p>
                {this.props.currentUser.id === mainuser_id && <button className="button is-light" onClick={() =>  this.props.deletePost(id)}>Delete</button> }
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