import React from "react";

class SearchPosts extends React.Component {

    render(){
        return (
            <div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input onChange={(e) => {this.props.updateSearch(e)}}
                        className="input" name="searchText" type="text" placeholder="Search Posts"/>
                        <span className="icon is-small is-left">
                        <i className="fas fa-search"></i>
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}

export default SearchPosts