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

class About extends Component {
  componentDidMount() {
    // let modal = new Foundation.Reveal($('#pop'));
    // modal.open();
  }

  render() {
    let modal = new Foundation.Reveal($('#pop'));
    //modal.open();
    return (
      <div className="callout large col-md-10 about-pg">
      <h2> About RWeather</h2>
        <p>This app consumes the OpenWeatherMap API for current weather Data. The only information it provides is the temperature depneding on the location provided in the input field.</p>
        <p>This app uses NodeJs, Express, and React as the main technologies that was built with.</p>
        <div className="reveal" id="pop" data-reveal>
        <h1>Awesome. I Have It.</h1>
          <p className="lead">Your couch. It is mine.</p>
          <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
          <button className="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p><a data-open="pop">Click me for a modal</a></p>
      </div>
    );
  }
}


export default About
