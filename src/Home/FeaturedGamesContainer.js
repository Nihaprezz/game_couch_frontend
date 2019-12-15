import React from "react";
import GameCard from "./GameCard"
import { connect } from "react-redux"

class FeaturedGamesContainer extends React.Component{

    render(){
        return (
            <div>
                This is the FeaturedGamesContainer
                {/* WILL PROBABLY HAVE TO MANUALLY SEED THESE SHOW PAGE GAMES INSTEAD OF RELYING ON STATE , 
                NEED GOOD LOOKING GAMES ON THE FRONT PAGE */}
                {this.props.justReleased.slice(0,4).map(game => {
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
