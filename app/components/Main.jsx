import React, {Component} from 'react';
import Nav from 'Nav';

let Main = (props) => {
  return (
    <div>
      <Nav />
        <div className='weatherForm large-8 large-offset-1'>
          {props.children}
        </div>
    </div>
  );
}


export default Main
