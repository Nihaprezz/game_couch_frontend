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
          < Route exact path="/profile" component={ProfilePage}/>
          < Route exact path="/feed" component={FeedPage}/>
          < Route exact path="/login" component={LoginPage}/> 
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

export default withRouter(connect(null, mapDispatchToProps)(App));

