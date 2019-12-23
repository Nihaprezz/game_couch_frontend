import React from "react";
import gamesData from "../data2.json"
import GameCard from "./GameCard"

class PopularGamesContainer extends React.Component{
    render(){
        return (
            <div className="featured-container">
                <div className="featured-header">
                    <h1 className="featured-text is-size-1">Top Rated Games</h1>
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

export default PopularGamesContainer 