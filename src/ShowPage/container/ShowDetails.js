import React from "react";
// import { Link } from "react-router-dom";
import GameReviesContainer from "./GameReviewsContainer"

class ShowDetails extends React.Component{
    
    render(){
        let { description_raw, rating, released, website, stores} = this.props.movieObj
   
        return (
            <div className="show-game-details-container">
                <div className="show-game-description">
                    <h1>Description</h1>
                    <p> {description_raw}</p>
                </div>

                <div className="show-game-stats-video">

                    <div className="video-container">
                        {this.props.movieObj.clip ? ( 
                        <React.Fragment>
                            <h1>Trailer</h1> 
                            <video src={this.props.movieObj.clip.clip} controls></video> 
                        </React.Fragment>
                        ): (
                        <h1>no trailer</h1> 
                        )}
                    </div>
    
                    <div className="show-game-stats">
                        <div className="rating-released-container">
                            <div>
                                <i className="fas fa-star-half-alt"></i>
                                <p>Rating: <br></br> {rating}</p>                      
                            </div>
                            <div>
                                <i className="fas fa-info-circle"></i>
                                <p>Released: <br></br> {released}</p>    
                            </div>
                        </div>
                       
                       <div className="website-and-stores">
                            <div>
                                <i className="fas fa-globe"></i>
                                <br></br>
                                { /* eslint-disable-next-line */}
                                <a target="_blank" href={website}> Game Website</a>  
                            </div>

                            <div>
                                <div>
                                    <i className="fas fa-store-alt"></i>
                                    <h1>Stores</h1>  
                                </div>
                                
                            
                                {stores.map(store => {
                                    // eslint-disable-next-line
                                    return (
                                        <div key={store.id /* eslint-disable-next-line */}>
                                            <a  target="_blank" href={store.url}>{store.store.name}</a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>

                {/* this is where the video game reviews will be rendering */}
                < GameReviesContainer showGame={this.props.showGame} />

                {/* <Link to="/games" className="button is-primary">Back To Games</Link> */}
            </div>
        )
    }
}

export default ShowDetails