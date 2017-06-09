import React, {Component} from 'react';

class WeatherMsg extends Component {
  render() {
    return (
      <div>
      <h2> The Weather in {this.props.location} is {this.props.temp} *C</h2>
      </div>
    );
  }
}


export default WeatherMsg
