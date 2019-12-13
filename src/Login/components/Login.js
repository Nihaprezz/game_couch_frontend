import React from "react"


const sample = {
    width: '40vw'
}

class Login extends React.Component {
    constructor(){
        super()

        this.state = {
            username: "",
            password: ""
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
               <h1 className="is-size-1">Login</h1>
               <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input onChange={(event) => this.handleInputChange(event)}
                        className="input" type="text" name="username" placeholder="Username"/>
                    </div>
                </div> 

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input onChange={(event) => this.handleInputChange(event)}
                        className="input" type="text" name="password" placeholder="Password"/>
                    </div>
                </div>

                <div className="control">
                    <button onClick={ (event) => {this.props.loggingIn(event, this.state)}}
                    className="button is-primary is-light">Submit</button>
                    {/* eslint-disable-next-line */}
                    <span>  Or  <a onClick={() => this.props.switchForm()}
                    > Sign Up</a></span>
                </div>
            </div>
        )
    }
}

export default Login