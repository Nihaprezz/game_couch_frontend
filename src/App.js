import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from "react-router-dom";
import { connect } from "react-redux"
import './App.css';
import { fetchingJustReleased } from './redux/actions'

import HomePage from "./Home/HomePage"
import Nav from "./NavBar/Nav"
import SearchPage from "./SearchPage/SearchPageContainer"
import Show from "./ShowPage/ShowPageContainer"
import ProfilePage from "./Profile/ProfilePage"
import FeedPage from "./Feed/FeedPage"


class App extends Component {
  componentDidMount(){
    this.props.fetchingJustReleased()
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
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingJustReleased: () => {dispatch(fetchingJustReleased())}
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));

