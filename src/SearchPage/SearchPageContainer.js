import React from "react";
import SearchBar from "./containers/SearchBarContainer"
import ResultsContainer from "./containers/ResultsContainer"


class SearchPageContainer extends React.Component {
    
    render (){
        return (
        <div>
            <h1>This is the Search Page Component</h1>
            < SearchBar />
            < ResultsContainer />
        </div>
      )
    }
}

export default SearchPageContainer