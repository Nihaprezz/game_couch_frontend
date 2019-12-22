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
            <div className="profile-header">
                <h1>Username : {username}</h1>
                <div className="avatar-container">
                    <img alt={avatar} src={`${avatar}`}></img>
                </div>
                <p>Bio: {bio}</p>
                <p>Favorite Genre: {favorite_genre === "" ? "No Genre Picked" : favorite_genre}</p>
                <p>Location: {location}</p>
                <p>Following: {this.props.friends.length} </p>
                <br></br>
                {checkUser.length === 1 ? (
                    <button onClick={() => {this.unfollowUser()}}
                    className="button is-success"> Already Following </button> 
                ): (
                    <button onClick={() => {this.followUser()}}
                    className="button is-dark">Follow User</button>
                )}
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