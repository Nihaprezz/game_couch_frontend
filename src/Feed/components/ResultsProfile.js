import React from "react"
import { Link } from "react-router-dom"

const reSize = {
    width: '10vw', 
    height: '10vh'
}

class ResultsProfile extends React.Component {
    render(){
        return (
            <div>
               {this.props.results.message ? (
                   <div>No user found with the username entered. Search Again?</div>
               ) : (
                   <div>
                        <h1>username: {this.props.results.username}</h1>
                        <Link to={`/user/${this.props.results.id}`}>
                            <img style={reSize} src={this.props.results.avatar} alt="avatar"></img>
                        </Link> 
                   </div>
               )}
            </div>
        )
    }
}

export default ResultsProfile