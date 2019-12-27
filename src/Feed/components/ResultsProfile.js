import React from "react"
import { Link } from "react-router-dom"

const reSize = {
    borderRadius: '50%',
    height: '8vh'
}

class ResultsProfile extends React.Component {
    render(){
        return (
            <div>
               {this.props.results.message ? (
                   <div>No user found with the username entered. Search Again?</div>
               ) : (
                   <div className="recommended-profile-card">
                        <p>{this.props.results.username}</p>
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