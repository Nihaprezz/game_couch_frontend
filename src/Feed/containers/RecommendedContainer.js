import React from "react";
import ProfileCards from "../components/ProfileCard"
import UserSearch from "./UserSearch"
import { connect } from "react-redux"
import { fetchingAllUserInfo } from "../../redux/actions"

class RecommendedContainer extends React.Component {
    constructor(){
        super();

        this.state  = {
            alikeUsers: [],
            displaySearch: false
        }
    }

    componentDidMount(){
        fetch("http://localhost:3001/user/recommendations", {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(resp => resp.json())
        .then( friends => {
            this.setState({alikeUsers: friends})
        })

        this.props.fetchingAllUserInfo()
    }

    switchToSearch = () => {
        this.setState({ displaySearch: !this.state.displaySearch })
    }

    render(){
        let friendsIds = this.props.currentFriends.map(friend =>  friend.id)

        let duplicates = []

        let uniqueFriends = []
        //FILTERS OUT THE ARRAY TO MAKE SURE NO USERS THAT ARE ALREADY FRIENDS SHOW UP
        for (let user of this.state.alikeUsers) {
            if (friendsIds.includes(user.id)) {
              duplicates.push(user)
            } else {
              uniqueFriends.push(user)
            }
        }

        return (
            <div>
                {this.state.displaySearch ? < UserSearch switch={this.switchToSearch} /> : (
                    <div className="recommended-friends-container">
                        <h1>Recommended Friends</h1>

                        {/*eslint-disable-next-line*/}
                        <div>or <a onClick={() => {this.switchToSearch()}}>Search for User</a></div>

                        {uniqueFriends.map( user => {
                            return < ProfileCards key={user.id} userObject={user} />
                        })} 
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentFriends: state.usersFriends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingAllUserInfo: () => {dispatch(fetchingAllUserInfo())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedContainer)