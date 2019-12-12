import React from "react";
import { connect } from "react-redux"

class FeaturedGamesContainer extends React.Component{

    render(){
        console.log(this.props.justReleased)
        return (
            <div>
                This is the FeaturedGamesContainer
                {this.props.justReleased.map(game => {
                    return <div>{game.name}</div>
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
