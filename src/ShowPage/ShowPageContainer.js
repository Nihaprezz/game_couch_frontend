import React from "react"

class ShowPageContainer extends React.Component {
    constructor(){
        super()

        this.state = {
            showGame: {}
        }
    }

    componentDidMount(){
        console.log("Mounted", this.props.gameID)
    }

    render(){
        return (
            <div>This is the show Page Container </div>
        )
    }
}


export default ShowPageContainer