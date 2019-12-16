import React from "react" 
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