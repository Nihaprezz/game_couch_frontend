import React from "react"
import ProfileHeader from "./containers/ProfileHeader"
import ProfileLikedGames from "./containers/ProfileLikedGames"
import ProfilePosts from "./containers/ProfilePosts"


class ProfilePage extends React.Component {
    
    render(){
        return (
            <div> 
                This is the ProfilePage Comp
                < ProfileHeader />
                < ProfileLikedGames />
                < ProfilePosts />
            </div>  
        )
    }
}

export default ProfilePage