import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { signOut } from "../redux/actions"
import "../styles/nav_bar.scss"

class Nav extends React.Component {

    render(){
        return (
            <div className="buttons">
                <div className="nav-left">
                    < Link className="nav-item" to="/home">
                        Home 
                    </Link>
                    < Link className="nav-item" to="/games"> 
                        Games
                    </Link>  
                </div>


                {/* Logic to handle showing links. Fragment used for React to stop erroring with JSX returns */}
                <div className="right-nav-links">
                    {!Array.isArray(this.props.currentUser) ? (
                    <React.Fragment>
                        < Link className="nav-item" to="/profile">
                        {this.props.currentUser.username}'s Profile
                        </Link> 

                        <Link className="nav-item" to="/feed">
                            Feed
                        </Link> 
                    </React.Fragment>
                    ): null}


                    {!Array.isArray(this.props.currentUser) ? (
                        // eslint-disable-next-line
                        <a onClick={() => this.props.signOut()}
                        className="nav-item">
                            Sign Out
                        </a>
                    ): (
                        <Link className="nav-item" to="/login">
                            Login
                        </Link>
                    )}   
                </div>

                

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