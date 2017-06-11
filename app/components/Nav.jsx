import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';


// stateless functional component
class Nav extends Component {
  render () {
    return (
      <div className="top-bar">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li className="menu-text">RWeather</li>
        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
        <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
      </ul>
    </div>
    <div className="top-bar-right">
      <form onSubmit={this.onSearch}>
      <ul className="menu">
        <li><input type="search" placeholder="City..."/></li>
        <li><button type="submit" className="button">Search</button></li>
      </ul>
      </form>
    </div>
  </div>
    );
  }
}
// links
// /about, /conatct

export default Nav
