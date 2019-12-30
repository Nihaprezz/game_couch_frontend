import React from "react"
import { Link } from "react-router-dom"

class SearchGameCards extends React.Component {


    render(){
        let {name, background_image} = this.props.gameObj

        const cardStyle = {
            background: `url(${background_image})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
            width: 'auto',
            height: '16vw'
        }

        return (
            <div className="search-game-card">
                <Link to={`/game/${this.props.gameObj.id}`}>
                <div style={cardStyle} className="search-game-card-image"></div>
                </Link>
                <Link className="search-game-text" to={`/game/${this.props.gameObj.id}`}>{name}</Link>
            </div>
        )
    }
}

export default SearchGameCards