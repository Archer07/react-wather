import React, {Component} from 'react';
import WeatherMsg from 'WeatherMsg';
import WeatherForm from 'WeatherForm';

class Weather extends Component {
  render() {
    return (
      <div>
      <h2>Get The Weather:</h2>
      <WeatherForm/>
      <WeatherMsg />
      </div>
    );
  }
}


export default Weather
