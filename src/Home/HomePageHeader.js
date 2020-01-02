import React from "react";
import { Link } from "react-router-dom";

class HomePageHeader extends React.Component {

    render(){
        return(
            <div className="homepage-header ">
                <div className="title-container">
                    <h1 className="animated bounceIn">The Game Couch</h1>
                    <button className="button home-browse animated bounceIn">
                       <Link to="/games">Browse</Link> 
                    </button>
                    {/* Photo by Nick Hamze on Unsplash */}
                </div>
            </div>
        )
    }
}

export default HomePageHeader