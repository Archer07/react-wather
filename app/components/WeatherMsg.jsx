import React, {Component} from 'react';


let WeatherMsg = (props) => {
  return (
    <div className="col-md-8">
    <div className="alert alert-info" role='alert'>
    <h2> The Weather in {props.location} is {props.temp}</h2>
    </div>
    </div>
  );
}


export default WeatherMsg
