import React from "react"
import Swal from 'sweetalert2'

const button = {
    cursor: "pointer",
}

class ShowHeader extends React.Component{

    likeGame = (game) => {
        
        fetch(`http://localhost:3001/game/like/${game.id}`, {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
                "Game-Name": `${game.name}`,
                "Image": `${game.background_image}`
            }
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

        return (
            <div>
                This is the ShowHeader

                <h1>{name}</h1>

                <div>
                    <img alt={name} src={background_image}></img>
                </div>

                <button onClick={() => this.likeGame(this.props.movieObj)}
                className="button is-black">Like</button>

                <div>
                    Genres:
                    {!this.props.movieObj.genres ? <h1>True</h1> : this.props.movieObj.genres.map(genre => {
                        return <h1 key={genre.id}>{genre.name}</h1>
                    })}
                </div>

                <div>
                    ScreenShots:
                    {!this.props.screenShots ? <h1>false</h1> : this.props.screenShots.map(picture => {
                        return (
                        <div key={picture.id}>
                            <img alt={picture.id} src={picture.image}></img>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ShowHeader