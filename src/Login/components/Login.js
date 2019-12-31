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
               <h1 className="is-size-1 login-header">Login</h1>
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
                        className="input" type="password" name="password" placeholder="Password"/>
                    </div>
                </div>

                <div className="control form-submit-container">
                    <button onClick={ (event) => {this.props.loggingIn(event, this.state)}}
                    className="button is-link">Login</button>
                    {/* eslint-disable-next-line */}
                    <span>  Don't have an account? <a onClick={() => this.props.switchForm()}
                    > Sign Up</a></span>
                </div>
            </div>
        )
    }
}

export default Login