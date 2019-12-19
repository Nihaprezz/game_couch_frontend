import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from "react-router-dom";
import { connect } from "react-redux"
import './App.css';
import { fetchingJustReleased, checkUser } from './redux/actions'

import HomePage from "./Home/HomePage"
import Nav from "./NavBar/Nav"
import SearchPage from "./SearchPage/SearchPageContainer"
import Show from "./ShowPage/ShowPageContainer"
import ProfilePage from "./Profile/ProfilePage"
import FeedPage from "./Feed/FeedPage"
import LoginPage from "./Login/LoginPage"
import UserPage from "./Non-User/UserPage"


class App extends Component {
  componentDidMount(){
    this.props.fetchingJustReleased()

    if (localStorage.getItem('jwt')){
      this.props.checkUser()
    }
  }

  render() {
    return (
      <div className="App">
        < Nav />
        <Switch>
          < Route exact path="/" render={() => <Redirect to="/home"/>}/>
          < Route exact path="/home" component={HomePage}/>
          < Route exact path="/games" component={SearchPage}/>
          < Route exact path="/game/:id" render={(props) => {
            let gameID = props.match.params.id 
             return  < Show gameID={gameID}/> 
          }}/>
            < Route exact path="/profile" component={() => {
              return this.props.currentUser.length === 0 ? < Redirect to="/login"/> : < ProfilePage /> 
            }}/> 
  

          < Route exact path="/user/:id" render={(props) => {
            let profileId = props.match.params.id
            let userId = this.props.currentUser.id
            if (userId === parseInt(profileId)){
              return < ProfilePage />
            } else {
              return < UserPage profileId={profileId}/>
            }
          }} />

          < Route exact path="/feed" render={() => {
            return this.props.currentUser.length === 0 ? < Redirect to="/login"/> : < FeedPage /> 
          }}/>

          < Route exact path="/login" render={() => {
            return this.props.currentUser.length === 0 ? < LoginPage /> : < Redirect to="/"/>
          }}/> 
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingJustReleased: () => {dispatch(fetchingJustReleased())},
    checkUser: () => {dispatch(checkUser())}
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

