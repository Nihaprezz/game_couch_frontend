import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux"
import './App.css';
import { fetchingJustReleased } from './redux/actions'

import HomePage from "./Home/HomePage"


class App extends Component {
  componentDidMount(){
    this.props.fetchingJustReleased()
  }

  render() {
    return (
      <div className="App">
        <div>NavBar Componenet will go here</div>
        <Switch>
          < Route exact path="/home" component={HomePage}/>
          < Route exact path="/games" render={() => <div>This willm be the all games search componenet</div>}/>
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

