import React, {Component} from 'react';



// in cases where the Component is presentational and doesn;t maintain the state, it's better to use stateless functional components

// class About extends Component {
//   render() {
//     return (
//       <div>
//         <h1> About Page</h1>
//       </div>
//     );
//   }
// }

// the stateless functional component version
// use it only if the component is presentational and doesn't maitain state

let About = (props) => {
  return (
    <div>
      <h1> About Page</h1>
      <p>This is the about page, and it's empty, so there is nothing to see here. Go AWAY!</p>
    </div>
  );
}

export default About
