import React from "react";
import GameCard from "./GameCard"
import { connect } from "react-redux"
import gamesData from "../data.json"

//imported gamesData from a hard coded json file. It beats making another fetch call
class FeaturedGamesContainer extends React.Component{

    render(){
        return (
            <div className="featured-container">
                <div className="featured-header">
                    <h1 className="featured-text is-size-1">Featured Games</h1>
                </div>
                
                <div className="featured-games">
                    {gamesData.games.map(game => {
                        return < GameCard key={game.id} gameObject={game} />
                    })}  
                </div>
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
