import React from "react" 
import Post from "../../Non-User/components/UserPosts"
//RE USING COMPONENET FROM NON USER PAGE^

class ProfilePosts extends React.Component {
    constructor(){
        super()

        this.state = {
            myPosts: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/mainuser_posts', {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then(posts => {
            this.setState({myPosts: posts})
        })
    }
    
    render(){
        return (
            <div> 
                This is the ProfilePosts Comp
                {this.state.myPosts.slice(0,6).map(post => {
                    return < Post key={post.id} postObject={post} />
                })}
            </div>
        )
    }
}

export default ProfilePosts