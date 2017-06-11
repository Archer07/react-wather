import React, {Component} from 'react';


let WeatherMsg = (props) => {
  return (
    <div className="Wmsg">
    <div className="alert alert-info" role='alert'>
    <h2 className="mainT"> The Weather in {props.location} is {props.temp}</h2>
    </div>
    </div>
  );
}


export default WeatherMsg
