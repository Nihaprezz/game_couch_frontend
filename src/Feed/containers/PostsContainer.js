import React from "react";
import SearchPosts from "../components/SearchPosts"
import Posts from "../components/Posts"
import { connect } from "react-redux"
import { searchPosts } from "../../redux/actions"

const margin = {
    marginTop: '3%'
}

class PostsContainer extends React.Component {
    constructor(){
        super();

        this.state = {
            searchText: ""
        }
    }

    updateSearch = (e) => {
        // console.log(this.state)
        // console.log(e.target.value)
        // this.setState({
        //     searchText: e.target.value
        // }, console.log(this.state.searchText))
        // NOT SURE WHY THE CODE ABOVE IS NOT WORKING... 

        this.props.searchPosts(e.target.value)
    }


    render(){
        let orderedPost = this.props.allPosts.sort((a, b) => {
            return a.post_id > b.post_id ? -1 : 1 
        })


        return (
            <div style={margin}>
                < SearchPosts updateSearch={this.updateSearch}/>
                {orderedPost.slice(0,6).map(post => {
                    return < Posts key={post.post_id} postObj={post} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allPosts: state.allPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchPosts: (search) => {dispatch(searchPosts(search))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)