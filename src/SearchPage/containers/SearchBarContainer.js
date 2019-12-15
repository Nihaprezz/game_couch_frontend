import React from "react";
import { connect } from "react-redux"
import {gameSearchResults} from "../../redux/actions"

class SearchBarContainer extends React.Component {
    constructor(){
        super()

        this.state = {
            searchText: ""
        }
    }

    handleSearchSubmit = (e) => {
        e.preventDefault()
        if (this.state.searchText !== ""){
            let search = this.state.searchText
            fetch(`http://localhost:3001/game/search/${search}`)
            .then(resp => resp.json())
            .then(games => {
                this.props.gameSearchResults(games.results)
            })
        }
        
        document.getElementById("game-search").value = "" //janky way of resetting the value of the search input
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
                    id="game-search" className="input" type="text" name="Search" placeholder="Search..."/>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        gameSearchResults: (games) => { dispatch(gameSearchResults(games))}
    }
}

export default connect(null, mapDispatchToProps)(SearchBarContainer)