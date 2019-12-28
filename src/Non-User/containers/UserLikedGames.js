import React from "react"
import GameCard from "../../Profile/components/GamesProfile"

class UserLikedGames extends React.Component {
    render(){
        return (
            <div className="non-user-liked-games">
                <h1>Liked Games</h1>
                <div className="my-liked-games">
                    {this.props.likedGames.slice(0,6).map( game => {
                        return < GameCard key={game.id} gameObject={game}/>
                    })}
                </div>
            </div>
        )
    }
}

export default UserLikedGames