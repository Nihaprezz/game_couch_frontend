import React from "react";
import { Link } from "react-router-dom"

class GameCard extends React.Component {

    render(){
        return (
            <div>
            GameCard:
            < Link to={`/game/${this.props.gameObject.api_id}`}>{this.props.gameObject.name}</Link>
            </div>
        )
    }
}

export default GameCard