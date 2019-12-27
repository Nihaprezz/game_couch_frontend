import React from "react" 
import GameCard from "../components/GamesProfile"
import { connect } from "react-redux"
import { fetchingAllUserInfo } from "../../redux/actions"

class ProfileLikedGames extends React.Component {

    componentDidMount(){
        this.props.fetchingAllUserInfo()
    }

    render(){
        return (
            <div className="profile-games-container"> 
                <h1>Liked Games</h1>
                <div className="my-liked-games">
                {this.props.likedGames.slice(0,6).map(game => {
                    return < GameCard key={game.id} gameObject={game}/>
                })}
                </div>
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
        fetchingAllUserInfo: () => {dispatch(fetchingAllUserInfo())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLikedGames)