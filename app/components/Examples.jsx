import React, {Component} from 'react';
import {Link} from 'react-router';

class Examples extends Component {
  render() {
    return (
      <div className="large-8 large-offset-4">
        <h3>Click below links for examples:</h3>
        <ol>
          <li>
            <Link to='/?location=Rabat'>Rabat, MA</Link>
          </li>
          <li>
            <Link to='/?location=Madrid'>Madrid, ES</Link>
          </li>
          <li>
            <Link to='/?location=Istanbul'>Instanbul, TR</Link>
          </li>
        </ol>
      </div>
    );
  }
}


export default Examples
