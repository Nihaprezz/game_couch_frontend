import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { signOut } from "../redux/actions"

class Nav extends React.Component {

    render(){
        return (
            <div className="buttons">
                < Link className="button is-primary" to="/home">
                     Home 
                </Link>
                < Link className="button is-primary" to="/games"> 
                    Games 
                </Link>
                < Link className="button is-primary" to="/profile">
                    Profile
                </Link>
                <Link className="button is-primary" to="/feed">
                    Feed
                </Link>
                {!Array.isArray(this.props.currentUser) ? (
                    // eslint-disable-next-line
                    <a onClick={() => this.props.signOut()}
                    className="button is-primary">
                        Sign Out
                    </a>
                ): (
                    <Link className="button is-primary" to="/login">
                        Login
                    </Link>
                )}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)