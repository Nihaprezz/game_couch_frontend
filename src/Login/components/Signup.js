import React from "react"

const sample = {
    width: '40vw'
}

class Signup extends React.Component {
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
    
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
        return(
            <div style={sample}>
                <h1 className="is-size-1">Sign Up</h1>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input onChange={(event) => this.handleInputChange(event)}
                        className="input" name="username" type="text" placeholder="Username"/>
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
                        className="input" name="bio" type="text" placeholder="Bio"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Avatar</label>
                    <div className="control">
                        <input onChange={(event) => this.handleInputChange(event)}
                        className="input" name="avatar" type="text" placeholder="Avatar"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Favorite Genre</label>
                    <div className="control">
                        <input onChange={(event) => this.handleInputChange(event)}
                        className="input" name="genre" type="text" placeholder="Genre"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Location</label>
                    <div className="control">
                        <input onChange={(event) => this.handleInputChange(event)}
                        className="input" name="location" type="text" placeholder="Location"/>
                    </div>
                </div>
                <div className="control">
             
                    <button onClick={(event) => this.props.createUser(event, this.state)}
                    className="button is-primary is-light">Submit</button>
                    {/* eslint-disable-next-line */}
                    <span>  Or  <a onClick={() => this.props.switchForm()}
                    > Login</a></span>
                </div>
            </div>
        )
    }
}

export default Signup