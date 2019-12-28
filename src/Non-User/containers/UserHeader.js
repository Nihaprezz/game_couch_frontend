import React from "react"
import { connect } from "react-redux"
import { addNewFriend, removeFriend } from "../../redux/actions"
import Swal from 'sweetalert2'

class UserHeader extends React.Component {

    followUser = () => {
        
        fetch(`http://localhost:3001/friend/${this.props.userObj.id}`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then( resp => resp.json())
        .then( newFriend => {
            if (newFriend.message === "Please log in"){
                Swal.fire({
                    title: 'Unable to Login!',
                    text: `${newFriend.message}`,
                    icon: 'error',
                    confirmButtonText: 'Back'
                })
            } else  {
                this.props.addNewFriend(newFriend.friend)  
            }
        })
    }

    unfollowUser = () => {
        fetch(`http://localhost:3001/friend/${this.props.userObj.id}`, {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            this.props.removeFriend(data)
        })
    }

    render(){
        let {username, avatar, bio, favorite_genre, location} = this.props.userObj

        let checkUser = this.props.usersFriends.filter( friend => {
            return friend.id === this.props.userObj.id
        })


        console.log(checkUser)
        return (
            <div className="non-user-header">
                <div className="avatar-container">
                    <img className="my-profile-avatar" alt={avatar} src={`${avatar}`}></img>
                </div>

                <div className="non-user-details">
                    <h1>{username}</h1>
                    <p className="bio">{bio}</p>

                    <div className="non-user-stats-grouped ">
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
                        {checkUser.length === 1 ? (
                            <button onClick={() => {this.unfollowUser()}}
                            className="button is-info is-light"> Already Following </button> 
                        ): (
                            <button onClick={() => {this.followUser()}}
                            className="button is-info">Follow User</button>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewFriend: (friend) => {dispatch(addNewFriend(friend))}, //dispatch to add friend to array in store
        removeFriend: (friend) => {dispatch(removeFriend(friend))}  //dispatch to remove friend from array in store
    }
}

const mapStateToProps = state => {
    return {
        usersFriends: state.usersFriends
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)