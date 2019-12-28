import React from "react"
import UserHeader from "./containers/UserHeader"
import UserLikedGames from "./containers/UserLikedGames"
import UserPostsContainer from "./containers/UserPostsContainer"
import "../styles/profile_page.scss"

class UserPage extends React.Component{
    constructor(){
        super()

        this.state = {
            user: [],
            likedGames: [],
            posts: [],
            friends: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/user/${this.props.profileId}/info`)
        .then(resp => resp.json())
        .then( data => {
            this.setState({
                user: data.user_info,
                likedGames: data.likedGames,
                posts: data.posts,
                friends: data.friends
            })
        })
    }


    render(){

        return (
            <div className="non-user-page-container">
                < UserHeader userObj={this.state.user}
                friends={this.state.friends} />
                < UserLikedGames likedGames={this.state.likedGames}/>
                < UserPostsContainer posts={this.state.posts} />
            </div>
        )
    }
}

export default UserPage;