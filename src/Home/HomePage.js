import React from "react";
import HomePageHeader from "./HomePageHeader"
import FeaturedGamesContainer from "./FeaturedGamesContainer"
import "../styles/home_page.scss"

class HomePage extends React.Component{

    render(){
        return(
        <div className="home-page-container">
            < HomePageHeader />
            < FeaturedGamesContainer />
        </div>
        )
    }
}

export default HomePage;