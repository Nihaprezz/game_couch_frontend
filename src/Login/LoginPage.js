import React from "react"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { connect } from "react-redux"
import { signUp, logIn } from "../redux/actions"
import "../styles/login_page.scss"

class LoginPage extends React.Component {
    constructor(){
        super();

        this.state = {
            displayLogin: true
        }
    }

    switchForm = () => {
        this.setState({
            displayLogin: !this.state.displayLogin
        })
    }

    createUser = (e, userInfo) => {
        e.preventDefault();
        this.props.signUserUp(userInfo)    
    }

    loggingIn = (e, userInfo) => {
        e.preventDefault();
        this.props.logIn(userInfo)
    }
    
    render(){
        return(
            <div className="login-page-container">
                <div className="login-signup-form">
                {this.state.displayLogin ? 
                (
                < Login switchForm={this.switchForm} loggingIn={this.loggingIn}/>
                ) : 
                (
                < Signup switchForm={this.switchForm} createUser={this.createUser} />
                )}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUserUp: (info) => {dispatch(signUp(info))},
    logIn: (user) => {dispatch(logIn(user))}
})

export default connect(null, mapDispatchToProps)(LoginPage);