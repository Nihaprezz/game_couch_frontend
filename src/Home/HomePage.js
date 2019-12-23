import React from "react";
import HomePageHeader from "./HomePageHeader"
import FeaturedGamesContainer from "./FeaturedGamesContainer"
import PopularGamesContainer from "./PopularGamesContainer"
import Footer from "./Footer"
import "../styles/home_page.scss"

class HomePage extends React.Component{

    render(){
        return(
        <div className="home-page-container">
            < HomePageHeader />
            < FeaturedGamesContainer />
            < PopularGamesContainer />
            < Footer />
        </div>
        )
    }
}

export default HomePage;