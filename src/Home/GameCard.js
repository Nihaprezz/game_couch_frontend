import React from "react";

class GameCard extends React.Component {

    render(){
        console.log(this.props)
        return (
            <div>
            GameCard : {this.props.gameObject.name}
            </div>
        )
    }
}

export default GameCard