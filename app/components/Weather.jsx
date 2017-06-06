import React, {Component} from 'react';

class Weather extends Component {
  onSubmit(e) {
    e.preventDeafult();
  }
  render() {
    return (
      <div>
      <h2>Get The Weather:</h2>
      <form className="form-horizontal">
        <fieldset>
        <div className="form-group">
          <div className="col-lg-10">
            <input type="text" className="form-control" id="inputEmail" placeholder="Type the name of the City..."/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-lg-10 col-lg-offset-2">
            <button type="submit" onSubmit={this.onSubmit} className="btn btn-primary">Get</button>
          </div>
        </div>
        </fieldset>
      </form>
      </div>
    );
  }
}


export default Weather
