import React from "react"
import { trackPromise} from 'react-promise-tracker';
import { LoadingSpinerComponent } from './Loading'
import ShowHeader from './container/ShowHeader'
import ShowDetails from "./container/ShowDetails"


class ShowPageContainer extends React.Component {
    constructor(){
        super()

        this.state = {
            showGame: {},
            gameScreenShots: []
        }
    }

    componentDidMount(){
        let gameID = this.props.gameID
        trackPromise(
            fetch(`http://localhost:3001/game/${gameID}`)
            .then(resp => resp.json())
            .then(game => {
                this.setState({
                    showGame: game
                })
            })
        );

        trackPromise(
            fetch(`http://localhost:3001/game_screenshots/${gameID}`)
                .then(resp => resp.json())
                .then(screenShots => {
                this.setState({
                    gameScreenShots: screenShots.results
                })
            })
        )
    }

    render(){
        return (
            <div>
                {!this.state.showGame.name ? <LoadingSpinerComponent/> : (
                    <div>
                    < ShowHeader movieObj={this.state.showGame} screenShots={this.state.gameScreenShots}/> 
                    < ShowDetails movieObj={this.state.showGame}/>
                    </div>
                )}  
            </div>
        )
    }
}


export default ShowPageContainer