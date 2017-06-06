import React, {Component} from 'react';

class WeatherForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    let city = this.refs.inputEmail.value.trim();
    let esult = 'here';
    alert(city);
  };
  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit.bind(this)} className="form-horizontal">
        <div className="form-group">
          <div className="col-lg-10">
            <input type="text" className="form-control" ref="inputEmail" placeholder="Type the name of the City..."/>
            <button type="submit" className="pull-right btn btn-primary wbtn">Get</button>
          </div>
        </div>
      </form>
      </div>
    );
  }
}


export default WeatherForm
