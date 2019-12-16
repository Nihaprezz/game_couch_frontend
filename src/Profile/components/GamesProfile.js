import React from "react"
import { Link } from "react-router-dom"

class GamesProfile extends React.Component {

    render(){
        let {name,game_api_id } = this.props.gameObject
        return (

            <div>
                Games Profile Card:
                < Link to={`/game/${game_api_id}`}>
                {name}
                </Link>
            </div>
        )
    }
}

export default GamesProfile