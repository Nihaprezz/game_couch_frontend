import React from "react";
import GameCard from "./GameCard"
import { connect } from "react-redux"

class FeaturedGamesContainer extends React.Component{

    render(){
        return (
            <div>
                This is the FeaturedGamesContainer
                {this.props.justReleased.map(game => {
                    return < GameCard key={game.id} gameObject={game}/>
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
