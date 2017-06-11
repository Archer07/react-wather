import React from 'react';
import ReacDOM from 'react-dom';
import App from './App.jsx';

// load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');

ReacDOM.render(
  <App />,
  document.getElementById('app')
);
