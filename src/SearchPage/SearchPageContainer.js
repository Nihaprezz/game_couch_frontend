import React from "react";
import SearchBar from "./containers/SearchBarContainer"
import ResultsContainer from "./containers/ResultsContainer"
import "../styles/show_page.scss"

class SearchPageContainer extends React.Component {
    
    render (){
        return (
        <div className="search-page">
            < SearchBar />
            < ResultsContainer />
        </div>
      )
    }
}

export default SearchPageContainer