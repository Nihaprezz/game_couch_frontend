import React from "react" 
import GameCard from "../components/GamesProfile"
import { connect } from "react-redux"
import { fetchingLikedGames } from "../../redux/actions"

class ProfileLikedGames extends React.Component {

    componentDidMount(){
        this.props.fetchingLikedGames()
    }

    render(){
        return (
            <div> 
                This is the ProfileLikedGames Comp
                {this.props.likedGames.slice(0,6).map(game => {
                    return < GameCard key={game.id} gameObject={game}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        likedGames: state.userLikedGames
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingLikedGames: () => {dispatch(fetchingLikedGames())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLikedGames)