import React from "react"

class SearchGameCards extends React.Component {
    render(){
        return (
            <div>
                SearchGameCards : {this.props.gameObj.name}
            </div>
        )
    }
}

export default SearchGameCards