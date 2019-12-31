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

        //Resetting the game review text area
        this.setState({review: ""})
    }

    deleteReview = (id) => {
        fetch(`http://localhost:3001/review/${id}`, {
            method: "DELETE", 
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
            let updatedReviews = [...this.state.gameReviews].filter(review => review.id !== data.id)
            this.setState({gameReviews: updatedReviews})
        })

        
    }

    render() {
        let orderedReviews = this.state.gameReviews.sort((a,b) => {
            return a.id > b.id ? -1 : 1
        })
 
        return (
            <div className="show-game-reviews-container"> 
                <div className="show-game-review-text">
                    <h1>Reviews</h1>
                </div>

                <div style={test} className="game-review-textarea">
                    <textarea onChange={(e) => {this.onChange(e)}}
                    className="textarea" id="textarea-game-review" placeholder="Enter Game Review" value={this.state.review}></textarea>
                    <br></br>
                    <button onClick={() => {this.onSubmit()}}
                    className="button">Review</button>
                </div>
                
                <div className="game-reviews-container">
                    {orderedReviews.length === 0 ? <h1 className="no-review-text"> No Reviews. Be the first to review!</h1> : (
                        orderedReviews.map(review => {
                            return < GameReview key={review.id} reviewObject={review} deleteReview={this.deleteReview} />
                        })
                    )}
                </div>
            </div>
            
        )
    }
}

export default GameReviewsContainer