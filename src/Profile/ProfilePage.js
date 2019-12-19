import React from "react"
import ProfileHeader from "./containers/ProfileHeader"
import ProfileLikedGames from "./containers/ProfileLikedGames"
import ProfilePosts from "./containers/ProfilePosts"
import { connect } from "react-redux"


class ProfilePage extends React.Component {    
    render(){
        return (
            <div> 
                < ProfileHeader currentUser={this.props.currentUser}/>
                < ProfileLikedGames />
                <br></br>
                < ProfilePosts />
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(ProfilePage)