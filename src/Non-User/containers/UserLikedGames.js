import React from "react"
import GameCard from "../../Profile/components/GamesProfile"

class UserLikedGames extends React.Component {
    render(){
        return (
            <div>
                UserLikedGames
                {this.props.likedGames.map( game => {
                    return < GameCard key={game.id} gameObject={game}/>
                })}
            </div>
        )
    }
}

export default UserLikedGames