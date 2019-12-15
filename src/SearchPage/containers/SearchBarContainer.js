import React from "react";

class SearchBarContainer extends React.Component {
    constructor(){
        super()

        this.state = {
            searchText: ""
        }
    }

    handleSearchSubmit = (e) => {
        e.preventDefault()
        console.log("hitting submit", this.state.searchText)
    }

    onSearchChange = (e) => {
        this.setState({searchText: e.target.value})
    }

    render(){
        return (
            <form onSubmit={this.handleSearchSubmit}
            className="field has-addons">
                <div className="control">
                    <input onChange={(e) => this.onSearchChange(e)}
                    className="input" type="text" name="Search" placeholder="Search..."/>
                </div>
            </form>
        )
    }
}

export default SearchBarContainer