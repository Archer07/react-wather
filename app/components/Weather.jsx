import React, {Component} from 'react';
import WeatherMsg from 'WeatherMsg';
import WeatherForm from 'WeatherForm';

class Weather extends Component {
  handleSearch (city) {
    alert(city);
  }
  render() {
    return (
      <div>
      <h2>Get The Weather:</h2>
      <WeatherForm onSearch={this.handleSearch}/>
      <WeatherMsg />
      </div>
    );
  }
}


export default Weather
