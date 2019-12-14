import React from "react";
import { Link } from "react-router-dom";
import GameReviesContainer from "./GameReviewsContainer"

class ShowDetails extends React.Component{
    
    render(){
        let { description_raw, rating, released, website, stores} = this.props.movieObj
   
        return (
            <div>
                This is the Show Details 
                <p>Description: {description_raw}</p>
                <p>Rating: {rating}</p>
                <p>Released: {released}</p>
                <a href={website}>Website</a>

                

                <div>
                    Video: {this.props.movieObj.clip ? <video src={this.props.movieObj.clip.clip} controls></video> : (
                      <h1>no video</h1> 
                    )}
                </div>
    
                <div>
                    Stores: 
                    {stores.map(store => {
                        // eslint-disable-next-line
                        return (
                            <div key={store.id /* eslint-disable-next-line */}>
                                <a  target="_blank" href={store.url}>{store.store.name}</a>
                            </div>
                        )
                    })}
                </div>

                {/* this is where the video game reviews will be rendering */}
                < GameReviesContainer />

                <Link to="/games" className="button is-primary">Back To Games</Link>
            </div>
        )
    }
}

export default ShowDetails