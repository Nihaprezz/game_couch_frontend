import React from "react"
import UserHeader from "./containers/UserHeader"
import UserLikedGames from "./containers/UserLikedGames"
import UserPostsContainer from "./containers/UserPostsContainer"

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
            <div>
                < UserHeader userObj={this.state.user}
                friends={this.state.friends} />
                <br></br>
                < UserLikedGames likedGames={this.state.likedGames}/>
                <br></br>
                < UserPostsContainer posts={this.state.posts} />
            </div>
        )
    }
}

export default UserPage;