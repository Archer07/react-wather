import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
        <Route path="about" component={About}/>
          <IndexRoute component={Weather}/>
        </Route>

      </Router>
    );
  }
}


export default App
