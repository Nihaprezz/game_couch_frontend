import React from "react" 
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class ProfileHeader extends React.Component {

    render(){
        let {username, bio, avatar, favorite_genre, location} = this.props.currentUser
        return (
            <div className="profile-header">
                <div className="avatar-container">
                    <img className="my-profile-avatar" alt={avatar} src={`${avatar}`}></img>
                </div>
                <div className="my-profile-details">
                    <h1>{username}</h1>
                    <p className="bio">{bio}</p>
                    <div className="stats-grouped">
                        <div>
                          <i className="fas fa-gamepad"></i>
                          <p>Favorite Genre: {favorite_genre === "" ? "No Genre Picked" : favorite_genre}</p>  
                        </div>
                        
                        <div>
                          <i className="fas fa-globe-americas"></i>
                          <p>Location: {location}</p>  
                        </div>
                        
                        <div>
                          <i className="fas fa-users"></i>
                          <p>Following: {this.props.friends.length} </p>  
                        </div>
                        
                    </div>
                    <div className="my-profile-btns">
                        <button className="button is-light">
                           <Link to="/profile/edit">Edit Profile</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        friends: state.usersFriends
    }
}

export default connect(mapStateToProps,  null)(ProfileHeader)