import React from "react";

class HomePageHeader extends React.Component {

    render(){
        return(
            <div className="homepage-header">
                <div className="title-container">
                    <h1>The Game Couch</h1>
                    <p>A gaming community for you and your friends.</p>
                    <button className="button is-black">Browse</button>
                    {/* Photo by Nick Hamze on Unsplash */}
                </div>
            </div>
        )
    }
}

export default HomePageHeader