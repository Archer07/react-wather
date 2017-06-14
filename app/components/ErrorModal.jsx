import React, {Component} from 'react';


let ErrorModal = (props) => {
  return (
    <div className="">
    <div className="reveal tiny text-center" id="pop" data-reveal>
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


export default ErrorModal
