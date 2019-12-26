import React from "react";
import { connect } from "react-redux"
import { addingToAllPosts } from "../../redux/actions"

class UserPostContainer extends React.Component {
    constructor(){
        super()

        this.state = {
            newPost: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = () => {
        if (this.state.newPost !== "") {
            fetch("http://localhost:3001/posts",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
                },
                body: JSON.stringify({
                    content: this.state.newPost
                })
            })
            .then(resp => resp.json())
            .then(newPost => {
                console.log(newPost)
                this.props.addingToAllPosts(newPost)
                //Will have to eventually push this new post into an array 
            })
            this.setState({newPost: ""})
        } else {
            alert('Post cannot be empty!')
        }
    }

    render(){
        let {username, avatar } = this.props.user

        return (

                <div className="user-avatar-post-container">
                    <div className="feed-page-user-details">
                        <div className="feed-avatar-container">
                            <img alt="users profile" src={`${avatar}`}></img>
                        </div>
                        <h1>{username}</h1> 
                    </div>

                    <hr id="avatar-post-divider"></hr>

                    <div className="feed-create-post-container">
                        <p>New Post :</p>
                        <textarea onChange={(e) => this.onChange(e)}
                        id="textarea-new-post"
                        className="textarea" name="newPost" placeholder="Enter Post"
                        value={this.state.newPost}></textarea>
                        <br></br>
                        <button onClick={() => this.onSubmit()}
                        className="button is-link is-rounded">Create</button>
                    </div>

                </div>
        )
    }
}


const mapDispatchToState = (dispatch) => {
    return {
        addingToAllPosts: (post) => {dispatch(addingToAllPosts(post))}
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser
    }
}


export default connect(mapStateToProps, mapDispatchToState)(UserPostContainer)