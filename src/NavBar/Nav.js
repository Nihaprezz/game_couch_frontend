import React from "react"
import { Link } from "react-router-dom"

class Nav extends React.Component {

    render(){
        return (
            <div className="buttons">
                < Link className="button is-primary" to="/home">
                     Home 
                </Link>
                < Link className="button is-primary" to="/games"> 
                    Games 
                </Link>
                
            </div>
        )
    }
}

export default Nav