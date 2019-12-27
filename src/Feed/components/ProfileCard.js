import React from "react";
import { Link } from "react-router-dom"

const reSize = {
    borderRadius: '50%', 
    height: '8vh'
}

class ProfileCard extends React.Component {

    render(){
        let {id, username, avatar} = this.props.userObject 
        return (
            <div className="recommended-profile-card">
                <p>{username}</p>
                <div>
                    <Link to={`/user/${id}`}><img style={reSize} alt="profile-pic" src={avatar}></img></Link>  
                </div>

            </div>
        )
    }
}

export default ProfileCard