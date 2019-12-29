import React from "react"
import Swal from 'sweetalert2'

const button = {
    cursor: "pointer",
}

class ShowHeader extends React.Component{

    likeGame = (game) => {
        let gameName = game.name.toString() //<-- just in case the game name isn't a string

        fetch(`http://localhost:3001/game/like/${game.id}`, {
            method: "POST",
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                name: gameName,
                image: game.background_image
            })
        })
        .then(res => res.json())
        .then(data => {
            switch(data.message) {
                case "Already Liked!":
                    Swal.fire({
                        title: 'Already Liked!',
                        text: 'Browse more games!',
                        icon: 'error',
                        confirmButtonText: 'Back'
                    })
                    break;
                case "Please log in":
                    Swal.fire({
                        title: `${data.message}`,
                        text: 'Login or Signup',
                        icon: 'error',
                        confirmButtonText: 'Back'
                    })
                    break;
                default:
                    Swal.fire({
                        title: 'Added!',
                        text: 'Game has been added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
            }
        })   
    }

    render(){
        let { background_image, name } = this.props.movieObj //named movie OBJ but should be named Game Obj... minor fix

        const headerStyle = {
            background: `url(${background_image})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
            width: 'auto',
            height: '100%'
        }
 
 
        return (
            <div style={headerStyle} className="show-game-header-container">

                <div className="show-game-header-details">
                    <h1 className="show-game-header-text">{name}</h1>

                    <button onClick={() => this.likeGame(this.props.movieObj)}
                    className="button is-link">Like</button>

                    <div>
                        Genres:
                        {!this.props.movieObj.genres ? <h1>True</h1> : this.props.movieObj.genres.map(genre => {
                            return <h1 key={genre.id}>{genre.name}</h1>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowHeader