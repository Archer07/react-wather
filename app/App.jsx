import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Contact from 'Contact';



$(document).foundation();

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact} />
          <IndexRoute component={Weather}/>
        </Route>

      </Router>
    );
  }
}


export default App
