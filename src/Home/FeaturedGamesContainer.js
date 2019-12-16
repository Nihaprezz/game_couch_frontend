import React from "react";
import GameCard from "./GameCard"
import { connect } from "react-redux"
import gamesData from "../data.json"

//imported gamesData from a hard coded json file. It beats making another fetch call
class FeaturedGamesContainer extends React.Component{

    render(){
        return (
            <div>
                This is the FeaturedGamesContainer
                {gamesData.games.map(game => {
                    return < GameCard key={game.id} gameObject={game} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        justReleased: state.justReleased
    }
}
export default connect(mapStateToProps)(FeaturedGamesContainer)
