import React from "react"
import { Link } from "react-router-dom"

class SearchGameCards extends React.Component {
    render(){
        return (
            <div>
                SearchGameCards :
                <Link to={`/game/${this.props.gameObj.id}`}>{this.props.gameObj.name}</Link>
            </div>
        )
    }
}

export default SearchGameCards