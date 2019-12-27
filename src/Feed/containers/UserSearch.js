import React from "react"
import ResultsProfile from "../components/ResultsProfile"

class UserSearch extends React.Component{
    constructor(){
        super()

        this.state = {
            searchText : "",
            searchResults: []
        }
    }

    onChange = (e) => {
        this.setState({searchText: e.target.value})
    }

    searchUsers = () => {
        if(this.state.searchText === ""){
            alert('Search Field Cannot Be Empty!')
        } else  {
            fetch(`http://localhost:3001/user/search/${this.state.searchText}`)
            .then(resp => resp.json())
            .then(results => {
                this.setState({
                    searchResults: results
                })
            })    
        }
    }

    render(){
        console.log(this.state.searchResults)
        return (
            <div className="recommended-friends-container">
                <h1>Search</h1>
                {/*eslint-disable-next-line*/}
                <div> or <a onClick={() => this.props.switch()}>Go Back to Recommended</a></div>

      
                <div id="user-search-input" className="field has-addons">
                <div className="control">
                    <input onChange={(e) => {this.onChange(e)}}
                    className="input" type="text" placeholder="Enter Username"/>
                </div>
                <div className="control">
                    {/*eslint-disable-next-line*/}
                    <a onClick={() => {this.searchUsers()}}
                    className="button is-link">
                    Search
                    </a>
                </div>
                </div>

                <div className="found-results-container">  
                  { !Array.isArray(this.state.searchResults) ? < ResultsProfile results={this.state.searchResults} />  : null}
                </div>
            </div>
        )
    }
}

export default UserSearch