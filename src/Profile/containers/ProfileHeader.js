import React from "react" 
import { connect } from "react-redux"

class ProfileHeader extends React.Component {
    

    render(){
        let {username, bio, avatar, favorite_genre, location} = this.props.currentUser
        return (
            <div className="profile-header">
                <h1>Username : {username}</h1>
                <div className="avatar-container">
                    <img alt={avatar} src={`${avatar}`}></img>
                </div>
                <p>Bio: {bio}</p>
                <p>Favorite Genre: {favorite_genre === "" ? "No Genre Picked" : favorite_genre}</p>
                <p>Location: {location}</p>
                <p>Following: {this.props.friends.length} </p>
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