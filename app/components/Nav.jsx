import React, {Component} from 'react';

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
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Contact</a></li>
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
