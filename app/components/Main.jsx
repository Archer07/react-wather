import React, {Component} from 'react';
import Nav from 'Nav';

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
          <div className='weatherForm col-md-4 col-md-offset-2'>
            {this.props.children}
          </div>
      </div>
    );
  }
}


export default Main
