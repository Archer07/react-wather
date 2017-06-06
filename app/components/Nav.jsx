import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React Weather</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
    );
  }
}


export default Nav
