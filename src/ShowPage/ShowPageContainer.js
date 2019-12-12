import React from "react"
import { trackPromise} from 'react-promise-tracker';
import { LoadingSpinerComponent } from './Loading'


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

        let { name, background_image, description_raw, dominant_color, released, website, rating } = this.state.showGame
        debugger
        return (
        
            <div>
                <LoadingSpinerComponent/>
        
                This is the show Page Container for : {name}
                <img alt={name} src={`${background_image}`}></img>
                <div>Description: {description_raw}</div>
                <div>{dominant_color}</div>
                <div>Released : {released}</div>
                <div>Website : {website}</div>
                <div>Rating : {rating}</div> 
                
                <br></br>
                <div>
                    <h1>Game Details</h1>

                </div>
            
            </div>
        )
    }
}


export default ShowPageContainer