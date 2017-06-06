import React, {Component} from 'react';
import Nav from 'Nav';

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
          <div className='container-fluid col-md-6 col-md-offset-2'>
            {this.props.children}
          </div>
      </div>
    );
  }
}


export default Main
