import React from "react";
import { Link } from "react-router-dom"

class GameCard extends React.Component {

    render(){
        let {api_id} = this.props.gameObject
        return (
            <div className="featured-gamecards-container">
                <div className="gamecards-featured-container">
                < Link to={`/game/${api_id}`}>
                    <img className="featured-game-images" alt="game-cover" src={require(`../styles/pictures/${api_id}.jpg`) }></img>
                </Link>
                </div>

                <div className="game-cards-name-container">
                    < Link className="home-game-links"
                    to={`/game/${api_id}`}>{this.props.gameObject.name}</Link>  
                </div>
             
            </div>
        )
    }
}

export default GameCard