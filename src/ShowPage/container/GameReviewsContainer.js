import React from "react" ;
import GameReview from "../component/GameReview"
import Swal from 'sweetalert2'

const test = {
    width: "40vw"
}

class GameReviewsContainer extends React.Component {
    constructor(){
        super();

        this.state = {
            gameReviews: [],
            review: ""
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/reviews/${this.props.showGame.id}`)
        .then(resp => resp.json())
        .then(data => {
            if (data.message){
                console.log('no reviews')
            } else {
              this.setState({gameReviews: data.reviews})  
            }
        })
    }

    onChange = (e) => {
        this.setState({review: e.target.value})
    }

    onSubmit = () => {
        console.log('attempting to submit game review', this.state.review)
        if (this.state.review === "") {
            alert('Review Cannot be Empty :(')
        } else  {
            fetch("http://localhost:3001/reviews", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json", 
                    "Accept": "application/json",
                    "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
                },
                body: JSON.stringify({
                    review: this.state.review,
                    game_api_id: this.props.showGame.id,
                    picture: this.props.showGame.background_image,
                    name: this.props.showGame.name
                })
             })
            .then(resp => resp.json())
            .then(review => {
                if (review.message === "Please log in"){
                    Swal.fire({
                        title: 'Unable to Review!',
                        text: `${review.message}`,
                        icon: 'error',
                        confirmButtonText: 'Back'
                    })
                } else {
                    this.setState({
                        gameReviews: [...this.state.gameReviews, review]
                    })
                }
            }) 
        }

        //Quick way to clear out the form.. Pretty sure this is not best practice.
        document.querySelector("#textarea-game-review").value = ""
    }

    render() {
        let orderedReviews = this.state.gameReviews.sort((a,b) => {
            return a.id > b.id ? -1 : 1
        })
 
        return (
            <div> 
                <div style={test} className="game-review-textarea">
                    <textarea onChange={(e) => {this.onChange(e)}}
                    className="textarea" id="textarea-game-review" placeholder="Enter Game Review" value={this.state.review}></textarea>
                    <br></br>
                    <button onClick={() => {this.onSubmit()}}
                    className="button is-rounded">Review!</button>
                </div>
                
    
                {orderedReviews.length === 0 ? <h1> No Reviews. Be the first to review!</h1> : (
                    orderedReviews.map(review => {
                        return < GameReview key={review.id} reviewObject={review} />
                    })
                )}
            </div>
            
        )
    }
}

export default GameReviewsContainer