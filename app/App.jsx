import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
      </Router>
    );
  }
}


export default App
