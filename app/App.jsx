import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Sec from './components/Sec.jsx';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
        <Route path="/sec" component={Sec}>

        </Route>

      </Router>
    );
  }
}


export default App
