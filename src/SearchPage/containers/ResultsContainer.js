import React from "react";
import FilterBar from "../components/FilterBar"
import GameCards from "../components/SearchGameCards"
import { connect } from "react-redux"

class ResultsContainer extends React.Component {

    render(){
        return (
            <div className="results-container"> 
                <div className="results-filter-section">
                    < FilterBar /> 
                </div>

                <div className="results-game-section">
                    {this.props.games.map(game => {
                        return < GameCards key={game.id} gameObj={game}/>
                    })} 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        games: state.justReleased
    }
}


export default connect(mapStateToProps)(ResultsContainer)
