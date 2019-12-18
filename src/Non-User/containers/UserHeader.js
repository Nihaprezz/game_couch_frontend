import React from "react"

class UserHeader extends React.Component {

    render(){
        let {username, avatar, bio, favorite_genre, location} = this.props.userObj

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

export default UserHeader