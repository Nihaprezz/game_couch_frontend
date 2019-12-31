import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const genres = ["Action", "Arcade", "Adventure", "Casual", "Family", "Fighting", "Indie", "Platformer", "Puzzle", "Racing", "RPG", "Shooter","Simulation", "Sports", "Strategy"]

class EditProfile extends React.Component {
    constructor(){
        super();
        
        this.state = {
            username: "",
            password: "",
            bio: "",
            avatar: "",
            favorite_genre: "",
            location: ""
        }
    }

    componentDidMount(){
        this.setState({
            username: this.props.currentUser.username,
            bio: this.props.currentUser.bio,
            avatar: this.props.currentUser.avatar,
            favorite_genre: this.props.currentUser.favorite_genre,
            location: this.props.currentUser.location
        })
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateUser = (e) => {
        console.log(this.state)
        let {username, password, bio, avatar, favorite_genre, location} = this.state

        fetch('http://localhost:3001/user/edit', {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                username,
                password,
                bio, 
                avatar, 
                favorite_genre, 
                location
            })
        })
        .then(resp => resp.json())
        .then(updatedProfile => {
            console.log(updatedProfile)
            debugger
        })

    }
    
   
    render(){
        return(
            <div className="login-page-container">
                <div id="edit-profile-form" className="login-signup-form">
                    <div className="edit-profile-header">
                        <i className="fas fa-user-edit"></i>
                        <h1>Edit Profile</h1>
                    </div>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="username" type="text" placeholder="Username" value={this.state.username}/>
                        </div>
                    </div> 

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="password" type="text" placeholder="Password"/>
                        </div>
                    </div> 

                    <div className="field">
                        <label className="label">Bio</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="bio" type="text" placeholder="Bio" value={this.state.bio}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Avatar</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="avatar" type="text" placeholder="Avatar" value={this.state.avatar}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Favorite Genre</label>
                        <div className="select">
                            <select name="favorite_genre" onChange={(event) => this.handleInputChange(event)} value={this.state.favorite_genre}>
                                {genres.map(genre => {
                                    return <option key={genre}>{genre}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Location</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="location" type="text" placeholder="Location" value={this.state.location}/>
                        </div>
                    </div>
                    <div className="control form-submit-container">
                
                        <button onClick={(event) => this.updateUser(event, this.state)}
                        className="button is-link">Update</button>
                        {/* eslint-disable-next-line */}
                        <span>  Or  <Link to="/profile">
                         Back</Link></span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(EditProfile)