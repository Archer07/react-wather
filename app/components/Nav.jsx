import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';


// stateless functional component
let Nav = (props) => {
  return (
    <div className="top-bar">
  <div className="top-bar-left">
    <ul className="dropdown menu" data-dropdown-menu>
      <li className="menu-text">RWeather</li>
      <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
      <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
    </ul>
  </div>
  <div className="top-bar-right">
    <ul className="menu">
      <li><input type="search" placeholder="Search"/></li>
      <li><button type="button" className="button">Search</button></li>
    </ul>
  </div>
</div>
  );
}
// links
// /about, /conatct

export default Nav
