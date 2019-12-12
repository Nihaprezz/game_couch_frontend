import React from "react";
import HomePageHeader from "./HomePageHeader"
import FeaturedGamesContainer from "./FeaturedGamesContainer"

class HomePage extends React.Component{

    render(){
        return(
        <div>
            < HomePageHeader />
            < FeaturedGamesContainer />
        </div>
        )
    }
}

export default HomePage;