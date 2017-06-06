import React, {Component} from 'react';
import Nav from 'Nav';

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1> Main page</h1>
        {this.props.children}
      </div>
    );
  }
}


export default Main
