import React from "react"
import { trackPromise} from 'react-promise-tracker';
import { LoadingSpinerComponent } from './Loading'
import { connect } from 'react-redux'
import ShowHeader from './container/ShowHeader'
import ShowDetails from "./container/ShowDetails"
import "../styles/game_show_page.scss"


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

        const screenShotStyle = {
            width: 'auto',
            height: '30vh'
        }
        
        console.log(this.props.userLikedGames)
        return (
            <div>
                {!this.state.showGame.name ? <LoadingSpinerComponent/> : (
                    <div className="show-page-container">
                        < ShowHeader movieObj={this.state.showGame}/> 

                        <div className="show-page-screenshots"> 
                            <h1>Screenshots</h1>
                            <div className="screenshots-container">
                            {!this.state.gameScreenShots ? <h1>false</h1> : this.state.gameScreenShots.slice(0,3).map(picture => {
                                return (
                                <div key={picture.id}>
                                    <img style={screenShotStyle} alt={picture.id} src={picture.image}></img>
                                </div>
                                )
                            })}
                            </div>
                        </div>


                        < ShowDetails movieObj={this.state.showGame} showGame={this.state.showGame}/>
                    </div>
                )}  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userLikedGames: state.userLikedGames
    }
}

export default connect(mapStateToProps, null)(ShowPageContainer)