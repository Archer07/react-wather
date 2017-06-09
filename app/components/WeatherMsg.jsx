import React, {Component} from 'react';


let WeatherMsg = (props) => {
  return (
    <div>
    <h2> The Weather in {props.location} is {props.temp}</h2>
    </div>
  );
}


export default WeatherMsg
