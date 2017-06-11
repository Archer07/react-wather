import React, {Component} from 'react';

// class About extends Component {
//   render() {
//     return (
//       <div>
//         <h1> About Page</h1>
//       </div>
//     );
//   }
// }

// stateless functional Component

let About = (props) => {
  return (
    <div className="callout large col-md-10 about-pg">
    <h2> About RWeather</h2>
      <p>This app consumes the OpenWeatherMap API for current weather Data. The only information it provides is the temperature depneding on the location provided in the input field.</p>
      <p>This app uses NodeJs, Express, and React as the main technologies that was built with.</p>
    </div>
  );
}


export default About
