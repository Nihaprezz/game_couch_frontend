import React from "react";
import { Link } from "react-router-dom"

const reSize = {
    width: '10vw', 
    height: '10vh'
}

class ProfileCard extends React.Component {

    render(){
        let {id, username, avatar} = this.props.userObject 
        return (
            <div>
                <p>id : {id}</p>
                <p>username : {username}</p>
                <Link to={`/user/${id}`}><img style={reSize} alt="profile-pic" src={avatar}></img></Link>
            </div>
        )
    }
}

export default ProfileCard