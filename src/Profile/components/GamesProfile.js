import React from "react"
import { Link } from "react-router-dom"

class GamesProfile extends React.Component {

    render(){
        let {name,game_api_id, picture } = this.props.gameObject

        const cardStyle = {
            background: `url(${picture})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
            width: 'auto',
            height: '22vh'
        }

        return (

            <div className="my-profile-game-card">
                <div style={cardStyle}>
                </div>
                < Link to={`/game/${game_api_id}`}>
                {name}
                </Link>
            </div>
        )
    }
}

export default GamesProfile