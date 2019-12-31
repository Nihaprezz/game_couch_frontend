import React from "react" 
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Modal from 'react-modal'
import "../../styles/modal-styling.scss"

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background            : '#151E28'
    }
};




class ProfileHeader extends React.Component {
    constructor(){
        super();

        this.state = {
            modalIsOpen: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ modalIsOpen: true });
    }

    handleCloseModal () {
        this.setState({ modalIsOpen: false });
    }

    render(){
        let {username, bio, avatar, favorite_genre, location} = this.props.currentUser
        console.log(this.props.friends)
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
                          <p className="following-span"><span className="following-span" 
                          onClick={this.handleOpenModal}
                          >Following: </span> {this.props.friends.length} </p>  
                        </div>

                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            ariaHideApp={false}
                            contentLabel="Example Modal"
                            >
                            <div className="friend-modal">
                                <h1 ref={subtitle => this.subtitle = subtitle}>Following</h1>
                                
                                <div className="modal-all-friends">
                                   {this.props.friends.map(friend => {
                                        return (
                                        <p key={friend.id}>
                                            <Link to={`/user/${friend.id}`} className="friend-link">
                                                {friend.username}
                                            </Link>
                                        </p>
                                        )
                                   })} 
                                </div>
                                <button className="button is-light" onClick={this.handleCloseModal}>close</button>
                            </div>
                        </Modal>
                        
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